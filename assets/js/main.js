document.addEventListener('DOMContentLoaded', () => {
    // Component Loader
    const loadComponent = (id, file) => {
        const el = document.getElementById(id);
        if (el) {
            fetch(file)
                .then(response => response.text())
                .then(data => {
                    el.innerHTML = data;
                    // Re-initialize header scroll effect after loading
                    if (id === 'main-header') initHeaderScroll();
                });
        }
    };

    loadComponent('main-header', '/components/header.html');
    loadComponent('main-footer', '/components/footer.html');

    function initHeaderScroll() {
        const header = document.getElementById('main-header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Simple reveal animation for sections
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
});
