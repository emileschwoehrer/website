document.addEventListener("DOMContentLoaded", () => {
  // IMPORTANT : empêche Chrome de casser le scroll
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  // sauvegarde scroll quand tu cliques sur un projet
  document.addEventListener("click", (e) => {
    const link = e.target.closest(".grid a");
    if (!link) return;

    sessionStorage.setItem("projetsScroll", window.scrollY);
  });
});

// restauration du scroll quand tu reviens sur projets.html
window.addEventListener("pageshow", () => {
  const scroll = sessionStorage.getItem("projetsScroll");

  if (scroll === null) return;

  requestAnimationFrame(() => {
    window.scrollTo(0, Number(scroll));
  });
});