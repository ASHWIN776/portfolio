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
    tags: z.array(z.string())
  })
})

const notes = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/data/notes",
  }),
  schema: z.object({
    title: z.string(),
    link: z.string().url(),
    author: z.string(),
    authorLink: z.string().url(),
    foundDate: z.date(),
    oneLiner: z.string(),
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

const projects = defineCollection({
  loader: file("src/data/projects.json"),
  schema: z.object({
    name: z.string(),
    date: z.string(),
    skills: z.array(z.string()),
    oneLiner: z.string(),
    description: z.string(),
    imagePath: z.string(),
    links: z.object({
      github: z.string().url().optional(),
      live: z.string().url().optional(),
      youtube: z.string().url().optional()
    })
  })
})

export const collections = { 
  blog, 
  socials, 
  works, 
  projects, 
  notes 
};