document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".rubrique");
  const links = document.querySelectorAll(".rubrique a");
  const overlay = document.querySelector(".menu-overlay");

  function openMenu() {
    hamburger.classList.add("open");
    menu.classList.add("open");
    hamburger.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden"; // scroll lock
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    hamburger.classList.remove("open");
    menu.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = ""; // restore scroll
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  function toggleMenu() {
    const isOpen = menu.classList.contains("open");
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  // clic sur hamburger
  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // clic sur un lien → fermeture
  links.forEach(link => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  // clic en dehors → fermeture
  document.addEventListener("click", (e) => {
    const isClickInsideMenu = menu.contains(e.target);
    const isClickOnHamburger = hamburger.contains(e.target);

    const isOpen = menu.classList.contains("open");

    if (isOpen && !isClickInsideMenu && !isClickOnHamburger) {
      closeMenu();
    }
  });
});