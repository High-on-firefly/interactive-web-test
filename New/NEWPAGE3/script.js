const menuBtn = document.getElementById("menu-btn");
const menuExitBtn = document.getElementById("menu-exit-btn");
const mobNav = document.querySelector(".mob-nav");

menuBtn.addEventListener("click", () => {
    mobNav.classList.add("open");
});

menuExitBtn.addEventListener("click", () => {
    mobNav.classList.remove("open");
});
