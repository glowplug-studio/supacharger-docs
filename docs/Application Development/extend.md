---
sidebar_position: 6
---

# Extend

You can extend with prebuilt functionality.

See a list of extensions here 

https://license.supacharger.dev/product-category/licenses/modules/

You will need to add your github username

# How To install Supacharger Extensions

## Using the CLI 

Coming soon.

## Using Git

You need to get a License from the store this will XXX

Add a git submodule using your git credentials either https or ssh

git submodule add git@github.com:glowplug-studio/supacharger-ext-brevo-newsletter.git src/app/\(supacharger\)/\(plugins\)/[PLUGIN-NAME]

After installed 

run npm run build to generate the registry file.

### Pullung updates to the submodule 

cd src/app/(supacharger)/(plugins)/[PLUGIN-NAME]
git pull origin main

enabled the module in 
src/app/(supacharger)/(plugins)/brevo-newsletter/brevo-newsletter/config.js 

npm run build

npm run dev

# Uing an extension 

## Code
Typically you will need to mnaully integrate the plugin where the documentation suggests.

## Migrations & Seed data

Use the Supabase CLI to run the sql files

## Edge & RPC functions

Use the Supabase CLI to push your edge functions and RPC