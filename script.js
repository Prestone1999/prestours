// Navbar scroll effectz
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


    document.getElementById("menu-btn").addEventListener("click",()=>{
    document.getElementById("nav-menu").classList.toggle("hidden");
});

