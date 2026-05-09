// Typing Effect

const typingSpan = document.querySelector("#typing-span");

const typingWords = [
  "Frontend Dev..",
  "JavaScript Dev..",
  "Full Stack Dev..",
  "Freelancer",
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 200;
let erasingDelay = 200;
let nextWordDelay = 100;

const typingEffect = () => {
  const currentWord = typingWords[wordIndex];

  if (!isDeleting) {
    typingSpan.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(typingEffect, nextWordDelay);
    } else {
      setTimeout(typingEffect, typingDelay);
    }
  } else {
    typingSpan.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % typingWords.length;
      setTimeout(typingEffect, typingDelay);
    } else {
      setTimeout(typingEffect, erasingDelay);
    }
  }
};

typingEffect();

let menuIcon = document.querySelector(".menu-icon");
let navMenu = document.querySelector("#navMenu");
let navLinks = document.querySelectorAll("#navMenu a");
let contents = document.querySelectorAll(".content");

// Toggle menu
menuIcon.addEventListener("click", (e) => {
  e.stopPropagation();
  navMenu.classList.toggle("active");
  menuIcon.classList.toggle("fa-bars");
  menuIcon.classList.toggle("fa-xmark");
});

// Link click
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // 👉 1. Content switch
    let tab = link.getAttribute("data-tab");

    contents.forEach((content) => {
      content.classList.remove("active");
    });

    document.getElementById(tab).classList.add("active");

    // 👉 2. Active link highlight
    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");

    // 👉 3. Mobile me nav hide
    if (window.innerWidth <= 768) {
      navMenu.classList.remove("active");
      menuIcon.classList.remove("fa-xmark");
      menuIcon.classList.add("fa-bars");
    }
  });
});

// Click outside → close
document.addEventListener("click", (e) => {
  if (
    !navMenu.contains(e.target) &&
    !menuIcon.contains(e.target) &&
    window.innerWidth <= 768
  ) {
    navMenu.classList.remove("active");
    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");
  }
});

// About Section Tab Change Content

let tab = document.querySelectorAll(".tabLinks");
let tabSection = document.querySelectorAll(".rightSide");

tab.forEach((tablink) => {
  tablink.addEventListener("click", () => {
    let link = tablink.getAttribute("data-tab");

    tab.forEach((a) => {
      a.classList.remove("active");
    });
    tablink.classList.add("active");

    tabSection.forEach((secTab) => {
      if (secTab.id === link) {
        secTab.classList.add("show");
      } else {
        secTab.classList.remove("show");
      }
    });
  });
});
