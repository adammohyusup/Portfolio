const navSlide = () => {
    const burger = document.querySelector(".burger");
    const navLists = document.querySelector("nav");

    burger.addEventListener("click", () => {
        burger.classList.toggle("toggle-burger");
        navLists.classList.toggle("nav-active");
    });
};
navSlide();