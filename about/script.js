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

fetch("https://ipapi.co/json/")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    if (data.country_name === "Sweden") {
      let link = document.getElementById("phone-number");
      link.href = "tel:+46 76-078 60 70";
    } else {
      let link = document.getElementById("phone-number");
      link.href = "tel:+1 (778) 930-1924";
    }
  });
