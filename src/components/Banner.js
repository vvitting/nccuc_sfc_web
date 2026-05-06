'use client'
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Banner({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 20000);
    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="w-full relative h-[320px] sm:h-[420px] md:h-[520px] overflow-hidden">
      <div
        className="flex h-full"
        style={{
          width: `${images.length * 100}%`,
          transform: `translateX(-${(100 / images.length) * currentIndex}%)`,
          transition: 'transform 0.3s ease'
        }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="h-full shrink-0 relative"
            style={{ width: `${100 / images.length}%` }}
          >
            <Image
              src={src}
              alt={`Banner image ${index + 1}`}
              fill
              priority={index === 0}
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* 箭頭 */}
      <button
        type="button"
        onClick={goToPrev}
        onMouseDown={(e) => e.stopPropagation()}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 z-20 pointer-events-auto"
      >
        ‹
      </button>
      <button
        type="button"
        onClick={goToNext}
        onMouseDown={(e) => e.stopPropagation()}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 z-20 pointer-events-auto"
      >
        ›
      </button>

      {/* 點點指示器 */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20 pointer-events-auto">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goToSlide(index)}
            onMouseDown={(e) => e.stopPropagation()}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* 標題（pointer-events-none 讓點擊穿透到下方箭頭/點點） */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/30 z-10 pointer-events-none">
        <h1
          // 手機版 text-2xl，平板 md:text-4xl，電腦版 lg:text-5xl，並加入 text-center 置中與 leading-normal 行距
          className="text-2xl md:text-4xl lg:text-5xl font-bold text-white text-center leading-normal md:leading-relaxed"
          style={{ fontFamily: "'KaiTi', '標楷體', serif" }}
        >
          國立政治大學商學院永續財務決策研究中心
        </h1>
      </div>
    </div>
  );
}