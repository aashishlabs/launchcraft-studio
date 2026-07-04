# LaunchCraft Studio

A small, responsive one-page digital services website for LaunchCraft Studio.

## Services

- Website Development
- Portfolio Development
- SEO
- Performance Marketing

## Project Structure

```text
launchcraft-studio/
├── index.html
├── README.md
├── wrangler.jsonc
├── package.json
├── .gitignore
├── .assetsignore
├── src/
│   └── index.js
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── script.js
    └── images/
```

## Local Browser Preview

Open `index.html` directly in your browser.

This tests the static HTML, CSS, and JavaScript files from your computer.

## Wrangler Local Development

After installing dependencies, run:

```bash
npm run dev
```

This starts a local Cloudflare Worker development server at:

```text
http://127.0.0.1:8787
```

If PowerShell blocks `npm`, use:

```powershell
npm.cmd run dev
```

## Git Workflow

Common commands:

```bash
git status
git add .
git commit -m "Initial website build"
git branch -M main
git push -u origin main
```

## Cloudflare Workers Deployment

This project uses Cloudflare Workers Static Assets.

The Worker entry file is:

```text
src/index.js
```

The static asset configuration is in:

```text
wrangler.jsonc
```

Deploy from your machine with:

```bash
npm run deploy
```

## Live URL

Production URL:

```text
To be added after first Cloudflare Workers deployment.
```

## Future Changes

1. Make the change locally.
2. Test in the browser.
3. Test with `npm run dev`.
4. Check Git status.
5. Commit the change.
6. Push to GitHub.
7. Confirm Cloudflare deployment.
