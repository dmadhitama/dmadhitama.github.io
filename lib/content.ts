import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const contentDirectory = path.join(process.cwd(), "content");

export interface ContentData {
  slug: string;
  frontmatter: Record<string, any>;
  content: string;
  html: string;
}

export async function getContentBySlug(slug: string): Promise<ContentData | null> {
  try {
    const fullPath = path.join(contentDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    const html = await marked(content);

    return {
      slug,
      frontmatter: data,
      content,
      html: html as string,
    };
  } catch (error) {
    return null;
  }
}

export function getAllContentSlugs(): string[] {
  try {
    const files = fs.readdirSync(contentDirectory);
    return files
      .filter((file) => file.endsWith(".md"))
      .map((file) => file.replace(/\.md$/, ""));
  } catch (error) {
    return [];
  }
}
