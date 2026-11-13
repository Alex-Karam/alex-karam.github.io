(() => {
  if (!CSS.supports("color", "light-dark(white, black)")) return;

  const root = document.documentElement;
  const storageKey = "alex-karam-portfolio-theme";
  const themes = ["system", "light", "dark"];
  let theme = "system";

  function applyTheme() {
    if (theme === "system") {
      delete root.dataset.theme;
    } else {
      root.dataset.theme = theme;
    }
  }

  try {
    const saved = localStorage.getItem(storageKey);
    if (themes.includes(saved)) theme = saved;
  } catch {
    // The theme can still be changed for this page when storage is unavailable.
  }
  applyTheme();

  document.addEventListener("DOMContentLoaded", () => {
    const picker = document.getElementById("portfolio-theme");
    if (!picker) return;
    picker.value = theme;
    picker.addEventListener("change", () => {
      theme = picker.value;
      applyTheme();
      try {
        localStorage.setItem(storageKey, theme);
      } catch {
        // The selected theme is already active on this page.
      }
    });
    picker.closest("label").hidden = false;
  });
})();
