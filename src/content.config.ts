import { defineCollection, z } from "astro:content";
import { file, glob } from "astro/loaders";

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

const socials = defineCollection({
  loader: file("src/data/socials.json"),
  schema: z.object({
    name: z.string(),
    url: z.string().url(),
    iconPath: z.string()
  })
})

const works = defineCollection({
  loader: file("src/data/works.json"),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    companyLink: z.string().url(),
    startDate: z.string(),
    endDate: z.string().optional(),
    description: z.string()
  })
})

export const collections = { blog, socials, works };