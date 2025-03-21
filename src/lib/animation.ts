/**
 * 滚动动画工具函数
 * 处理元素在滚动时的动画效果
 */

/**
 * 平滑滚动到页面指定元素
 * @param {string} elementId - 目标元素ID
 * @param {number} offset - 滚动偏移量，默认为0
 */
export function scrollToElement(elementId: string, offset: number = 0): void {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
}

/**
 * 添加滚动触发动画
 * 当元素进入视口时添加类名
 * @param {string} selector - 要选择的元素CSS选择器
 * @param {string} animationClass - 要添加的动画类名
 * @param {number} threshold - 触发阈值，0-1之间，默认0.1
 */
export function setupScrollAnimation(selector: string, animationClass: string, threshold: number = 0.1): void {
  if (typeof window === 'undefined') return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animationClass);
          // 已添加动画的元素不再观察
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold }
  );

  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => observer.observe(el));
}

/**
 * 初始化页面所有动画效果
 */
export function initAnimations(): void {
  if (typeof window === 'undefined') return;
  
  // 在组件加载后初始化动画
  setupScrollAnimation('.animate-fade-up', 'fade-up-active');
  setupScrollAnimation('.animate-fade-in', 'fade-in-active');
  setupScrollAnimation('.animate-scale-in', 'scale-in-active');
} 