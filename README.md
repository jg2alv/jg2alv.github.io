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

The approved interactive mock and color exploration are preserved in `design/mockups/`. The current identity uses a compact icon navigation rail, screen-sized sections, persistent English/Portuguese controls, and light/dark themes. The dark palette combines black, white, and terminal green (#00FF85); the light palette uses black text and a Deep Sky Blue (#00BFFF) accent. A native animated interference field from `widgets/campo-de-interferencia.html` runs behind the page, with no widget titles or controls. The homepage résumé is stored at `public/resume-joao-vaz.pdf`.
