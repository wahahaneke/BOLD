/**
 * 项目全局类型定义文件
 */

import 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

// 为了确保这个文件被视为模块而不是全局脚本
export {}; 