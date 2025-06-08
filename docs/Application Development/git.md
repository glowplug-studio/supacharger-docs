
# Git 

## Suggested Branching for Vercel

Out of the box on the free plan Vercel will deploy main or master to the produciton deployment. 

All other branches when pushed to origin will automatically be build and deploy to the preview URL. 

To prevent builds from running on every branch this project includes a JSON config which specifies which branches should not be built when pushed to origin (Githuib in most cases).

``/verce.json``

You will need to have a Pro or Enterprise account to associate a branch with an environment. 
Using the free account you can not prevent automtic builds or set a branches environment.

There is a workaround. Create a 'preview' branch on your repository, only merge to, push to and accept PR's on that when you want to see a preview build run on Vercel.

https://vercel.com/docs/project-configuration/git-configuration 

The limits are high but why churn through pointless builds when all you want to do is bank your code.
(Maximum 100 build hours per month (shared across all projects on your account) on Hobby plan. 

You can specify directories like feat/ to exclude as well.

``` JSON
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "git": {
    "deploymentEnabled": {
      "main": true,
      "preview": true,
      "development": false,
      "feat/*": false
    }
  }
}
```

Alternatively turn off all deployments https://vercel.com/docs/project-configuration/git-configuration#turning-off-all-automatic-deployments 