import { defineCollection, z } from 'astro:content';

const categories = [
  'Copa Feminina 2027',
  'Futebol',
  'Esportes',
  'Especial',
] as const;

const reportagens = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    date: z.coerce.date(),
    author: z.string(),
    category: z.enum(categories),
    coverImage: z.string().optional(),
    excerpt: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { reportagens };

export type Category = (typeof categories)[number];
