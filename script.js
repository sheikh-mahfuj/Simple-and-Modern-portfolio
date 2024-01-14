let hamburger = document.getElementById("hamburger");
let menuIcon = document.getElementById("menu_icon");
let navLinks = document.querySelectorAll(".navLink");

let value = 0;

function toggleMenu() {
    let menu = document.getElementById("menu");
    if (value === 0) {
        menu.style.width = "100%";
        value = 1;
        toggleMenuIcon();
    } else {
        menu.style.width = "0";
        value = 0;
        toggleMenuIcon();
    }
}
function toggleMenuIcon() {
    if (menuIcon.classList.contains("fa-bars")) {
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");
        menuIcon.style.color = "white";
    } else {
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
        menuIcon.style.color = "black";
    }
}

hamburger.addEventListener("click", toggleMenu);

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        toggleMenu();
    });
});
