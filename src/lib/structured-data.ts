import { personalData } from '@/data/personal';

export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": personalData.name,
    "alternateName": "Wahyu Hidayat",
    "description": personalData.bio,
    "url": personalData.siteUrl,
    "image": `${personalData.siteUrl}/images/profile.jpg`,
    "email": personalData.email,
    "jobTitle": "AI, Machine Learning, Data & Software Engineer",
    "worksFor": {
      "@type": "EducationalOrganization",
      "name": "Universitas Indonesia",
      "url": "https://ui.ac.id"
    },
    "alumniOf": {
      "@type": "EducationalOrganization", 
      "name": "Universitas Indonesia",
      "url": "https://ui.ac.id"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jakarta",
      "addressCountry": "Indonesia"
    },
    "sameAs": [
      "https://github.com/wahyuhiddayat",
      "https://www.linkedin.com/in/wahyuuhidayat/",
      "https://www.instagram.com/wahyyuht/",
      "https://open.spotify.com/user/wahyuuhidaayat",
      "https://wahyuuhidaayat.medium.com/"
    ],
    "knowsAbout": [
      "Data Science",
      "Machine Learning", 
      "Artificial Intelligence",
      "Data Engineering",
      "Business Intelligence",
      "Python",
      "Computer Science"
    ]
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Wahyu Hidayat Portfolio",
    "url": personalData.siteUrl,
    "description": "Personal portfolio of Wahyu Hidayat - Data Scientist & Machine Learning Engineer",
    "publisher": {
      "@type": "Person",
      "name": personalData.name
    }
  };
}
