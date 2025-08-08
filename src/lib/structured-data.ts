import { personalData } from '@/data/personal';

export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": personalData.name,
    "alternateName": "Wahyu Hidayat",
    "description": personalData.bio,
    "url": "https://wahyuht.com",
    "image": "https://wahyuht.com/images/profile.jpg",
    "email": personalData.email,
    "jobTitle": "Data Scientist & Machine Learning Engineer",
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
      "https://www.instagram.com/wahyyuhidaayat/",
      "https://open.spotify.com/user/wahyuuhidaayat"
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
    "url": "https://wahyuht.com",
    "description": "Personal portfolio of Wahyu Hidayat - Data Scientist & Machine Learning Engineer",
    "publisher": {
      "@type": "Person",
      "name": personalData.name
    }
  };
}
