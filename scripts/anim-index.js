const logo = document.getElementById("logo");
const container = document.querySelector(".img-background");

const images = [
  "pictures/anim-logo/logo-origin.svg",
  "pictures/anim-logo/logo-clown-face.svg",
  "pictures/anim-logo/logo-diagonal-mouth.svg",
  "pictures/anim-logo/logo-frowning-face.svg",
  "pictures/anim-logo/logo-kissing-face.svg",
  "pictures/anim-logo/logo-open-mouth.svg",
  "pictures/anim-logo/logo-rolling-eyes.svg",
  "pictures/anim-logo/logo-smirking-face.svg",
  "pictures/anim-logo/logo-upside-down-face.svg",
  "pictures/anim-logo/logo-winking-face.svg",
  "pictures/anim-logo/logo-zany-face.svg",
  "pictures/anim-logo/logo-zipper-mouth-face.svg",
];

let currentIndex = 0;

logo.addEventListener("click", () => {
  let randomIndex;

  do {
    randomIndex = Math.floor(Math.random() * images.length);
  } while (randomIndex === currentIndex || randomIndex === 0);

  currentIndex = randomIndex;
  logo.src = images[currentIndex];
});

let x = 0;
let y = 0;

let vx = 150; // pixels par seconde
let vy = 120;

let lastTime = 0;

window.addEventListener("load", () => {
  const rect = container.getBoundingClientRect();

  x = Math.random() * (rect.width - logo.offsetWidth);
  y = Math.random() * (rect.height - logo.offsetHeight);
});

function animate(time) {
  if (!lastTime) lastTime = time;

  const dt = (time - lastTime) / 1000; // secondes
  lastTime = time;

  const rect = container.getBoundingClientRect();

  const w = logo.offsetWidth;
  const h = logo.offsetHeight;

  const maxX = rect.width - w;
  const maxY = rect.height - h;

  x += vx * dt;
  y += vy * dt;

  if (x <= 0) {
    x = 0;
    vx *= -1;
  } else if (x >= maxX) {
    x = maxX;
    vx *= -1;
  }

  if (y <= 0) {
    y = 0;
    vy *= -1;
  } else if (y >= maxY) {
    y = maxY;
    vy *= -1;
  }

  logo.style.left = x + "px";
  logo.style.top = y + "px";

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);