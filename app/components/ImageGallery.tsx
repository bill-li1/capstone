"use client";

import Image from "next/image";
import { useState } from "react";
import ImageModal from "./ImageModal";

interface ImageItem {
  src: string;
  alt: string;
  caption?: string;
}

interface ImageGalleryProps {
  images: ImageItem[];
  columns?: 1 | 2 | 3;
  aspectRatio?: "square" | "video" | "wide" | "auto";
}

export default function ImageGallery({
  images,
  columns = 2,
  aspectRatio = "video",
}: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);

  const aspectClasses = {
    square: "aspect-square",
    video: "aspect-video",
    wide: "aspect-[21/9]",
    auto: "aspect-auto",
  };

  const gridClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  };

  return (
    <>
      <div className={`grid ${gridClasses[columns]} gap-6 md:gap-8`}>
        {images.map((image, index) => (
          <div
            key={image.src}
            className="group cursor-pointer"
            onClick={() => setSelectedImage(image)}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={`image-card relative ${aspectClasses[aspectRatio]}`}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-foreground"
                    >
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {image.caption && (
              <p className="mt-3 text-sm text-muted">{image.caption}</p>
            )}
          </div>
        ))}
      </div>

      {/* Modal */}
      <ImageModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </>
  );
}

