document.addEventListener("DOMContentLoaded", () => {
  const closeBtn = document.querySelector(".close");

  if (!closeBtn) return;

  closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "projets.html";
  });
});