const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelectorAll("[data-mobile-nav]");
//code to toggle dropdown menu
document.addEventListener("click", e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button"); //look for dropdown button
    if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return; //if clicking inside dropdown, keep it open

    let currentDropdown;
    if (isDropdownButton) {     //if it is a dropdown button
        currentDropdown = e.target.closest("[data-dropdown]") //set currentDropdown to closest dropdown we're inside of
        currentDropdown.classList.toggle("active")
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => { //select all active dropdowns
        if (dropdown === currentDropdown) return; //do nothing if dropdown is the current dropdown
        dropdown.classList.remove("active"); //otherwise close all other active dropdowns
    })
})

//code to toggle hamburger menu for mobile
hamburger.addEventListener("click", () => {
    mobileNav.forEach(element => {
        element.classList.toggle("opened")
    });
})

document.querySelectorAll(".link").forEach(link => {
    link.addEventListener("click", () => {
        mobileNav.forEach(element => {
            element.classList.remove("opened")
        })
    })
})

document.querySelectorAll(".company-link").forEach(link => {
    link.addEventListener("click", () => {
        mobileNav.forEach(element => {
            element.classList.remove("opened")
        })
    })
})