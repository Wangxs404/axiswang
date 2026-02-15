import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type BlogFrontmatter = {
  title: string;
  description?: string;
  date: string; // ISO or yyyy-mm-dd
  tags?: string[];
  sourceUrl?: string;
};

export type BlogPost = {
  slug: string;
  frontmatter: BlogFrontmatter;
  content: string;
};

const BLOG_DIR = path.join(process.cwd(), "src", "content", "blog");

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getPostBySlug(slug: string): BlogPost {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  const frontmatter = data as BlogFrontmatter;
  if (!frontmatter?.title || !frontmatter?.date) {
    throw new Error(`Missing required frontmatter (title/date) in ${filePath}`);
  }

  return { slug, frontmatter, content };
}

export function getAllPosts(): Omit<BlogPost, "content">[] {
  const slugs = getAllPostSlugs();
  const posts = slugs.map((slug) => {
    const { frontmatter } = getPostBySlug(slug);
    return { slug, frontmatter };
  });

  // newest first
  posts.sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1));
  return posts;
}
