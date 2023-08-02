"use strict";

window.onload = function () {
  // Navigation bar buttons
  var about = document.querySelector("#navAbout");
  var services = document.querySelector("#navServices");
  var contact = document.querySelector("#navContact");

  about.onclick = function () {
    document.querySelector("#aboutRow").scrollIntoView({
      behavior: "smooth"
    });
  }

  services.onclick = function () {
    document.querySelector("#servicesRow").scrollIntoView({
      behavior: "smooth"
    });
  }

  contact.onclick = function () {
    document.querySelector("#phoneContact").scrollIntoView({
      behavior: "smooth"
    });
  }

  // Learn more jumbotron button jump to about div
  var bannerBtn = document.querySelector("#bannerBtn");
  bannerBtn.onclick = function () {
    document.querySelector("#aboutRow").scrollIntoView({
      behavior: "smooth"
    });
  }

  // Clear input on click in the form
  var formName = document.querySelector("#formName");
  formName.onclick = function () {
    formName.value = "";
  }

  var formEmail = document.querySelector("#formEmail");
  formEmail.onclick = function () {
    formEmail.value = "";
  }

  var formMessage = document.querySelector("#formMessage");
  formMessage.onclick = function () {
    formMessage.value = "";
  }
}
