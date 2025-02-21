
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('.nav-content ul li a');


hamburger.addEventListener('click', () => {
    
    nav.classList.toggle('nav-open');
    nav.classList.remove('nav-closed'); 
});


navLinks.forEach(link => {
    link.addEventListener('click', () => {
       
        nav.classList.add('nav-closed');
        nav.classList.remove('nav-open');

       
        setTimeout(() => {
            nav.classList.remove('nav-closed');
        }, 500); 
    });
});



