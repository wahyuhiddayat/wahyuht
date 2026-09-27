import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { personalData } from "@/data/personal";

/** Shows the wider photo collection as a continuously sliding strip. */
export default function GallerySection() {
  const photos = personalData.galleryPhotos;

  return (
    <section id="gallery" className="section">
      <SectionHeading title="Gallery" />

      <div className="marquee">
        <div className="marquee-track">
          {[photos, photos].map((set, copy) =>
            set.map((photo) => (
              <div key={`${copy}-${photo.src}`} className="marquee-item" aria-hidden={copy === 1 || undefined}>
                <Image
                  src={photo.src}
                  alt={copy === 0 ? photo.alt : ""}
                  width={photo.width}
                  height={photo.height}
                  sizes="(min-width: 1024px) 480px, 280px"
                  quality={82}
                  className="block h-56 sm:h-72 lg:h-80 w-auto border border-hairline"
                />
              </div>
            )),
          )}
        </div>
      </div>
    </section>
  );
}
