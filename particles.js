
let navbar = document.querySelector(".navbar")
let ham = document.querySelector(".ham")

ham.addEventListener("click", toggleHamburger)

// toggles hamburger menu in and out when clicking on the hamburger
function toggleHamburger(){
    navbar.classList.toggle("showNav")
    ham.classList.toggle("showClose")
  }


  // blog alert
function message(){
  alert("GET LATEST GIST FROM OUR BLOG :)");
}

function podcast(){
  alert("NO PODCAST AVAILABLE YET .. THANKS ")
}

function audio(){
  alert("##")
}

// jquery 

$(".search-item").search({

});