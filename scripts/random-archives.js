// random img order
function shuffleArray(array) {
for (let i = array.length - 1; i > 0; i--) {
const j = Math.floor(Math.random() * (i + 1));
[array[i], array[j]] = [array[j], array[i]];
}
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  let blocks = Array.from(document.querySelectorAll(".picture"));
  shuffleArray(blocks);
  container.innerHTML = "";
  blocks.forEach(block => {
    container.appendChild(block);
    block.style.opacity = "1";
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