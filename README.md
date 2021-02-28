# Preact with next.js

## Online documentation

  - https://docs.google.com/spreadsheets/d/1wPCe1_E_bgqGdEIR60ckRatEVjGMUZHqvofyGWZkwyM/edit#gid=310824755
  - github markdown: https://github.github.com/gfm/

## Steps summary

1 install preact for next.js

  - see: https://github.com/vercel/next.js/tree/canary/examples/using-preact

2 create local git repo & add to github

3 integrate with netlify

4 add support for typescript

5 add support for absolute paths

6 add support for jest tests

  - ** tests cannot go in /pages **

7 add manifest and service worker support

8 add support for open graph protocol e.g. meta tages in header

9 run first performance tests

10 add _document.tsx in /pages

11 add lighthouse and website carbon badges

  - add badges
  - add lighthouse budget and README for how to run reports (against the live site) from the command line

12 add netlify build status badge:

  - [![Netlify Status](https://api.netlify.com/api/v1/badges/95741ee3-ab8b-47f4-a4ca-b039765160f1/deploy-status)](https://app.netlify.com/sites/snapdragon-retrieval/deploys)

13 classname is now supported out of the box

14 add support for sass

15 create branch for netlify deploys

  - see cheat-sheet: https://gist.github.com/cferdinandi/ef665330286fd5d7127d

  - change netlify deploy branch from main to netlify-deploy: https://app.netlify.com/sites/condescending-villani-e9aade/settings/deploys

  ```
  check current: git branch -vv
  create new local branch: git checkout -b netlify-deploy
  sync branch with remote: git push -u origin netlify-deploy
  checkout branch: git checkout netlify-deploy
  check current: git branch -vv
  return to main: git checkout main
  make changes to main: git add . git commit git push
  ** netlify does NOT publish changes **
  checkout out branch: git checkout netlify-deploy
  merge changes from main: git merge main
  check changes to branch: git log netlify-deploy
  push changes to origin: git push
  ** netlify PUBLISHES changes **
  ```
16 apply tighter headers security

  ```
  add next-secure-headers settings in netlify.config.js
  add netlify security settings in netlify.toml
  run tests: https://observatory.mozilla.org/analyze/condescending-villani-e9aade.netlify.app
  run tests: https://webpagetest.org/result/210228_DiEC_445775dc7e0b56cdc18d146032aae636/
  ```

---------- below this line is the original README.md ----------

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
