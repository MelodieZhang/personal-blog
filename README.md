# Melodie's typing...
[![Netlify Status](https://api.netlify.com/api/v1/badges/a73b0cee-cf33-4da2-834a-07b52cee5129/deploy-status)](https://app.netlify.com/sites/vibrant-fermi-5afcf1/deploys)

Here lies the source code of my personal blog [Melodie's typing...](https://menghanzhang.com/).

# Gatsby

## About Gatsby
[Gatsby](https://www.gatsbyjs.org/) is a free and open source framework based on React that helps developers build blazing fast **websites** and **apps**.

## This Blog
This blog is developed based on [gatsby-starter-blog](https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-blog/). You can start either from scratch or any existing [starter templates](https://www.gatsbyjs.org/starters?v=2) and [running sites](https://www.gatsbyjs.org/showcase/).

# Develop

## Development Environment
https://www.gatsbyjs.org/tutorial/part-zero/

## Code style
Use `npm run format` to format the repo.

## Commands
```shell
npm run build
npm run develop
npm run format
npm run start
npm run serve
npm run clean
npm run test
```

## Host
This blog is hosted on [Netlify](https://www.netlify.com/). Netlify builds and deploys the website automatically whenever there is a update in this repo.

## Domain
The domain of this blog is [menghanzhang.com](https://menghanzhang.com). It also has an old domain melodiezhang.com which is redirected to menghanzhang.com. Both domains were purchased on [GoDaddy](https://www.godaddy.com).

Netlify uses [Let's Encrypt](https://letsencrypt.org) to enable HTTPS for menghanzhang.com automatically. Since I don't have a host server for the old domain melodiezhang.com, it is not convenient to enable HTTPS for it. Unfortunately, the old domain enabled HSTS(HTTP Strict Transport Security) and the setting has been saved locally that existing users are blocked by visiting the old domain unless they clear the setting manually. So, I use [Cloudflare](https://www.cloudflare.com)
to stand between the users and the domain. Cloudflare enables HTTPS for melodiezhang.com.
