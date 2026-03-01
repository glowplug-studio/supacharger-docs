import { spawnSync } from "node:child_process";
import { promises as fs } from "node:fs";
import path from "node:path";

const BUILD_DIR = path.resolve(process.cwd(), "build");
const WEBP_QUALITY = Number.parseInt(process.env.WEBP_QUALITY ?? "82", 10);
const TEXT_FILE_EXTENSIONS = new Set([
  ".html",
  ".js",
  ".css",
  ".json",
  ".xml",
  ".txt",
  ".map",
]);

function toPosixPath(inputPath) {
  return inputPath.split(path.sep).join("/");
}

async function walkFiles(startDir) {
  const entries = await fs.readdir(startDir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const absolutePath = path.join(startDir, entry.name);
      if (entry.isDirectory()) {
        return walkFiles(absolutePath);
      }
      return [absolutePath];
    }),
  );
  return files.flat();
}

function runSquooshCliForPngs(pngFiles) {
  if (pngFiles.length === 0) {
    return;
  }

  const chunkSize = 40;
  for (let start = 0; start < pngFiles.length; start += chunkSize) {
    const chunk = pngFiles.slice(start, start + chunkSize);
    const args = [
      "--yes",
      "@squoosh/cli",
      "--webp",
      `{"quality":${WEBP_QUALITY}}`,
      ...chunk,
    ];
    const result = spawnSync("npx", args, { stdio: "inherit" });
    if (result.error) {
      throw new Error(
        `Failed to run npx for WebP conversion: ${result.error.message}`,
      );
    }
    if (result.status !== 0) {
      throw new Error(
        `WebP conversion failed with exit code ${result.status ?? 1}`,
      );
    }
  }
}

function replaceAllWithCount(input, find, replacement) {
  const segments = input.split(find);
  if (segments.length === 1) {
    return { output: input, count: 0 };
  }
  return {
    output: segments.join(replacement),
    count: segments.length - 1,
  };
}

async function replacePngReferencesWithWebp(allFiles, replacementMap) {
  const replacePairs = Array.from(replacementMap.entries()).sort(
    ([leftKey], [rightKey]) => rightKey.length - leftKey.length,
  );
  const textFiles = allFiles.filter((filePath) =>
    TEXT_FILE_EXTENSIONS.has(path.extname(filePath).toLowerCase()),
  );

  let updatedFiles = 0;
  let totalReplacements = 0;

  for (const textFile of textFiles) {
    const originalContent = await fs.readFile(textFile, "utf8");
    let nextContent = originalContent;
    let fileReplacementCount = 0;

    for (const [pngRef, webpRef] of replacePairs) {
      if (!nextContent.includes(pngRef)) {
        continue;
      }
      const { output, count } = replaceAllWithCount(nextContent, pngRef, webpRef);
      nextContent = output;
      fileReplacementCount += count;
    }

    if (fileReplacementCount > 0 && nextContent !== originalContent) {
      await fs.writeFile(textFile, nextContent, "utf8");
      updatedFiles += 1;
      totalReplacements += fileReplacementCount;
    }
  }

  return { updatedFiles, totalReplacements };
}

async function main() {
  let buildDirStat;
  try {
    buildDirStat = await fs.stat(BUILD_DIR);
  } catch {
    console.log(`[webp] Build directory not found at ${BUILD_DIR}, skipping.`);
    return;
  }

  if (!buildDirStat.isDirectory()) {
    console.log(`[webp] ${BUILD_DIR} is not a directory, skipping.`);
    return;
  }

  const allFiles = await walkFiles(BUILD_DIR);
  const pngFiles = allFiles.filter((filePath) =>
    filePath.toLowerCase().endsWith(".png"),
  );

  if (pngFiles.length === 0) {
    console.log("[webp] No PNG files found in build output.");
    return;
  }

  console.log(`[webp] Converting ${pngFiles.length} PNG files to WebP...`);
  runSquooshCliForPngs(pngFiles);

  const replacementMap = new Map();
  for (const pngFile of pngFiles) {
    const webpFile = pngFile.replace(/\.png$/i, ".webp");
    try {
      await fs.access(webpFile);
    } catch {
      continue;
    }
    const relativePngPath = toPosixPath(path.relative(BUILD_DIR, pngFile));
    const relativeWebpPath = toPosixPath(path.relative(BUILD_DIR, webpFile));
    replacementMap.set(`/${relativePngPath}`, `/${relativeWebpPath}`);
    replacementMap.set(relativePngPath, relativeWebpPath);
  }

  const { updatedFiles, totalReplacements } =
    await replacePngReferencesWithWebp(allFiles, replacementMap);

  console.log(
    `[webp] Replaced ${totalReplacements} PNG references across ${updatedFiles} built files.`,
  );
}

main().catch((error) => {
  console.error(`[webp] ${error instanceof Error ? error.message : String(error)}`);
  process.exit(1);
});
