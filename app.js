"use strict";
let navbarToggle = document.getElementById('navbar-toggle');
let navbarItems = document.getElementById('navbar-items');
navbarToggle.addEventListener('click', () => {
    navbarItems.classList.toggle('active');
});
