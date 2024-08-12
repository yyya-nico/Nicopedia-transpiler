import { z, defineCollection } from 'astro:content';

const postCollection = defineCollection({
  type: 'content',
  schema: z.object({
    urlSnippet: z.string(),
    title: z.string()
  }),
});

export const collections = {
  'posts': postCollection,
};