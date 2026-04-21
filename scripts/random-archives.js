// random img order
function shuffleArray(array) {
for (let i = array.length - 1; i > 0; i--) {
const j = Math.floor(Math.random() * (i + 1));
[array[i], array[j]] = [array[j], array[i]];
}
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  const select = document.getElementById("favoriteOnly");

  function shuffleImages() {
  let blocks = Array.from(document.querySelectorAll(".picture"));

  // petit effet visible
  blocks.forEach(block => {
    block.style.transform = "translateY(12px)";
  });

  setTimeout(() => {
    shuffleArray(blocks);

    container.innerHTML = "";
    blocks.forEach(block => {
      container.appendChild(block);
    });

    // retour à la normale
    requestAnimationFrame(() => {
      blocks.forEach(block => {
        block.style.transform = "translateY(0)";
        block.style.opacity = "1";
      });
    });

  }, 120);
}

  // Shuffle au chargement
  shuffleImages();

  // 🔥 Shuffle quand on change le select
  select.addEventListener("change", () => {
    shuffleImages();
  });
});

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

document.addEventListener("DOMContentLoaded", () => {
  window.scrollTo(0, 0);
});

// random selector
window.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("favoriteOnly");

  let optionsArray = Array.from(select.options);

  for (let i = optionsArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [optionsArray[i], optionsArray[j]] = [optionsArray[j], optionsArray[i]];
  }

  select.innerHTML = "";

  optionsArray.forEach(option => select.appendChild(option));

  const randomIndex = Math.floor(Math.random() * optionsArray.length);
  select.selectedIndex = randomIndex;
});