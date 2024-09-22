import { z, defineCollection } from "astro:content"

const dishes = defineCollection({
	type: "data",
	schema: z.object({
		title: z.string(),
		price: z.number(),
		image: z.string(),
	}),
})

export const collections = {
	dishes,
}
