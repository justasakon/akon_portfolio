const mobileMenu = document.getElementById("mobile_menu");
mobileMenu.addEventListener("click", ()=>{
    const desktopMenu = document.getElementById("desktop_menu");
    desktopMenu.classList.toggle("active");
    mobileMenu.classList.toggle("active");
});