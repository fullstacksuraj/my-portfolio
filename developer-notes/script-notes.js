// HTML5 Notes | Suraj Docs Loggic

let links = document.querySelectorAll(".link");
let content = document.querySelectorAll(".content");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    links.forEach((a) => {
      a.classList.remove("active");
    });
    link.classList.add("active");

    let activeContent = link.getAttribute("data-tab");
    content.forEach((activeSec) => {
      if (activeSec.id === activeContent) {
        activeSec.classList.add("show");
      } else {
        activeSec.classList.remove("show");
      }
    });
  });
});
