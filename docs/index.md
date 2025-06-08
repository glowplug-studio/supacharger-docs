---
sidebar_position: 1
---

# Getting Started

> ⚠️ You need [pnpm](https://pnpm.io/) installed to manage dependencies.

First, install the dependencies:

```bash
pnpm install
```

Recommend using Cursor or VS Code.
settings are stored in the repo

Second, start the local Supabase environment. To do so, follow these steps:

1. Install [Docker](https://www.docker.com/).
2. Setup the environment variables (.e.g the external auth providers secrets), see [.env.example](https://github.com/glowplugstudio/supacharger/tree/main/.env.example) for details.
3. Start the local Supabase environment:
   ```bash
   pnpm supabase:start
   ```
   This command downloads all the Docker containers needed by Supabase and sets up the local Supabase environment. It also applies the default migrations, that can be found in [supabase/migrations](https://github.com/glowplugstudio/supacharger/tree/main/supabase/migrations). See [Database configuration](#database-configuration) below for more details.
   > If you're getting errors like `Error response from daemon...`, just wait a few seconds and try again.
4. The previous command gives you some URLs and keys for your Supabase instance. Copy the `API URL` and the `anon key` into your `.env` file accordingly. These values are used by Next.js to connect to your Supabase instance.
5. Access the local Supabase Studio (`Studio URL` in the output of the previous command, defaults to [http://127.0.0.1:54323](http://127.0.0.1:54323)) and run this SQL command in the [SQL editor](http://127.0.0.1:54323/project/default/sql):
   ```sql
   -- read the variables from the output of the previous command
   -- NOTE: for local dev environment use host.docker.internal as host instead of 127.0.0.1: http://127.0.0.1:54321 -> http://host.docker.internal:54321
   select vault.create_secret('<YOUR_SUPABASE_URL_WITHOUT_TRAILING_SLASH>', 'SUPABASE_URL');
   select vault.create_secret('<YOUR_SUPABASE_SERVICE_ROLE_KEY>', 'SUPABASE_SERVICE_ROLE_KEY');
   ```

Third, run the development server:

```bash
pnpm dev
```

Finally, open [http://localhost:3000](http://localhost:3000) with your browser.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


Credits 

Demo page figma 
ME Studio - Chat Messenger
https://www.figma.com/community/file/1401337695448832844 

Khrystyna Feldsher - Dribbble shots - Mobile app mockups
https://www.figma.com/community/file/1320749398401735416/dribbble-shots-mobile-app-mockups

Visiata Systems International - Voice Chat - Private Chat Clubs
https://www.figma.com/community/file/1322512449140257656 