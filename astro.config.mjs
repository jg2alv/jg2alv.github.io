import { defineConfig } from 'astro/config';

const [githubOwner, githubRepository] = (process.env.GITHUB_REPOSITORY ?? '').split('/');
const isUserPage = githubRepository === `${githubOwner}.github.io`;
const inferredBase =
  process.env.GITHUB_ACTIONS === 'true' && githubRepository && !isUserPage
    ? `/${githubRepository}`
    : '/';

export default defineConfig({
  output: 'static',
  site: process.env.SITE_URL ?? (githubOwner ? `https://${githubOwner}.github.io` : undefined),
  base: process.env.PUBLIC_BASE_PATH ?? inferredBase,
  trailingSlash: 'always',
});
