---
sidebar_position: 6
---

# Extend

You can extend with prebuilt functionality.

See a list of extensions here 

https://get.supacharger.dev/source/plugins/

You will need to add your github username

## How To install Supacharger Extensions

### Using the CLI 

See the cli documentation install function here 

### Using Git

This requires a github account. 

You need to get a License from the store this will grant you read permissions on the github repository. You will recieve an email with instructions and the github url to use.

To import the code as a git submodule:
````bash
cd /

git submodule add git@github.com:glowplug-studio/supacharger-ext-brevo-newsletter.git src/app/\(supacharger\)/\(plugins\)/brevo-newsletter

````
if promopted enter your local SSH key passkey, or git creds.

After successfully cloned enabled the module in 

````bash
src/app/(supacharger)/(plugins)/brevo-newsletter/brevo-newsletter/config.js 
````

set 
````js
exports.SC_PLUGIN_CONFIG = {
  PLUGIN_ENABLED: true,
````
Then rebuild the project

````bash
npm run build
npm run dev
````

 Pulling updates to the submodule 

> ⚠️  Warning! this might cause breaking changes, be prepared to roll back.

````bash
cd path/to/submodule
git checkout main    # or the branch you track, e.g. master
git pull origin main
````

# Using an Plugin in your Project 

## Code
Typically you will need to mnaully integrate the plugin where the documentation suggests.

## Migrations & Seed data

Use the Supabase CLI to run the sql files

## Edge & RPC functions

Use the Supabase CLI to push your edge functions and RPC

## Modifying and editing plugins & RPC functions

Feel free to copy the files out of the (supacharger) file structure and modify to suit your own needs. 
Modifications of the plugin in-situ may result in lost changes if updates are pulled from the gitsubmodule.

# Creating a plugin

We are exploring how to reward developers who want to sell functionality with the dev bounty.

## Anatomy of a Plugin 

Files are colocated using nextjs folder structure best practice

App Router Considerations

Any page file inside your module will appear relative to /app in the site navigation as NextJS ignores the bracketed folders

Plugins will be installed to 
````bash
src/app/(supacharger)/(plugins)
````

/my-plugin

/my-plugin/index.tsx

/my-plugin/actions.ts

/my-plugin/config/install.js

/my-plugin/config/config.js

/my-plugin/config/supabase

/my-plugin/components
