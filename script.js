"use strict";
// fetching feature box
const featuresBox = document.querySelector("#features_options");
const features = document.querySelector(".features");
// fetching company box
const companyBox = document.querySelector("#company_options");
const company = document.querySelector(".company");

features.addEventListener("mouseover", function () {
  featuresBox.style.display = "block";
  features.addEventListener("mouseout", function () {
    featuresBox.style.display = "none";
  });
});
// event listener for company options
company.addEventListener("mouseover", function () {
  companyBox.style.display = "block";
  company.addEventListener("mouseout", function () {
    companyBox.style.display = "none";
  });
});

// fetching the cross sign from side nav menu
const cross = document.querySelector(".cross");

// fetching ham burger icon
const ham = document.querySelector(".hamburger-icon");

// fetching side nav menu
const sideNav = document.querySelector(".side-nav");
ham.addEventListener("click", function () {
  sideNav.style.display = "block";
  sideNav.style.transform = "translateX(0%)";
});

cross.addEventListener("click", function () {
  sideNav.style.transform = "translateX(100%)";
  sideNav.style.display = "none";
});

// functionality for side menu features

const side_features_button = document.querySelector(".side_features a");
const side_features_options = document.querySelector("#side_features_options");

side_features_button.addEventListener("click", function () {
  if (side_features_options.style.display === "block") {
    side_features_options.style.display = "none";
  } else {
    side_features_options.style.display = "block";
  }
});

const side_company_button = document.querySelector(".side_company");
const side_company_options = document.querySelector("#side_company_options");

side_company_button.addEventListener("click", function () {
  if (side_company_options.style.display === "block") {
    side_company_options.style.display = "none";
  } else {
    side_company_options.style.display = "block";
  }
});
// side_features_button.addEventListener("click", () => {
//   console.log("hello");
// });
