import Link from 'next/link';

export default function NotFound() {
  return (
    <div 
      className="fixed inset-0 bg-white dark:bg-gray-950 transition-colors flex items-center justify-center z-[9999]"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999
      }}
    >
      <div className="max-w-lg mx-auto px-6 py-16 text-center">
        {/* 404 Section */}
        <section>
          <h1 className="text-7xl lg:text-8xl font-bold mb-6 tracking-tight text-gray-900 dark:text-white">
            404 😅
          </h1>
          <h2 className="text-2xl lg:text-3xl font-medium mb-4 text-gray-900 dark:text-white">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            The page you're looking for doesn't exist.
          </p>
          
          {/* Primary CTA */}
          <Link 
            href="/"
            className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-lg font-medium hover:bg-primary-hover transition-colors text-lg"
          >
            ← Back to Home
          </Link>
          
          {/* Contact */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
              Need help?
            </p>
            <a 
              href="mailto:wahyuuhidaayat@gmail.com"
              className="text-sm text-primary hover:text-primary-hover transition-colors"
            >
              Send me an email →
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}