import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		pubDate: z.coerce.date(),
		tags: z.array(z.string()).default([]),
		lang: z.enum(['zh', 'en']).default('zh'),
	}),
});

export const collections = { blog };
