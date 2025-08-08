import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Wahyu Hidayat - Data Scientist & ML Engineer',
    short_name: 'Wahyu Portfolio',
    description: 'Personal portfolio of Wahyu Hidayat - Data Scientist & Machine Learning Engineer',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    icons: [
      {
        src: '/favicon.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}
