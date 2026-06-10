document.addEventListener('DOMContentLoaded', () => {
    // Sticky Navbar logic
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-brand-black', 'bg-opacity-95', 'backdrop-blur-sm', 'border-b', 'border-zinc-800');
            navbar.classList.remove('bg-transparent', 'py-6');
            navbar.classList.add('py-4');
        } else {
            navbar.classList.remove('bg-brand-black', 'bg-opacity-95', 'backdrop-blur-sm', 'border-b', 'border-zinc-800');
            navbar.classList.add('bg-transparent', 'py-6');
            navbar.classList.remove('py-4');
        }
    });

    // Intersection Observer for scroll reveal animations
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Stop observing once revealed
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });
});