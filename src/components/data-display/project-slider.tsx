'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface ProjectSliderProps {
  images?: string[];
  name: string;
}

const ProjectSlider = ({ images, name }: ProjectSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0) return null;

  return (
    <div className="flex flex-col w-full h-full overflow-hidden bg-gray-100 dark:bg-slate-800/30">
      <div className="relative w-full flex-grow">
        {images.map((imgUrl, index) => (
          <Image
            key={index}
            src={imgUrl}
            alt={`${name} preview ${index + 1}`}
            fill
            className={`object-contain p-4 md:p-5 rounded-xl w-full h-full transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          />
        ))}
      </div>
      <div className="w-full flex justify-center items-center gap-2 mt-4 pb-4 z-20">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'w-4 bg-emerald-500'
                : 'w-2 bg-gray-400/50 dark:bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSlider;
