import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  schema: z.object({
    img: z.string(),
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  projects,
};
