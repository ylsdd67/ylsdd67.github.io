# ylsdd67.github.io

Personal portfolio-first site (static) built with Astro + Tailwind CSS.

- Default language: Chinese at `/`
- English: `/en`
- Blog: Markdown-first via Astro Content Collections at `/blog`

## Local development

```sh
npm install
npm run dev
```

Then open the dev server URL shown in the terminal (default is `http://localhost:4321`).

## Build

```sh
npm run build
npm run preview
```

## Deploy (GitHub Pages)

This repo includes a GitHub Actions workflow at `.github/workflows/deploy.yml` that builds `./dist` and deploys it to GitHub Pages.

In your GitHub repo settings:

- Settings → Pages → Build and deployment → Source: GitHub Actions

## Customize

- Site config (name, bio, contacts): `src/config/site.ts`
- Avatar image: `public/images/aristotle.png`
- WeChat QR image: `public/images/wechat-qr.png`
