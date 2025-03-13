//  burger menu

const burger = document.querySelector(".burger__menu");
const headerA = document.querySelector(".header__action");
burger.addEventListener("click", () => {
  burger.classList.toggle("open");
  headerA.classList.toggle("open");
});

// links

const links = document.querySelectorAll(".links__items h4");
links.forEach((link) => {
  link.addEventListener("click", () => {
    link.querySelector("i").classList.toggle("open");
    link.nextElementSibling.classList.toggle("open");
  });
});


// coffee menu tab
const starnav = document.querySelectorAll(".coffee__nav__link");
const starContent = document.querySelectorAll(".coffee__item");
starnav.forEach((star) => {
  star.addEventListener("click", () => {
    removeActivestar();
    star.classList.add("active")
    const activeContent = document.querySelector(`#${star.id}-content`);
    removeActiveContent();
    activeContent.classList.add("active");
  });
});

function removeActivestar(){
  starnav.forEach((star) => {
star.classList.remove("active");
  });
}

function removeActiveContent(){
  starContent.forEach((content) => {
content.classList.remove("active");
  });
}



// slider

const cursor = document.querySelector(".cursor");
let mouseX = 0,
  mouseY = 0;
let posX = 0,
  posY = 0;
const delay = 0.1; // Adjust this for more or less delay (0.1 = slow, 1 = fast)

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  posX += (mouseX - posX) * delay;
  posY += (mouseY - posY) * delay;

  cursor.style.left = `${posX}px`;
  cursor.style.top = `${posY}px`;

  requestAnimationFrame(animateCursor);
}

animateCursor();

