// Selecciona todos los enlaces nav-link

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const navbarCollapse = document.getElementById('navbarNavAltMarkup');
        const bootstrapCollapse = new bootstrap.Collapse(navbarCollapse, {
            toggle: false
        });
        bootstrapCollapse.hide();
    });
});
