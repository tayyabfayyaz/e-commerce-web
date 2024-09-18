let navbarToggle = document.getElementById('navbar-toggle') as HTMLElement;
let navbarItems = document.getElementById('navbar-items') as HTMLElement;

navbarToggle.addEventListener('click', () => {
    navbarItems.classList.toggle('active');
});