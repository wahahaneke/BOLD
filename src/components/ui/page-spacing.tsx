"use client";

import React, { useEffect, useState } from "react";

/**
 * 页面间距组件，用于固定头部导航时确保内容不被覆盖
 * @returns {JSX.Element} 页面间距组件
 */
export default function PageSpacing() {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    // 获取头部的高度
    const header = document.querySelector("header");
    if (header) {
      const updateHeight = () => {
        setHeaderHeight(header.offsetHeight);
      };
      
      // 初始设置和窗口大小变化时更新
      updateHeight();
      window.addEventListener("resize", updateHeight);
      
      return () => window.removeEventListener("resize", updateHeight);
    }
  }, []);

  return <div style={{ height: `${headerHeight}px` }} aria-hidden="true" />;
} 