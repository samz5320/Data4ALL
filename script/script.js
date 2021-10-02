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

function copy(id) {
  Url = document.getElementById(id).href
  navigator.clipboard.writeText(Url)
}





        // functions to display number of downloads for each dataset
        function downloadButtonIris(){
          var counter = document.getElementById('iris-downloads');
          console.log(counter.innerHTML);
          localStorage.setItem('iris', parseInt(counter.innerHTML) + 1);
          counter.innerHTML = localStorage.getItem('iris');
      }
      function downloadButtonTitanic(){
          var counter = document.getElementById('titanic-downloads');
          console.log(counter.innerHTML);
          localStorage.setItem('titanic', parseInt(counter.innerHTML) + 1);
          counter.innerHTML = localStorage.getItem('titanic');
      }
      function downloadButtonWeatherHistory(){
          console.log("cndjcb");
          var counter = document.getElementById('weather-history-downloads');
          localStorage.setItem('weather-history', parseInt(counter.innerHTML) + 1);
          counter.innerHTML = localStorage.getItem('weather-history');
      }
      function downloadButtonAdsClick(){
          var counter = document.getElementById('ads-click-downloads');
          console.log(counter.innerHTML);
          localStorage.setItem('ads-click', parseInt(counter.innerHTML) + 1);
          counter.innerHTML = localStorage.getItem('ads-click');
      }
      function downloadButtonRedditVaccineMyths(){
        var counter = document.getElementById('reddit-vaccine-downloads');
        console.log(counter.innerHTML);
        localStorage.setItem('reddit-vaccine', parseInt(counter.innerHTML) + 1);
        counter.innerHTML = localStorage.getItem('reddit-vaccine');
      }
      function downloadButtonTwitchData(){
        var counter = document.getElementById('twitch-data-downloads');
        console.log(counter.innerHTML);
        localStorage.setItem('twitch-data', parseInt(counter.innerHTML) + 1);
        counter.innerHTML = localStorage.getItem('twitch-data');
      }
      function downloadButtonMovies(){
        var counter = document.getElementById('movies-downloads');
        console.log(counter.innerHTML);
        localStorage.setItem('movies', parseInt(counter.innerHTML) + 1);
        counter.innerHTML = localStorage.getItem('movies');
      }

      // retain number of downloads on page refresh
      window.onload = function(){
          document.getElementById('ads-click-downloads').innerHTML = localStorage.getItem('ads-click') || '0';
          document.getElementById('weather-history-downloads').innerHTML = localStorage.getItem('weather-history') || '0';
          document.getElementById('iris-downloads').innerHTML = localStorage.getItem('iris') || '0';
          document.getElementById('titanic-downloads').innerHTML = localStorage.getItem('titanic') || '0';
          document.getElementById('reddit-vaccine-downloads').innerHTML = localStorage.getItem('reddit-vaccine') || '0';
          document.getElementById('twitch-data-downloads').innerHTML = localStorage.getItem('twitch-data') || '0';
          document.getElementById('movies-downloads').innerHTML = localStorage.getItem('movies') || '0';

      }


      // function to track visitors count
      const countEl = document.getElementById('count');

      updateVisitCount();

      function updateVisitCount() {
          fetch('https://api.countapi.xyz/update/data4all-karishmav/karishmavanwari/?amount=1')
          .then(res => res.json())
          .then(res => {
              document.getElementById('count').innerHTML = res.value;
          })
      }

