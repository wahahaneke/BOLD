"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

/**
 * 网站英雄/主视觉区域组件
 * 显示项目主要信息和特色内容
 * @returns {JSX.Element} 英雄区域组件
 */
export default function Hero() {
  const [copied, setCopied] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const contractAddress = "Hxh5JQY45Aas92Ag3KTeZfcxQf1hnD1ZpoMk5cKBpump";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // 预加载主图
  useEffect(() => {
    const img = new window.Image();
    img.src = "/BOLD/images/1.png";
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <div className="bg-toby-black py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          <div className="max-w-xl">
            <h1 className="text-toby-yellow-500 font-archivo text-3xl sm:text-4xl md:text-5xl mb-4 md:mb-6 animate-fade-up">
              MEET $BOLD
            </h1>
            <p className="text-white font-montserrat leading-relaxed mb-6 animate-fade-up delay-200">
              In a highly rotational PVP environment filled with pumps and dumps, BOLD is a different coin, committed to seeing BOLD live a long and prosperous life with all his fans.
            </p>
          </div>
          <div className="w-full max-w-[240px] sm:max-w-xs relative aspect-square animate-scale-in delay-300">
            <div className="absolute w-[110%] h-[110%] top-[-5%] left-[-5%] rounded-full bg-toby-green-500/10 animate-pulse"></div>
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-toby-black/20 rounded-full">
                <div className="w-10 h-10 border-4 border-toby-green-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            <Image
              src="/BOLD/images/1.png"
              alt="BOLD the Turtle"
              fill
              sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, 300px"
              priority
              className={`object-contain relative z-10 ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
              onLoad={() => setImageLoaded(true)}
            />
          </div>
        </div>

        {/* 桌面端按钮布局 */}
        <div className="hidden sm:flex flex-row items-center justify-center gap-4 mt-10 animate-fade-up delay-400">
          <Link href="https://t.me/tobyportalxyz" target="_blank" className="w-auto">
            <Button variant="outline" size="lg" className="py-4 text-base">
              TELEGRAM
            </Button>
          </Link>
          <Link href="https://dexscreener.com/solana/8bjikkzel672yumyoznuda66aj4t8wjczk4pblmvucuu" target="_blank" className="w-auto">
            <Button variant="secondary" size="lg" className="py-4 text-base">
              DEXSCREENER
            </Button>
          </Link>
          <Link href="https://twitter.com/boldsolana" target="_blank">
            <Button variant="outline" size="icon" className="rounded-full w-12 h-12 bg-transparent border border-white text-white hover:bg-gray-800 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
              <span className="sr-only">Twitter</span>
            </Button>
          </Link>
        </div>
          
        {/* 移动端按钮布局 - 更简洁并排列方式 */}
        <div className="sm:hidden mt-8 relative h-28">
          {/* 背景装饰 */}
          <div className="absolute inset-0 bg-gradient-to-r from-toby-green-900/10 via-transparent to-toby-green-900/10 rounded-lg opacity-50"></div>
          
          {/* 小型按钮网格 - 3个按钮横向排列 */}
          <div className="absolute inset-0 flex items-center justify-around px-4">
            <Link href="https://t.me/tobyportalxyz" target="_blank">
              <Button variant="outline" size="lg" className="w-[90px] h-[90px] rounded-full flex flex-col items-center justify-center space-y-1 bg-black/30 backdrop-blur-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19c-.14.75-.42 1-.68 1.03c-.58.05-1.02-.38-1.58-.75c-.88-.58-1.38-.94-2.23-1.5c-.99-.65-.35-1.01.22-1.59c.15-.15 2.71-2.48 2.76-2.69c.01-.03.01-.13-.06-.19c-.07-.06-.18-.04-.26-.02c-.11.02-1.93 1.23-5.44 3.62c-.51.35-.98.52-1.4.51c-.46-.01-1.35-.26-2.01-.48c-.81-.27-1.46-.42-1.4-.88c.03-.24.29-.48.77-.74c3.02-1.31 5.03-2.18 6.04-2.62c2.88-1.25 3.47-1.47 3.86-1.48c.09 0 .28.02.41.12c.11.08.14.19.16.27c.02.12.01.28 0 .33z"/>
                </svg>
                <span className="text-xs">TELEGRAM</span>
              </Button>
            </Link>
            
            <Link href="https://dexscreener.com/solana/8bjikkzel672yumyoznuda66aj4t8wjczk4pblmvucuu" target="_blank">
              <Button variant="secondary" size="lg" className="w-[90px] h-[90px] rounded-full flex flex-col items-center justify-center space-y-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2.5 12a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0"/>
                  <path d="M7 10.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0"/>
                  <path d="M12 2a2.5 2.5 0 0 1 0 5 2.5 2.5 0 0 1 0-5"/>
                </svg>
                <span className="text-xs">DEX</span>
              </Button>
            </Link>
            
            <Link href="https://twitter.com/boldsolana" target="_blank">
              <Button variant="outline" size="lg" className="w-[90px] h-[90px] rounded-full flex flex-col items-center justify-center space-y-1 bg-black/30 backdrop-blur-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
                <span className="text-xs">TWITTER</span>
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Contract Address Display - 移动端优化 */}
        <div className="flex justify-center mt-6 sm:mt-10 animate-fade-up delay-600 px-0">
          <div className="bg-toby-black/60 border border-toby-green-900/30 rounded-lg p-3 sm:p-4 w-full max-w-[340px] sm:max-w-md backdrop-blur-sm shadow-lg">
            <div className="text-center mb-2">
              <span className="text-toby-green-400 font-archivo text-xs sm:text-sm">CONTRACT ADDRESS</span>
            </div>
            <div 
              className="bg-toby-darkbg rounded-md py-3 px-3 sm:p-3 flex items-center justify-between cursor-pointer group hover:bg-toby-darkbg/80 transition-colors"
              onClick={copyToClipboard}
            >
              <p className="text-gray-300 font-mono text-xs sm:text-sm truncate w-[calc(100%-36px)]">{contractAddress}</p>
              <button className="ml-2 sm:ml-3 text-toby-green-400 hover:text-toby-green-500 transition-colors flex-shrink-0 p-1">
                {copied ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-[18px] sm:h-[18px]">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-[18px] sm:h-[18px]">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                )}
              </button>
            </div>
            <div className="text-center mt-2">
              <span className="text-gray-400 text-xs">Click to copy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
