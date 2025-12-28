(() => {
  const STORAGE_KEY = "theme"; // "light" | "dark" | null

  function applyTheme(theme) {
    const root = document.documentElement;
    if (theme === "light" || theme === "dark") {
      root.setAttribute("data-theme", theme);
    } else {
      root.removeAttribute("data-theme"); // fall back to system preference
    }
    updateButton(theme);
  }

  function getStoredTheme() {
    const t = localStorage.getItem(STORAGE_KEY);
    return (t === "light" || t === "dark") ? t : null;
  }

  function setStoredTheme(theme) {
    if (theme) localStorage.setItem(STORAGE_KEY, theme);
    else localStorage.removeItem(STORAGE_KEY);
  }

  let btn;

  function updateButton(theme) {
    if (!btn) return;
    const current = theme ?? "system";
    // You can change the labels/icons here:
    btn.textContent =
      current === "dark" ? "🌙 Dark" :
      current === "light" ? "☀️ Light" :
      "🖥️ System";
    btn.setAttribute("aria-pressed", current === "dark" ? "true" : "false");
  }

  function cycleTheme() {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : current === "light" ? null : "dark";
    setStoredTheme(next);
    applyTheme(next);
  }

  function injectButton() {
    // Put it in the header (Minima)
    const nav = document.querySelector(".site-header .site-nav");
    const wrapper = document.querySelector(".site-header .wrapper");
    const target = nav || wrapper;

    if (!target) return;

    btn = document.createElement("button");
    btn.className = "theme-toggle";
    btn.type = "button";
    btn.addEventListener("click", cycleTheme);

    // Insert before nav links if possible
    if (nav) {
      nav.prepend(btn);
    } else {
      target.appendChild(btn);
    }

    applyTheme(getStoredTheme());
  }

  document.addEventListener("DOMContentLoaded", injectButton);
})();
