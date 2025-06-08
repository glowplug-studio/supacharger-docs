---
sidebar_position: 2
---

# Authentication

We use [Supabase Auth UI](https://github.com/supabase/auth-ui) for auth components. To configure which providers to use, change the `AUTH_PROVIDERS` constant in the [Auth.tsx](https://github.com/glowplugstudio/supacharger/tree/main/src/components/Auth.tsx) component.

Full flowchart of authentication process laid out in this Figjam along with the relevant Supabase instructions and Supacharger config 

https://www.figma.com/board/4R1DVmeM9o2kriiGhG0sHG/Supacharger-signup-flow?node-id=0-1&t=S7bqrs3eoh1HHmIo-1 


## sign up by email 

By default signing up with email requires the user to verfiy their email via OTP

Turn off OTP requirement

disalllow pplus in email


#### Set password Security Policy

Registration and password reset forms can validate password input in realtime.
Make sure your policy in the project matches that in the supabase admin.

###### use a policy in your next JS project 

These are defined in the 
src/supacharger/supacharger-config.ts  

PASSWORD_REQUIREMENTS - select a policy whicih mathes supabase

Use custom the regex here 
PASSWORD_CUSTOM_REGEX

Note that this custom regex is only server and front end evaluation on NextJS hosting platform not on supabase.


## Supported Flows 

Front end account pages 
Authentication methods can be enabled in the config 

``src/supacharger/config/config.ts``

Supabase config 
https://supabase.com/dashboard/project/[XXXX]/auth/providers

### API keys for Google

Nice explainer here from [Arielle Phoenix](https://www.youtube.com/watch?v=sB6bPOvvlgw)

Create
Get your supase project URL from here 

Authorised JavaScript origins
http://localhost
https://[XXXX].supabase.co

You can get the full string at the bottom of the auth provider panel

Authorised redirect URIs 
http://localhost/auth/callback
https://[XXXX].supabase.co/auth/v1/callback

Dont forget to remove your local from the authorised URLs. (do you need to worry about this?)

### OTP - verify Email

Turning this on or off

### Magic Link 

Magic link page

/signin/magic-link

## Protecing Routes

All routes are redirected to the configured login page of your choice unless specified in  

``src/supacharger/supacharger-config.ts``

regex for how to write routes is handled by path-to-regexp

