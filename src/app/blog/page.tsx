import Link from 'next/link';

// Sample blog post component
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
  <div className="border-b border-gray-200 dark:border-gray-700 pb-6 mb-6">
    <h3 className="text-lg font-medium mb-2">
      <Link href={`/blog/${slug}`} className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
        {title}
      </Link>
    </h3>
    <p className="text-sm text-gray-500 mb-3">{date}</p>
    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{excerpt}</p>
    <Link 
      href={`/blog/${slug}`}
      className="text-sm text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
    >
      Read more →
    </Link>
  </div>
);

export default function Blog() {
  // Sample blog posts data
  const posts = [
    {
      title: "Getting Started with Next.js and TypeScript",
      date: "March 15, 2023",
      excerpt: "Learn how to set up a new project with Next.js and TypeScript, and discover the benefits of this powerful combination for modern web development.",
      slug: "getting-started-nextjs-typescript"
    },
    {
      title: "Introduction to Machine Learning Concepts",
      date: "February 28, 2023",
      excerpt: "Explore the fundamental concepts of machine learning, including supervised and unsupervised learning, regression, classification, and neural networks.",
      slug: "intro-machine-learning-concepts"
    },
    {
      title: "Building Responsive UIs with Tailwind CSS",
      date: "January 20, 2023",
      excerpt: "Discover how to create beautiful, responsive user interfaces quickly and efficiently using the utility-first approach of Tailwind CSS.",
      slug: "responsive-ui-tailwind-css"
    },
    {
      title: "The Future of Artificial Intelligence",
      date: "December 10, 2022",
      excerpt: "An exploration of emerging trends in AI research and development, and how these technologies might shape our future in the coming decades.",
      slug: "future-of-ai"
    }
  ];

  return (
    <div className="max-w-2xl mx-auto px-6 pt-32 pb-16">
      <h1 className="text-2xl font-bold mb-6 pb-1 border-b border-gray-200 dark:border-gray-800">Blog</h1>
      
      <div className="mt-8">
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-8">
          Thoughts, ideas, and insights about technology, programming, and design.
        </p>
        
        <div className="space-y-6">
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
      </div>
    </div>
  );
} 