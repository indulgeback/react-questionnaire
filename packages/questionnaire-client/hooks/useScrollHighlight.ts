import { useCallback } from "react";

/**
 * 自定义Hook，用于滚动到指定元素并添加高亮效果
 * @returns 滚动并高亮元素的函数
 */
const useScrollHighlight = () => {
  /**
   * 滚动到指定元素并添加高亮效果
   * @param elementIdOrElement 元素ID(字符串)或DOM元素对象
   * @param options 配置选项
   */
  const scrollAndHighlight = useCallback(
    (
      elementIdOrElement: string | HTMLElement,
      options: {
        behavior?: ScrollBehavior;
        block?: ScrollLogicalPosition;
        highlightDuration?: number;
        highlightClass?: string;
      } = {}
    ) => {
      // 默认配置
      const {
        behavior = "smooth",
        block = "center",
        highlightDuration = 1500,
        highlightClass = "highlight-animation"
      } = options;

      // 根据传入的参数获取DOM元素
      const element =
        typeof elementIdOrElement === "string"
          ? document.getElementById(elementIdOrElement)
          : elementIdOrElement;

      if (!element) return;

      // 滚动到元素位置
      element.scrollIntoView({ behavior, block });

      // 添加高亮效果
      element.classList.add(highlightClass);

      // 在指定时间后移除高亮效果
      setTimeout(() => {
        element.classList.remove(highlightClass);
      }, highlightDuration);
    },
    []
  );

  return scrollAndHighlight;
};

export default useScrollHighlight;
