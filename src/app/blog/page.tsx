import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog | Axis Wang",
  description: "Notes, essays, and project updates.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="container mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">Blog</h1>
      <p className="text-zinc-400 mb-10">Notes, essays, and project updates.</p>

      {posts.length === 0 ? (
        <div className="text-zinc-300">No blog posts yet.</div>
      ) : (
        <div className="space-y-8">
          {posts.map((p) => (
            <article key={p.slug} className="border border-zinc-800 rounded-xl p-6">
              <div className="text-sm text-zinc-500 mb-2">{p.frontmatter.date}</div>
              <h2 className="text-2xl font-semibold">
                <Link className="hover:underline" href={`/blog/${p.slug}`}>
                  {p.frontmatter.title}
                </Link>
              </h2>
              {p.frontmatter.description ? (
                <p className="text-zinc-400 mt-2">{p.frontmatter.description}</p>
              ) : null}
              {p.frontmatter.tags?.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.frontmatter.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-full bg-zinc-900 text-zinc-300 border border-zinc-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
