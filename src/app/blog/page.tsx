import Link from 'next/link';

// Blog post component matching your portfolio style
const BlogPostCard = ({ 
  title, 
  date, 
  excerpt, 
  slug 
}: { 
  title: string; 
  date: string; 
  excerpt: string; 
  slug: string;
}) => (
  <article className="group space-y-3 pb-8">
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <h3 className="font-medium text-sm">
          <Link 
            href={`/blog/${slug}`} 
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            {title}
          </Link>
        </h3>
        <span className="text-xs text-gray-500 dark:text-gray-400 shrink-0 ml-4">{date}</span>
      </div>
      
      <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
        {excerpt}
      </p>
      
      <div className="pt-1">
        <Link 
          href={`/blog/${slug}`}
          className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        >
          Read Article ↗
        </Link>
      </div>
    </div>
  </article>
);

export default function Blog() {
  // Sample blog posts data
  const posts = [
    {
      title: "Getting Started with Next.js and TypeScript",
      date: "Mar 2023",
      excerpt: "Learn how to set up a new project with Next.js and TypeScript, and discover the benefits of this powerful combination for modern web development.",
      slug: "getting-started-nextjs-typescript"
    },
    {
      title: "Introduction to Machine Learning Concepts",
      date: "Feb 2023",
      excerpt: "Explore the fundamental concepts of machine learning, including supervised and unsupervised learning, regression, classification, and neural networks.",
      slug: "intro-machine-learning-concepts"
    },
    {
      title: "Building Responsive UIs with Tailwind CSS",
      date: "Jan 2023",
      excerpt: "Discover how to create beautiful, responsive user interfaces quickly and efficiently using the utility-first approach of Tailwind CSS.",
      slug: "responsive-ui-tailwind-css"
    },
    {
      title: "The Future of Artificial Intelligence",
      date: "Dec 2022",
      excerpt: "An exploration of emerging trends in AI research and development, and how these technologies might shape our future in the coming decades.",
      slug: "future-of-ai"
    },
    {
      title: "Deep Learning with PyTorch: A Beginner's Guide",
      date: "Nov 2022",
      excerpt: "A comprehensive introduction to deep learning using PyTorch, covering neural networks, training loops, and practical implementation tips.",
      slug: "pytorch-beginners-guide"
    },
    {
      title: "Optimizing React Performance in Large Applications",
      date: "Oct 2022",
      excerpt: "Best practices for maintaining performance in complex React applications, including memoization, code splitting, and efficient state management.",
      slug: "react-performance-optimization"
    }
  ];

  return (
    <div className="max-w-2xl mx-auto px-6 pt-32 pb-8">
      {/* Header */}
      <header className="mb-16 text-center">
        <h1 className="text-3xl font-bold mb-4 tracking-tight">
          Blog
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Thoughts, ideas, and insights about technology, programming, and machine learning.
        </p>
      </header>

      {/* Blog Posts */}
      <section>
        <h2 className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wider mb-6">
          RECENT POSTS
        </h2>
        
        <div className="space-y-8">
          {posts.map((post, index) => (
            <BlogPostCard 
              key={index}
              title={post.title}
              date={post.date}
              excerpt={post.excerpt}
              slug={post.slug}
            />
          ))}
        </div>

        {/* Coming Soon Message */}
        <div className="mt-12 text-center py-8">
          <p className="text-sm text-gray-500 dark:text-gray-400 italic">
            More articles coming soon! Currently focusing on building projects and learning new technologies.
          </p>
        </div>
      </section>
    </div>
  );
}