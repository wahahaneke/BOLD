"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
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
  const [activeSection, setActiveSection] = useState("home");
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // 检测滚动位置并更新头部样式
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // 检测当前活动section
      const sections = ["home", "how-to-buy", "journey", "roadmap"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 点击外部关闭菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node) && menuOpen) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  // 禁止滚动当菜单打开时
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navItems = [
    { name: "首页", href: "/#home", id: "home" },
    { name: "购买", href: "/#how-to-buy", id: "how-to-buy" },
    { name: "旅程", href: "/#journey", id: "journey" },
    { name: "路线图", href: "/#roadmap", id: "roadmap" }
  ];

  const closeMenu = () => setMenuOpen(false);

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
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`text-white hover:text-toby-green-500 transition-colors duration-300 relative group ${
                activeSection === item.id ? "text-toby-green-500" : ""
              }`}
            >
              <span>{item.name}</span>
              <span className={`absolute -bottom-1 left-0 h-[2px] bg-toby-green-500 transition-all duration-300 ${
                activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </Link>
          ))}
          
          <Link href="https://twitter.com/boldsolana" target="_blank">
            <Button variant="outline" size="sm" className="rounded-full aspect-square p-0 w-8 h-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
              <span className="sr-only">Twitter</span>
            </Button>
          </Link>

          <ThemeToggle />
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-3">
          <Link href="https://twitter.com/boldsolana" target="_blank">
            <Button variant="outline" size="sm" className="rounded-full aspect-square p-0 w-8 h-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
              <span className="sr-only">Twitter</span>
            </Button>
          </Link>
          
          <ThemeToggle />
          
          <button
            className={`text-white hover:text-toby-green-500 transition-all z-50 ${menuOpen ? "text-toby-green-500" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center relative">
              <span className={`block h-0.5 w-full bg-current rounded-full transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[2.5px]" : ""
              }`}></span>
              <span className={`block h-0.5 w-full bg-current rounded-full transition-all duration-300 mt-1 ${
                menuOpen ? "opacity-0" : ""
              }`}></span>
              <span className={`block h-0.5 w-full bg-current rounded-full transition-all duration-300 mt-1 ${
                menuOpen ? "-rotate-45 -translate-y-[2.5px]" : ""
              }`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu - 改进为全屏覆盖式菜单 */}
      <div 
        ref={mobileMenuRef}
        className={`fixed md:hidden inset-0 bg-toby-black/98 backdrop-blur-lg z-40 flex flex-col items-center justify-center transition-all duration-300 ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center w-full">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`py-4 text-xl font-archivo text-center w-full ${
                activeSection === item.id 
                  ? "text-toby-green-500" 
                  : "text-white hover:text-toby-green-500"
              } transition-colors`}
              onClick={closeMenu}
            >
              {item.name}
              {activeSection === item.id && (
                <span className="block w-8 h-0.5 bg-toby-green-500 mx-auto mt-1"></span>
              )}
            </Link>
          ))}
          
          <div className="mt-8 w-64">
            <Link href="/#how-to-buy" onClick={closeMenu}>
              <Button variant="outline" className="w-full text-base py-6">
                立即购买
              </Button>
            </Link>
          </div>
          
          <div className="mt-12 flex gap-4">
            <Link href="https://t.me/tobyportalxyz" target="_blank" onClick={closeMenu}>
              <Button variant="outline" size="icon" className="rounded-full w-10 h-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19c-.14.75-.42 1-.68 1.03c-.58.05-1.02-.38-1.58-.75c-.88-.58-1.38-.94-2.23-1.5c-.99-.65-.35-1.01.22-1.59c.15-.15 2.71-2.48 2.76-2.69c.01-.03.01-.13-.06-.19c-.07-.06-.18-.04-.26-.02c-.11.02-1.93 1.23-5.44 3.62c-.51.35-.98.52-1.4.51c-.46-.01-1.35-.26-2.01-.48c-.81-.27-1.46-.42-1.4-.88c.03-.24.29-.48.77-.74c3.02-1.31 5.03-2.18 6.04-2.62c2.88-1.25 3.47-1.47 3.86-1.48c.09 0 .28.02.41.12c.11.08.14.19.16.27c.02.12.01.28 0 .33z"/>
                </svg>
                <span className="sr-only">Telegram</span>
              </Button>
            </Link>
            <Link href="https://twitter.com/boldsolana" target="_blank" onClick={closeMenu}>
              <Button variant="outline" size="icon" className="rounded-full w-10 h-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
                <span className="sr-only">Twitter</span>
              </Button>
            </Link>
            <Link href="https://dexscreener.com/solana/8bjikkzel672yumyoznuda66aj4t8wjczk4pblmvucuu" target="_blank" onClick={closeMenu}>
              <Button variant="outline" size="icon" className="rounded-full w-10 h-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M5 12h14"></path>
                </svg>
                <span className="sr-only">Dexscreener</span>
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
