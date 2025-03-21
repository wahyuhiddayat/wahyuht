import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-16 animate-fade-in">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Hi, I'm <span className="relative inline-block">Wahyu</span> 👋
          </h1>
          <p className="text-lg md:text-xl mb-8 mx-auto text-gray-600 dark:text-gray-300">
            Computer Science student with interests in AI, ML, and Software Engineering.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="/about"
              className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-md hover:opacity-90 transition-opacity"
            >
              About Me
            </Link>
            <Link
              href="/projects"
              className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Brief Introduction */}
      <section className="py-16 animate-slide-up">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Welcome to my portfolio! I'm a passionate Computer Science student focused on building innovative solutions 
            using modern technologies. Explore my projects, read my blog, or get in touch to connect.
          </p>
          
          <div className="flex justify-center space-x-6">
            <Link href="/about" className="text-black dark:text-white font-medium hover:underline">
              Learn more about me →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Teaser */}
      <section className="py-16 animate-slide-up bg-gray-50 dark:bg-gray-900">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-6">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Check out some of my recent work in AI, web development, and more.
          </p>
          
          <Link
            href="/projects"
            className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-md hover:opacity-90 transition-opacity inline-block"
          >
            View All Projects
          </Link>
        </div>
      </section>

      {/* Blog Teaser */}
      <section className="py-16 animate-slide-up">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-6">Latest Articles</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            I write about technology, programming, and my learning journey.
          </p>
          
          <Link
            href="/blog"
            className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors inline-block"
          >
            Read My Blog
          </Link>
        </div>
      </section>
    </div>
  );
}