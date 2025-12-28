(() => {
  const STORAGE_KEY = "theme"; // "light" | "dark" | null (system)

  function applyTheme(theme) {
    const root = document.documentElement;
    if (theme === "light" || theme === "dark") {
      root.setAttribute("data-theme", theme);
    } else {
      root.removeAttribute("data-theme"); // system
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
    btn.textContent =
      current === "dark" ? "🌙 Dark" :
      current === "light" ? "☀️ Light" :
      "🖥️ System";
  }

  function cycleTheme() {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : current === "light" ? null : "dark";
    setStoredTheme(next);
    applyTheme(next);
  }

  function injectButton() {
    const wrapper = document.querySelector(".site-header .wrapper");
    const title = document.querySelector(".site-title");
    if (!wrapper || !title) return;

    btn = document.createElement("button");
    btn.className = "theme-toggle";
    btn.type = "button";
    btn.addEventListener("click", cycleTheme);

    // Insert right after the site title (safe with Minima’s nav structure)
    title.insertAdjacentElement("afterend", btn);

    applyTheme(getStoredTheme());
  }

  document.addEventListener("DOMContentLoaded", injectButton);
})();
