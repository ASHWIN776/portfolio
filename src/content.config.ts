import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/data/blog",
  }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    oneLiner: z.string(),
    description: z.string(),
    tags: z.array(z.string())
  })
})

export const collections = { blog };