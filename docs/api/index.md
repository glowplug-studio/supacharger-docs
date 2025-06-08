---
sidebar_position: 5
---

# Role 

Front end /  App > NextJS Endpoint > Supabase < NextJS endpooint < App

## Accounts


### Resend Activation Email

/api/account/resend-activation-link 

Responses

Request: POST value - email

Success
status 200 - message:success

Failed

status 400 - error:failed_resend

Internal Server Error
status 500 - error:server_error


Failed email validation
staus 400 - error:invalid_email