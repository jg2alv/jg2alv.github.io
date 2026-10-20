import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const tag = z.string().refine(
  (value) => value === value.toLowerCase() && !/\s/.test(value),
  'Tags must be lowercase and contain no spaces.',
);

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    period: z.string().regex(/^\d{4}-(01|02)$/),
    origin: z.enum(['academic', 'personal']),
    discipline: z.string().optional(),
    disciplineTags: z.array(tag).default([]),
    technologyTags: z.array(tag).default([]),
    role: z.string(),
    repository: z.url(),
    featured: z.boolean().default(false),
    order: z.number().int().default(0),
    visual: z.enum(['scheduler', 'routes', 'traces', 'compiler', 'pixels', 'data', 'solar-sorting', 'binary-relations', 'board-games', 'indirect-sorting', 'hospital-events', 'flight-search', 'modulo-five', 'risc-assembly', 'risc-datapath', 'cache-simulator', 'housing-analysis', 'shelter-network', 'defense-cut', 'queen-route', 'trie-search', 'clustering', 'optimization-models', 'simplex', 'starfleet-protocol', 'deforestation-patrol', 'basket-mining', 'music-clustering', 'hit-classification', 'game-sales', 'shell-redirection', 'virtual-memory', 'federated-privacy', 'adversarial-search', 'cookie-storefront', 'pdf-workflow', 'url-shortener', 'audio-metadata']),
  }),
});

export const collections = { projects };
