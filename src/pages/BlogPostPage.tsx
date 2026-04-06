import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { blogPosts } from "@/data/blogPosts";

function renderMarkdown(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("### ")) {
      elements.push(
        <h3 key={key++} className="text-xl font-semibold mt-8 mb-3">
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith("## ")) {
      elements.push(
        <h2 key={key++} className="text-2xl font-bold mt-10 mb-4">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("- **")) {
      const text = line.slice(2);
      const boldEnd = text.indexOf("**", 2);
      if (boldEnd !== -1) {
        const boldText = text.slice(2, boldEnd);
        const rest = text.slice(boldEnd + 2);
        elements.push(
          <li key={key++} className="ml-6 mb-2 list-disc text-muted-foreground">
            <strong className="text-foreground">{boldText}</strong>
            {rest}
          </li>
        );
      } else {
        elements.push(
          <li key={key++} className="ml-6 mb-2 list-disc text-muted-foreground">
            {text}
          </li>
        );
      }
    } else if (line.startsWith("- ")) {
      elements.push(
        <li key={key++} className="ml-6 mb-2 list-disc text-muted-foreground">
          {line.slice(2)}
        </li>
      );
    } else if (/^\d+\.\s/.test(line)) {
      const text = line.replace(/^\d+\.\s/, "");
      const boldMatch = text.match(/^\*\*(.+?)\*\*(.*)$/);
      if (boldMatch) {
        elements.push(
          <li key={key++} className="ml-6 mb-2 list-decimal text-muted-foreground">
            <strong className="text-foreground">{boldMatch[1]}</strong>
            {boldMatch[2]}
          </li>
        );
      } else {
        elements.push(
          <li key={key++} className="ml-6 mb-2 list-decimal text-muted-foreground">
            {text}
          </li>
        );
      }
    } else if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(
        <p key={key++} className="font-semibold mt-4 mb-2">
          {line.slice(2, -2)}
        </p>
      );
    } else if (line.trim() === "") {
      // skip empty lines
    } else {
      // Render inline bold
      const parts: React.ReactNode[] = [];
      let partKey = 0;
      let remaining = line;
      while (remaining.includes("**")) {
        const start = remaining.indexOf("**");
        const end = remaining.indexOf("**", start + 2);
        if (end === -1) break;
        if (start > 0) {
          parts.push(<span key={partKey++}>{remaining.slice(0, start)}</span>);
        }
        parts.push(
          <strong key={partKey++}>
            {remaining.slice(start + 2, end)}
          </strong>
        );
        remaining = remaining.slice(end + 2);
      }
      if (remaining) {
        parts.push(<span key={partKey++}>{remaining}</span>);
      }
      elements.push(
        <p key={key++} className="text-muted-foreground leading-relaxed mb-4">
          {parts.length > 0 ? parts : line}
        </p>
      );
    }
  }

  return elements;
}

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The blog post you're looking for doesn't exist.
            </p>
            <Link to="/blog" className="text-primary hover:underline">
              Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24 pb-16">
        <article className="container mx-auto px-6 max-w-3xl">
          <Link
            to="/blog"
            className="text-muted-foreground hover:text-primary transition-colors mb-8 inline-block"
          >
            &larr; Back to Blog
          </Link>
          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
            <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">
              {post.category}
            </span>
            <span>{post.date}</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
            {post.title}
          </h1>
          <div className="prose prose-lg max-w-none">
            {renderMarkdown(post.content)}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
