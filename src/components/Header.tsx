"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ui/theme-toggle";

/**
 * 网站头部导航组件
 * 提供桌面和移动设备的导航菜单
 * @returns {JSX.Element} 头部导航组件
 */
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 检测滚动位置并更新头部样式
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 py-3 px-4 md:px-8 transition-all duration-300 ${
        scrolled ? "bg-toby-black/95 backdrop-blur-sm shadow-md" : "bg-toby-black"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white font-archivo text-xl relative group">
          <span className="group-hover:text-toby-green-500 transition-colors duration-300">BOLD TURTLE</span>
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-toby-green-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/#"
            className="text-white hover:text-toby-green-500 transition-colors duration-300 relative group"
          >
            <span>HOME</span>
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-toby-green-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          
          <Link href="/#how-to-buy">
            <Button variant="outline" size="sm">
              BUY NOW
            </Button>
          </Link>

          <ThemeToggle />
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="text-white hover:text-toby-green-500 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 rotate-90"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden bg-toby-black/95 backdrop-blur-sm mt-2 p-4 absolute left-0 right-0 shadow-lg border-t border-toby-green-900/20 transition-all duration-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <Link
          href="/#"
          className="block py-3 text-white hover:text-toby-green-500 transition-colors border-b border-gray-800"
          onClick={() => setMenuOpen(false)}
        >
          HOME
        </Link>
        <div className="mt-4">
          <Link href="/#how-to-buy" onClick={() => setMenuOpen(false)}>
            <Button variant="outline" className="w-full">
              BUY NOW
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
