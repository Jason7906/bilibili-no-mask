(() => {
  const SELECTOR = "#web-player-module-area-mask-panel, .web-player-module-area-mask";

  const removeMasks = (root) => {
    if (!root.querySelectorAll) return;
    if (root.matches && root.matches(SELECTOR)) root.remove();
    root.querySelectorAll(SELECTOR).forEach((el) => el.remove());
  };

  // 播放器是動態載入的,持續監看新增節點
  const observer = new MutationObserver((mutations) => {
    for (const m of mutations) {
      m.addedNodes.forEach((n) => {
        if (n.nodeType === 1) removeMasks(n);
      });
    }
  });

  const start = () => {
    removeMasks(document);
    observer.observe(document.documentElement, { childList: true, subtree: true });
  };

  if (document.documentElement) start();
  else document.addEventListener("DOMContentLoaded", start, { once: true });
})();
