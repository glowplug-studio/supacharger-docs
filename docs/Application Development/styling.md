---
sidebar_position: 6
---

# Styling

## Fonts

Setting google fonts
ctrl f replace on "Inter"

currnetly using Plus Jakarta Sans    from Google fonts.

FOnts are defined firstly in 

```bash
    src/app/layout.tsx 
```

Using fonts with two words in the name:

Space Grokesk is written as:

```` js
    
    import { Space_Grotesk } from 'next/font/google';

    const spaceGrotesk = Space_Grotesk({
        variable: '--font-manrope',
        subsets: ['latin'],
    });
    
````

search the entire project source for all instances of the font name and replace.

fonts are installed with next/font https://nextjs.org/docs/pages/building-your-application/optimizing/fonts

Google fonts are pulled into the project at compilaton and and no requests are made to google

Text style defatls are set in

## Custom CSS

Stlyes defiend by the Supacharger core are in 


```bash
    src/supacharger/styles/globals.scss
```

to override these use, this file will not be affected by future core updates

```bash
    src/styles/globals.scss
```


## Tailwind 



### Colours


Setting brand colour 

Configuring the primary highlight and unhighlight colour

 class is set in src/styles/globals.scss  

Primary and secondary colors

```` CSS
    --primary: 244 53% 23%;;
    --primary-foreground: 210 40% 98%;

    --secondary: 174 49% 50%;
    --secondary-foreground: 222.2 47.4% 11.2%
````


#42BFB1 - hsl format 174 49% 50%; use figma or https://htmlcolors.com/hex-to-hsl

### Input and button stylng 

