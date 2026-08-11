import { getCollection } from "astro:content";

export async function getPapers() {
  return getCollection("papers");
}
