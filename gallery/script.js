const hamburgerButton = document.querySelector("#hamburger-button");

const closeButton = document.querySelector("#close-button");

hamburgerButton.addEventListener("click", function () {
  if ((document.getElementById("close-button").style.display = "none")) {
    document.getElementById("hamburger-button").style.display = "none";
    document.getElementById("close-button").style.display = "block";
  }
});

closeButton.addEventListener("click", function () {
  if ((document.getElementById("close-button").style.display = "block")) {
    document.getElementById("hamburger-button").style.display = "block";
    document.getElementById("close-button").style.display = "none";
  }
});

let currentYear = new Date().getFullYear();
document.getElementById("year").innerHTML = currentYear;
