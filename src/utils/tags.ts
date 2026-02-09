import { getCollection } from "astro:content";

export function tagToSlug(tag: string): string {
  return tag.toLowerCase().replace(/\s+/g, "-");
}

export async function getAllTags() {
  const posts = await getCollection("blog");
  const tagSet = new Set<string>();

  for (const post of posts) {
    for (const tag of post.data.tags) {
      tagSet.add(tag);
    }
  }

  const tags = Array.from(tagSet).sort((a, b) =>
    a.toLowerCase().localeCompare(b.toLowerCase())
  );

  const slugToName = new Map<string, string>();
  for (const tag of tags) {
    slugToName.set(tagToSlug(tag), tag);
  }

  return { tags, slugToName };
}
