
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
  alert("get latest info about the school, visit our blog");
}

