// Load all datasets immediately
(function populateDatasets() {
  const root = document.getElementById('root');
  const stringOutput = datasets.map(d => {
      return `
      <div id=${d.id} class="card ${d.classification}-db">
          <p class="d-title">
              <ul>
                  <li class=${d.classification}>${d.name}</li>
              </ul>
          </p>
          <div class="util">
              <div class="d-logo">
                  <button class="logo-button"><a href='${d.pathname}' download=${d.download}>
                          <ion-icon name="download-outline"></ion-icon>
                      </a></button>
              </div>
              <div class="copy-link">
                  <!-- <button class="copy-button" onclick="copy('${d.id}')">Copy Link</button> -->
                  <button class="copy-button">Copy Link</button>
              </div>
          </div>
      </div>
      `
  }).join('');
  
  let frag = document.createRange().createContextualFragment(stringOutput);
  return root.appendChild(frag);
})();


const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll('nav li');
const click = document.querySelectorAll('.copy-button');
const allData = document.querySelectorAll('.card');

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


function copyLinkClicked(e) {
  const el = e.target;
  if (el.className !== 'copy-button') return; // don't continue if button not clicked
  Url = this.querySelector('a').href;
  navigator.clipboard.writeText(Url);
  const originalText = el.textContent;
  el.textContent = "copied!";
  return setTimeout(() => {el.innerHTML = originalText;}, 1000);
}

allData.forEach(card => card.addEventListener("click", copyLinkClicked));