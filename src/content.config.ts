import { defineCollection, z } from "astro:content";
import { file, glob } from "astro/loaders";
import { githubContributionsLoader } from "./loaders/github-contributions-loader";

const blog = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/data/blog",
  }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    oneLiner: z.string(),
    tags: z.array(z.string()),
    contentType: z.enum(['post', 'note']).default('post'),
    link: z.string().url().optional(),
    author: z.string().optional(),
    authorLink: z.string().url().optional(),
  })
})

const works = defineCollection({
  loader: file("src/data/works.json"),
  schema: ({ image }) => z.object({
    company: z.string(),
    companyLink: z.string().url(),
    avatar: image(),
    location: z.string(),
    positions: z.array(z.object({
      title: z.string(),
      startDate: z.string(),
      endDate: z.string().optional(),
      description: z.string()
    }))
  })
})

const projects = defineCollection({
  loader: file("src/data/projects.json"),
  schema: ({ image }) => z.object({
    name: z.string(),
    date: z.string(),
    skills: z.array(z.string()),
    oneLiner: z.string(),
    description: z.string(),
    cover: image(),
    links: z.object({
      github: z.string().url().optional(),
      live: z.string().url().optional(),
      youtube: z.string().url().optional()
    })
  })
})

const githubContributions = defineCollection({
  loader: githubContributionsLoader(),
  schema: z.object({
    totalContributions: z.number(),
    weeks: z.array(z.object({
      contributionDays: z.array(z.object({
        date: z.string(),
        contributionCount: z.number(),
        color: z.string()
      }))
    }))
  })
})

export const collections = {
  blog,
  works,
  projects,
  githubContributions
};