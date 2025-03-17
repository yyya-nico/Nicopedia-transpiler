import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    urlSnippet: z.string(),
    title: z.string()
  }),
});

export const collections = { posts };