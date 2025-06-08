import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {

  // SEO indexing
  noIndex: true, // Defaults to `false` disallow indexng and search engines 

  title: "Supacharger",
  tagline: "An Open Source foundation kit for Next.js, Stripe and Supabase SaaS projects",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://supacharger.dev",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'facebook', // Usually your GitHub org/user name.
  // projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/glowplugstudio/supacharger-docs/tree/main",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/glowplugstudio/supacharger-docs/tree/main",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  // headTags: [
  //   {
  //     tagName: "link",
  //     attributes: {
  //       rel: "preload",
  //       href: "/fonts/Satoshi-Regular.woff",
  //       as: "font",
  //       type: "font/woff",
  //       crossorigin: "anonymous",
  //     },
  //   },

  //   {
  //     tagName: "link",
  //     attributes: {
  //       rel: "preload",
  //       href: "/fonts/Satoshi-Black.woff",
  //       as: "font",
  //       type: "font/woff",
  //       crossorigin: "anonymous",
  //     },
  //   },
  // ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/supacharger-social-card.jpg",
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: "Supacharger",
      logo: {
        alt: "Supacharger Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "dropdown",
          label: "Docs",
          position: "left",
          items: [
            {
              label: "Getting Started",
              to: "/docs/",
            },
            {
              label: "Local Setup",
              to: "/docs/guides/setup-wizard/",
            },
            {
              label: "Deploy",
              to: "/docs/guides/deploy/",
            },
            {
              label: "CLI",
              to: "/docs/cli/",
            },
            {
              label: "Appsmith Admin GUI",
              to: "/docs/",
            },
            // Add more items as needed
          ],
        },
        {
          type: "dropdown",
          label: "Extend",
          position: "left",
          items: [
            {
              label: "Buy Extensons",
              href: "https://store.supacharger.dev",
            },
            {
              label: "Custom SaaS MVP development",
              to: "/custom-saas-development",
            },
            // Add more items as needed
          ],
        },
        {
          type: "dropdown",
          label: "Product & Roadmap",
          position: "left",
          items: [
            {
              label: "Full Features List",
              to: "product/features",
            },
            {
              label: "Feature Roadmap",
              href: "https://app.loopedin.io/supacharger",
            },
            {
              label: "Request Something",
              href: "https://app.loopedin.io/supacharger/ideas",
            },
            {
              label: "Paid Requests & Dev Bounty",
              to: "/product/feature-bounty",
            },
            {
              label: "Changelog",
              to: "/product/changelog",
            },
                 ],
        },
       
        { to: "/product/showcase", label: "Showcase", position: "left" },
        {
          type: "dropdown",
          label: "Support",
          position: "left",
          items: [
            {
              label: "Discord Community",
              href: "https://discord.gg/anXpcd5p", 
            },
           
            {
              label: "Open Issues",
              href: "https://github.com/glowplugstudio/supacharger/issues",
            },
            {
              label: "Contact",
              to: "contact",
            },
                 ],
        },
        { to: "/product/pricing", label: "Pricing", position: "left" },
        {
          href: "https://github.com/sharpi-sh/supacharger",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/glowplugstudio/supacharger",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} glowplug. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
