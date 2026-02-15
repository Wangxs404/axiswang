import { notFound } from "next/navigation";
import Link from "next/link";
import { compileMDX } from "next-mdx-remote/rsc";
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog";

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const post = getPostBySlug(params.slug);
    return {
      title: `${post.frontmatter.title} | Axis Wang`,
      description: post.frontmatter.description,
      openGraph: {
        title: post.frontmatter.title,
        description: post.frontmatter.description,
      },
    };
  } catch {
    return {};
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  let post;
  try {
    post = getPostBySlug(params.slug);
  } catch {
    notFound();
  }

  const { content, frontmatter } = post;
  const compiled = await compileMDX<{ title: string }>({
    source: content,
    options: { parseFrontmatter: false },
  });

  return (
    <div className="container mx-auto max-w-3xl px-6 py-16">
      <div className="mb-10">
        <Link className="text-zinc-400 hover:underline" href="/blog">
          ← Back to Blog
        </Link>
      </div>

      <header className="mb-10">
        <div className="text-sm text-zinc-500 mb-3">{frontmatter.date}</div>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          {frontmatter.title}
        </h1>
        {frontmatter.description ? (
          <p className="text-zinc-400 mt-4 text-lg">{frontmatter.description}</p>
        ) : null}
        {frontmatter.sourceUrl ? (
          <p className="text-zinc-500 mt-3 text-sm">
            来源：{" "}
            <a
              className="underline"
              href={frontmatter.sourceUrl}
              target="_blank"
              rel="noreferrer"
            >
              {frontmatter.sourceUrl}
            </a>
          </p>
        ) : null}
      </header>

      <article className="prose prose-invert max-w-none">
        {compiled.content}
      </article>
    </div>
  );
}
