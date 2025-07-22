import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-6 pt-32 pb-16">
      {/* 404 Section */}
      <section className="text-center mb-16">
        <h1 className="text-6xl font-bold mb-6 tracking-tight">
          404
        </h1>
        <h2 className="text-2xl font-medium mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          The page you're looking for doesn't exist or has been moved to a different location.
        </p>
      </section>

      {/* Navigation Section */}
      <section className="mb-16">
        <h3 className="text-xs font-semibold text-primary tracking-wider mb-6">
          WHERE TO GO
        </h3>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-800">
            <div>
              <h4 className="font-medium text-sm">Home</h4>
              <p className="text-xs text-gray-500">Back to the main portfolio page</p>
            </div>
            <Link 
              href="/"
              className="text-sm text-primary hover:text-primary-hover transition-colors"
            >
              Go Home ↗
            </Link>
          </div>

          <div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-800">
            <div>
              <h4 className="font-medium text-sm">Projects</h4>
              <p className="text-xs text-gray-500">Check out my featured work</p>
            </div>
            <Link 
              href="/projects"
              className="text-sm text-primary hover:text-primary-hover transition-colors"
            >
              View Projects ↗
            </Link>
          </div>

          <div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-800">
            <div>
              <h4 className="font-medium text-sm">Blog</h4>
              <p className="text-xs text-gray-500">Read my latest thoughts and insights</p>
            </div>
            <Link 
              href="/blog"
              className="text-sm text-primary hover:text-primary-hover transition-colors"
            >
              Read Blog ↗
            </Link>
          </div>

          <div className="flex justify-between items-center py-3">
            <div>
              <h4 className="font-medium text-sm">Contact</h4>
              <p className="text-xs text-gray-500">Get in touch for opportunities</p>
            </div>
            <Link 
              href="/contact"
              className="text-sm text-primary hover:text-primary-hover transition-colors"
            >
              Contact Me ↗
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          Still can't find what you're looking for?
        </p>
        <a 
          href="mailto:wahyuuhidaayat@gmail.com"
          className="text-sm text-primary hover:text-primary-hover transition-colors"
        >
          Send me an email ↗
        </a>
      </section>
    </div>
  );
}