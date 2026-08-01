import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="fixed inset-0 bg-paper transition-colors flex items-center justify-center z-[9999]">
      <div className="max-w-lg mx-auto px-6 py-16 text-center">
        <section>
          <span className="font-mono text-sm text-accent block mb-3">404</span>
          <h1 className="text-2xl font-semibold mb-3 text-ink">
            Page not found
          </h1>
          <p className="text-muted mb-8 leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist.
          </p>

          <Link
            href="/"
            className="font-mono text-accent hover:opacity-75 transition-opacity"
          >
            &#8592; Back to Home
          </Link>

          <div className="mt-12 pt-8 border-t border-hairline">
            <p className="text-sm text-muted mb-3">
              Need help?
            </p>
            <a
              href="mailto:wahyuuhidaayat@gmail.com"
              className="text-sm font-mono text-accent hover:opacity-75 transition-opacity"
            >
              wahyuuhidaayat@gmail.com
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
