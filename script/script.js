const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');

    // Set nav active status with boolean
    let isActive = false;
    console.log("nav-active : " + isActive)
    

    burger.addEventListener("click", ()=>{

        //Toggle nav
        nav.classList.toggle("nav-active");

        // Toggle nav active status to true/false
        isActive = !isActive;
        console.log("nav-active : " + isActive)
        
        //Animate link
        navLinks.forEach((link, index)=>{
            if(isActive) {
                link.style.animation = `navLinkFadeIn 0.4s ease forwards ${index / 7 + 0.2}s`;
                console.log("nav li: "+ index + " in");
            } else {
                // link.style.animation = "";
                link.style.animation = `navLinkFadeOut 0.2s ease forwards 0s`;
                // link.style.animation = "";
                console.log("nav li: "+ index + " out");
            }
            console.log(link.style.animation);
        });
        
        //Burger animation
        burger.classList.toggle('toggle');
    });

}
navSlide();

filterSelection("all");
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("card");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}