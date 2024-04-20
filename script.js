let menu = document.querySelector("#menu");
let active = document.querySelector(".nav-items");
let link = document.querySelector(".nav-link");
menu.addEventListener("click", () => {
    active.classList.toggle("active");
});

link.forEach((link) => {
    link.addEventListener("click", ()=>{
    active.classList.toggle("active");
    });
});
    
