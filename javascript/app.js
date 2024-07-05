window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
    }
});

window.addEventListener('scroll', function() {
    const icon = document.querySelector('.fa-magnifying-glass');
        if (window.scrollY > 50) {
                icon.classList.add('scrolled');
        } else {
            icon.classList.remove('scrolled');
    }
});

window.addEventListener('scroll', function(){
    const h1 = document.querySelector('.h1-first');
    if (window.scrollY > 50) {
        h1.classList.add('scrolled');
    } else {
        h1.classList.remove('remove');
    }
});

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const hr = document.querySelector('.hr-first');
    const navbarSecond = document.querySelector('.navbar-second');

    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        hr.classList.add('hidden');
        navbarSecond.classList.add('hidden');
    } else {
        navbar.classList.remove('scrolled');
        hr.classList.remove('hidden');
        navbarSecond.classList.remove('hidden');
    }
});
