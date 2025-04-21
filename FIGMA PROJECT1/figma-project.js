const hamburgerMenu = document.querySelector(".hamburger-icon")

const menu = document.getElementById("menu")

const closeIcon = document.querySelector(".close-icon")






hamburgerMenu.addEventListener("click", ()=>{
    menu.style.display = "block"
    hamburgerMenu.style.display = "none"
    closeIcon.style.display = "block"
})


closeIcon.addEventListener("click", ()=>{
    menu.style.display = "none"
    hamburgerMenu.style.display = "block"
    closeIcon.style.display = "none"
})





