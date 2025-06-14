---
sidebar_position: 5
---

# supacharger-cli

## Installation

Install the supacharger-cli with npm. <a href="https://www.npmjs.com/package/@glowplug/supacharger-cli" target="_blank" rel="noopener noreferrer">More on npm</a>

```bash
npm i @glowplug/supacharger-cli
```

## Commands 


### init 
> ⚠️ You need  Have the development environment prerequesits (LINK) set up before running this, docker running etc. Gather all of your API keys and vars first. See the Getting started page for more.

- Creates a folder for your project
- Creates a new project, pulling source from the supacharger Github
- runs a wizard to set up environment variables
- runs supabase edge function synch 
- runs supabase commands to seed 
- runs supabase migrations
- runs npm build 
- starts local dev environment

Example:
````bash
supacharger init my-project
````

### enable plugin-name

alias: **en**

- Enables a registered module by setting enabled to true.

Example:
````bash
supacharger en plugin-name
````



### disable plugin-name

alias: **dis**

- Disables a registered module by setting enabled to false.

Example:
````bash
supacharger dis plugin-name
````

### install plugin-name

alias: **in**

flags: -f (force - will remove git refs and files, then clone a fresh copy)

Atttempts to install a plugin and activate it.

- pulls source from github - may require purcahse first and github username
- modifies core files 
- ceates database tables
- pushes edge functions
- seeds data
- enables the module in its config
- stops the development server process
- triggers a rebuild of the project 
- starts the development server

````bash
supacharger install plugin-name
````

You will need to rebuild your project after enabling a module

```bash
npm run build
```

### uninstall plugin-name

alias: **un**
Completely uninstalls a Plugin

- Removes the Plugin directory from (plugins)
- Attempts to remove source from core files if it has not been modified
- Attempts to remove database tables
- Attempts to remove edge functions
- stops the development server process
- removes Plugin from .gitmodules
- triggers a rebuild of the project, removing it from registry
- starts the development server

Example:

````bash
supacharger un plugin-name
````

### coreupdate

Update a project to the latest version of Supacharger.

This ones hardcore and can potentially screw up your project. Back up first.

- Pull the latest core files
- run migrations

```bash
supacharger coreupdate
```