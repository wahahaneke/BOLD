"use client";

import { useEffect } from "react";
import { initAnimations } from "@/lib/animation";

/**
 * 客户端主体组件，处理客户端渲染相关逻辑
 * @param {Object} props - 组件属性
 * @param {React.ReactNode} props.children - 子组件
 * @returns {JSX.Element} 客户端主体组件
 */
export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // 在客户端初始化
  useEffect(() => {
    // 设置body类名
    document.body.className = "antialiased dark";
    
    // 初始化滚动动画
    setTimeout(() => {
      initAnimations();
    }, 100);
    
    // 在窗口调整大小时重新初始化动画
    window.addEventListener('resize', () => {
      initAnimations();
    });
    
    return () => {
      window.removeEventListener('resize', initAnimations);
    };
  }, []);

  return (
    <body className="antialiased dark" suppressHydrationWarning>
      {children}
    </body>
  );
}
