// const navSlide = () => {
//     const burger = document.querySelector(".burger");
//     const nav = document.querySelector(".nav-links");
//     const navLinks = document.querySelectorAll('.nav-links li');

//     // Set nav active status with boolean
//     let isActive = false;
//     console.log("nav-active : " + isActive)
    

//     burger.addEventListener("click", ()=>{

//         //Toggle nav
//         nav.classList.toggle("nav-active");

//         // Toggle nav active status to true/false
//         isActive = !isActive;
//         console.log("nav-active : " + isActive)
        
//         //Animate link
//         navLinks.forEach((link, index)=>{
//             if(isActive) {
//                 link.style.animation = `navLinkFadeIn 0.4s ease forwards ${index / 7 + 0.2}s`;
//                 console.log("nav li: "+ index + " in");
//             } else {
//                 // link.style.animation = "";
//                 link.style.animation = `navLinkFadeOut 0.2s ease forwards 0s`;
//                 // link.style.animation = "";
//                 console.log("nav li: "+ index + " out");
//             }
//             console.log(link.style.animation);
//         });
        
//         //Burger animation
//         burger.classList.toggle('toggle');
//     });

// }
// navSlide();

const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll('nav li');

burger.addEventListener('click', toggleNav )


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