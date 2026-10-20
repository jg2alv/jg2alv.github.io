# Project Portfolio

A responsive, static portfolio built with Astro, TypeScript, HTML, and custom CSS. It is designed for GitHub Pages and uses project Markdown files as its content source.

Project content is stored in one Markdown file per real project under `src/content/projects/`.

## Local development

```sh
pnpm install
pnpm dev
```

Useful checks:

```sh
pnpm check
pnpm build
pnpm preview
```

`pnpm build` writes the complete static site to `dist/`. To view that exact production build locally, run `pnpm preview` and open the local address shown by Astro. Opening `dist/index.html` directly with the `file://` protocol is not reliable because browsers resolve multi-page routes and compiled assets differently outside a web server.

## Content

- Edit personal details and external links in `src/data/site.ts`.
- Add one Markdown file per project in `src/content/projects/`.
- Keep every tag lowercase and free of spaces, for example `operating-systems`, `academic`, and `typescript`.
- Use the semester format `YYYY-01` or `YYYY-02`.
- Put project media under `public/images/projects/<project-slug>/`.

## GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and publishes pushes to `main`. The Astro configuration automatically infers the repository subpath when GitHub Actions builds a project site. In repository settings, select **GitHub Actions** as the Pages source.

Set `SITE_URL` only when publishing under a custom domain. `PUBLIC_BASE_PATH` can override the inferred path if a nonstandard Pages setup needs it.

## Design references

The approved interactive mock and color exploration are preserved in `design/mockups/`. The production components reproduce the Aubergine & Sage direction while keeping content, behavior, and presentation separate.
