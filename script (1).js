const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

  sections.forEach(section => {

    const top = window.scrollY;

    const offset = section.offsetTop - 300;

    if(top >= offset){

      section.classList.add("show-animation");

    }

  });

});