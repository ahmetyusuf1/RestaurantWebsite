const searchForm = document.querySelector(".search_form");
const cartItem = document.querySelector(".cart_items_container");
const navbar = document.querySelector(".navbar");

//! Buttons

const searchBtn = document.querySelector("#search_btn");
const cartBtn = document.querySelector("#cart_btn");
const menuBtn = document.querySelector("#menu_btn");


searchBtn.addEventListener("click", function() {
    searchForm.classList.toggle("active");
})

cartBtn.addEventListener("click", function() {
    cartItem.classList.toggle("active");
})

menuBtn.addEventListener("click", function() {
    navbar.classList.toggle("active");
})