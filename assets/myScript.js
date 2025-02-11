let menu = document.querySelector("#menu-icon");
let navMenu = document.querySelector(".navmenu");

menu.addEventListener("click", ()=>{
    menu.classList.toggle("bx-x");
    navMenu.classList.toggle("open");
});


const sr = ScrollReveal({
    distance: "65px",
    duration: 2600,
    delay: 450,
    reset: true
})

sr.reveal(".text", {delay:200 , origin: "top"});
sr.reveal(".main-img", {delay: 500 , origin: "top"});