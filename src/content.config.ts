import { defineCollection, z } from "astro:content";
import { file, glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/data/blog",
  }),
  schema: z.object({
    // Common fields for all content types
    title: z.string(),
    date: z.date(),
    oneLiner: z.string(),
    tags: z.array(z.string()),
    
    // Field to distinguish between content types
    contentType: z.enum(['post', 'note']).default('post'),
    
    // Fields specific to notes (optional for regular blog posts)
    link: z.string().url().optional(),
    author: z.string().optional(),
    authorLink: z.string().url().optional(),
  })
})

const socials = defineCollection({
  loader: file("src/data/socials.json"),
  schema: z.object({
    name: z.string(),
    url: z.string().url(),
    handle: z.string(),
    iconPath: z.string()
  })
})

const works = defineCollection({
  loader: file("src/data/works.json"),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    companyLink: z.string().url(),
    location: z.string(),
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
  projects
};