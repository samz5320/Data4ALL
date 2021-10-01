const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll('nav li');

burger.addEventListener('click', toggleNav );


function toggleNav() { 
    burger.classList.toggle('toggle');
    if (nav.style.display === "block") {
        nav.style.display = "none";
        navLinks.forEach((link, index) => {
            //  link.style.animation = `navLinkFadeIn 0.4s ease forwards ${index / 7 + 0.2}s`;
            link.style.animation = `navLinkFadeOut 0.2s ease forwards 0s`;
        });
       
    } else{
        nav.style.display = "block";
        navLinks.forEach((link, index) => {
            // link.style.animation = `navLinkFadeOut 0.2s ease forwards 0s`;
            link.style.animation = `navLinkFadeIn 0.4s ease forwards ${index / 7 + 0.2}s`;
        });
        
    }
}
