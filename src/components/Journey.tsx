"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

const journeyImages = [
  {
    src: "/BOLD/images/1.png",
    alt: "Journey image 1"
  },
  {
    src: "/BOLD/images/2.png",
    alt: "Journey image 2"
  },
  {
    src: "/BOLD/images/3.png",
    alt: "Journey image 3"
  },
  {
    src: "/BOLD/images/4.png",
    alt: "Journey image 4"
  },
  {
    src: "/BOLD/images/5.png",
    alt: "Journey image 5"
  },
  {
    src: "/BOLD/images/6.png",
    alt: "Journey image 6"
  },
  {
    src: "/BOLD/images/7.png",
    alt: "Journey image 7"
  },
  {
    src: "/BOLD/images/8.png",
    alt: "Journey image 8"
  },
  {
    src: "/BOLD/images/9.png",
    alt: "Journey image 9"
  },
  {
    src: "/BOLD/images/10.png",
    alt: "Journey image 10"
  },
  {
    src: "/BOLD/images/11.png",
    alt: "Journey image 11"
  }
  // 如有更多图片，可继续添加
];

export default function Journey() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const thumbnailsRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [lastMouseX, setLastMouseX] = useState(0);
  const [mouseMoveDirection, setMouseMoveDirection] = useState<'left' | 'right' | null>(null);
  const [touchStartX, setTouchStartX] = useState(0);
  const [imageLoaded, setImageLoaded] = useState<Record<number, boolean>>({});
  const [visibleImages, setVisibleImages] = useState<number[]>([]);

  // 预加载当前、前一张和后一张图片
  useEffect(() => {
    const prevIndex = (currentIndex - 1 + journeyImages.length) % journeyImages.length;
    const nextIndex = (currentIndex + 1) % journeyImages.length;
    
    setVisibleImages([prevIndex, currentIndex, nextIndex]);
    
    // 预加载更多图片
    const timer = setTimeout(() => {
      const nextTwo = (currentIndex + 2) % journeyImages.length;
      const prevTwo = (currentIndex - 2 + journeyImages.length) % journeyImages.length;
      setVisibleImages(prev => [...new Set([...prev, prevTwo, nextTwo])]);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // 标记图片加载状态
  const handleImageLoad = useCallback((index: number) => {
    setImageLoaded(prev => ({ ...prev, [index]: true }));
  }, []);

  // Auto-advance the slider every 5 seconds, but only if not hovering
  useEffect(() => {
    if (isHovering) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % journeyImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovering]);

  // 添加鼠标移动效果
  useEffect(() => {
    const thumbnailsContainer = thumbnailsRef.current;
    if (!thumbnailsContainer) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!thumbnailsContainer) return;
      
      // 获取容器宽度和当前鼠标X坐标
      const containerWidth = thumbnailsContainer.offsetWidth;
      const mouseX = e.clientX;
      
      // 计算鼠标在容器中的相对位置（0-1范围）
      const containerRect = thumbnailsContainer.getBoundingClientRect();
      const relativeX = (mouseX - containerRect.left) / containerWidth;
      
      // 应用非线性映射和速度倍增因子，使移动更敏感
      // 使用三次方函数使得中间区域移动较慢，两端移动较快
      let enhancedX;
      const speedFactor = 2.5; // 速度倍增因子
      
      if (relativeX < 0.5) {
        // 左半边使用减速映射
        enhancedX = relativeX * relativeX * 0.5 / speedFactor;
      } else {
        // 右半边使用加速映射
        const rightSide = relativeX - 0.5;
        enhancedX = 0.5 + (rightSide * rightSide + rightSide) * speedFactor;
      }
      
      // 计算应该滚动的位置
      const maxScrollLeft = thumbnailsContainer.scrollWidth - containerWidth;
      const targetScrollLeft = maxScrollLeft * enhancedX;
      
      // 更快速的滚动到目标位置
      thumbnailsContainer.scrollTo({
        left: targetScrollLeft,
        behavior: 'auto' // 改为'auto'使滚动立即生效，不使用平滑过渡
      });

      // 判断鼠标移动方向
      if (mouseX > lastMouseX) {
        setMouseMoveDirection('right');
      } else if (mouseX < lastMouseX) {
        setMouseMoveDirection('left');
      }
      setLastMouseX(mouseX);
    };

    const handleMouseEnter = () => {
      thumbnailsContainer.addEventListener('mousemove', handleMouseMove);
    };

    const handleMouseLeave = () => {
      thumbnailsContainer.removeEventListener('mousemove', handleMouseMove);
      setMouseMoveDirection(null);
    };

    thumbnailsContainer.addEventListener('mouseenter', handleMouseEnter);
    thumbnailsContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      thumbnailsContainer.removeEventListener('mouseenter', handleMouseEnter);
      thumbnailsContainer.removeEventListener('mouseleave', handleMouseLeave);
      thumbnailsContainer.removeEventListener('mousemove', handleMouseMove);
    };
  }, [lastMouseX]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % journeyImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? journeyImages.length - 1 : prevIndex - 1
    );
  };

  const scrollThumbnails = (direction: 'left' | 'right') => {
    if (thumbnailsRef.current) {
      const scrollAmount = 200;
      thumbnailsRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // 处理触摸滑动事件
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStartX) return;
    
    const touchX = e.touches[0].clientX;
    const diff = touchStartX - touchX;
    
    // 如果滑动距离超过50px，则切换图片
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
      setTouchStartX(0);
    }
  };

  const handleTouchEnd = () => {
    setTouchStartX(0);
  };

  // 确保当前选中的缩略图在可视区域内
  useEffect(() => {
    if (thumbnailsRef.current) {
      const thumbnail = thumbnailsRef.current.children[currentIndex] as HTMLElement;
      if (thumbnail) {
        thumbnail.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  }, [currentIndex]);

  return (
    <div className="bg-toby-darkbg py-12 md:py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-center text-white font-archivo text-3xl md:text-4xl mb-8 md:mb-12">
          BOLD&apos;S JOURNEY
        </h2>

        {/* Main carousel container */}
        <div className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Side image previews - 左侧和右侧的预览图片 */}
          <div className="hidden md:block absolute top-1/2 -left-16 transform -translate-y-1/2 w-32 h-32 overflow-hidden opacity-30 rounded-lg z-0 blur-[1px]">
            <div className="w-full h-full bg-gray-800 relative">
              {visibleImages.includes((currentIndex - 1 + journeyImages.length) % journeyImages.length) && (
                <img
                  src={journeyImages[(currentIndex - 1 + journeyImages.length) % journeyImages.length].src}
                  alt="Previous image"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              )}
            </div>
          </div>
          
          <div className="hidden md:block absolute top-1/2 -right-16 transform -translate-y-1/2 w-32 h-32 overflow-hidden opacity-30 rounded-lg z-0 blur-[1px]">
            <div className="w-full h-full bg-gray-800 relative">
              {visibleImages.includes((currentIndex + 1) % journeyImages.length) && (
                <img
                  src={journeyImages[(currentIndex + 1) % journeyImages.length].src}
                  alt="Next image"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              )}
            </div>
          </div>

          {/* Main image carousel - 主轮播图 */}
          <div 
            className="relative overflow-hidden aspect-[16/9] rounded-lg bg-black shadow-2xl image-gallery"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {journeyImages.map((image, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
                  index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
                style={{ display: visibleImages.includes(index) ? 'block' : 'none' }}
              >
                {!imageLoaded[index] && index === currentIndex && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50">
                    <div className="w-10 h-10 border-4 border-toby-green-500 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
                {visibleImages.includes(index) && (
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-contain"
                    onLoad={() => handleImageLoad(index)}
                    loading={index === currentIndex ? "eager" : "lazy"}
                  />
                )}
              </div>
            ))}

            {/* Navigation arrows - 导航箭头 */}
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/50 text-white hover:bg-black/70 z-10 transition-all duration-300 opacity-70 hover:opacity-100"
              aria-label="Previous slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="sm:w-6 sm:h-6"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/50 text-white hover:bg-black/70 z-10 transition-all duration-300 opacity-70 hover:opacity-100"
              aria-label="Next slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="sm:w-6 sm:h-6"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>

            {/* 滑动指示器 - 移动端 */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 md:hidden">
              {journeyImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex 
                      ? "bg-toby-green-500 w-4" 
                      : "bg-white/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail navigation - 缩略图导航 */}
          <div 
            ref={thumbnailsRef}
            className="hidden md:flex justify-start mt-4 sm:mt-6 gap-2 sm:gap-3 overflow-x-auto py-2 sm:py-3 px-8 sm:px-12 scroll-smooth hide-scrollbar cursor-grab relative"
          >
            {journeyImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`relative flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-md overflow-hidden transition-all duration-300 ${
                  index === currentIndex 
                  ? "thumbnail-active ring-2 ring-toby-green-500" 
                  : "opacity-70 hover:opacity-100 hover:scale-105"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              >
                <div className="w-full h-full bg-gray-800 relative">
                  {visibleImages.includes(index) && (
                    <img
                      src={image.src}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover pointer-events-none"
                      loading="lazy"
                    />
                  )}
                </div>
              </button>
            ))}
          </div>
          
          {/* Scroll indicators for thumbnails - 缩略图滚动指示器 - 仅在非移动端显示 */}
          <div className="hidden md:flex justify-between absolute bottom-4 left-0 right-0 px-2 sm:px-3 z-10 pointer-events-none">
            <button 
              onClick={() => scrollThumbnails('left')}
              className="text-white bg-black/40 p-1 sm:p-2 rounded-full opacity-70 hover:opacity-100 hover:bg-black/60 transition-all duration-300 pointer-events-auto"
              aria-label="Scroll thumbnails left"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="sm:w-5 sm:h-5">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button 
              onClick={() => scrollThumbnails('right')}
              className="text-white bg-black/40 p-1 sm:p-2 rounded-full opacity-70 hover:opacity-100 hover:bg-black/60 transition-all duration-300 pointer-events-auto"
              aria-label="Scroll thumbnails right"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="sm:w-5 sm:h-5">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
