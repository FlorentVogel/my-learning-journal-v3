const hamburgerMenuBtn = document.querySelector(".hamburger-menu")
const navbarMobile = document.querySelector(".navbar-mobile")
const body = document.querySelector("body")

hamburgerMenuBtn.addEventListener("click", () => {
        hamburgerMenuBtn.classList.toggle("is-active")
        navbarMobile.classList.toggle("is-active")
        body.classList.toggle("is-active")
    })