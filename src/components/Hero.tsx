"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";

/**
 * 网站英雄/主视觉区域组件
 * 显示项目主要信息和特色内容
 * @returns {JSX.Element} 英雄区域组件
 */
export default function Hero() {
  const [copied, setCopied] = useState(false);
  const contractAddress = "Hxh5JQY45Aas92Ag3KTeZfcxQf1hnD1ZpoMk5cKBpump";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-toby-black py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h1 className="text-toby-yellow-500 font-archivo text-4xl md:text-5xl mb-6 animate-fade-up">
              MEET $BOLD
            </h1>
            <p className="text-white font-montserrat leading-relaxed mb-6 animate-fade-up delay-200">
              In a highly rotational PVP environment filled with pumps and dumps, BOLD is a different coin, committed to seeing BOLD live a long and prosperous life with all his fans.
            </p>
          </div>
          <div className="w-full max-w-xs relative aspect-square animate-scale-in delay-300">
            <div className="absolute w-[110%] h-[110%] top-[-5%] left-[-5%] rounded-full bg-toby-green-500/10 animate-pulse"></div>
            <Image
              src="/BOLD/images/1.png"
              alt="BOLD the Turtle"
              fill
              sizes="(max-width: 768px) 100vw, 300px"
              priority
              className="object-contain relative z-10"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10 animate-fade-up delay-400">
          <Link href="https://t.me/tobyportalxyz" target="_blank">
            <Button variant="outline" size="lg">
              TELEGRAM
            </Button>
          </Link>
          <Link href="https://dexscreener.com/solana/8bjikkzel672yumyoznuda66aj4t8wjczk4pblmvucuu" target="_blank">
            <Button variant="secondary" size="lg">
              DEXSCREENER
            </Button>
          </Link>
        </div>
        
        {/* Twitter按钮 */}
        <div className="flex justify-center mt-8 animate-fade-up delay-500">
          <Link href="https://twitter.com/boldsolana" target="_blank">
            <Button variant="outline" size="icon" className="rounded-full w-12 h-12 bg-transparent border border-white text-white hover:bg-gray-800 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
              <span className="sr-only">Twitter</span>
            </Button>
          </Link>
        </div>
        
        {/* Contract Address Display */}
        <div className="flex justify-center mt-6 animate-fade-up delay-600 px-2 sm:px-0">
          <div className="bg-toby-black/60 border border-toby-green-900/30 rounded-lg p-3 sm:p-4 w-full max-w-md backdrop-blur-sm shadow-lg">
            <div className="text-center mb-2">
              <span className="text-toby-green-400 font-archivo text-xs sm:text-sm">CONTRACT ADDRESS</span>
            </div>
            <div 
              className="bg-toby-darkbg rounded-md py-2 px-3 sm:p-3 flex items-center justify-between cursor-pointer group hover:bg-toby-darkbg/80 transition-colors"
              onClick={copyToClipboard}
            >
              <p className="text-gray-300 font-mono text-xs sm:text-sm truncate w-[calc(100%-36px)]">{contractAddress}</p>
              <button className="ml-2 sm:ml-3 text-toby-green-400 hover:text-toby-green-500 transition-colors flex-shrink-0">
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
