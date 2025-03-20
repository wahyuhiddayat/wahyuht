import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main data-testid="home-page" className="container mx-auto p-4">
      <section className="hero py-10">
        <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
        <p className="mt-4">Frontend Developer & UI/UX Enthusiast</p>
        <div className="mt-8">
          <Link href="/projects" className="btn btn-primary mr-4">
            View Projects
          </Link>
          <Link href="/contact" className="btn btn-outline">
            Contact Me
          </Link>
        </div>
      </section>
    </main>
  );
} 