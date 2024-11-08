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



document.addEventListener("DOMContentLoaded", function() {
    const texts = ["¿Te intereso mi perfil?", "¡Te invito a contactarme!"];
    let currentTextIndex = 0;
    let currentCharIndex = 0;
    const typewriterElement = document.getElementById("typewriter");

    function typeText() {
        if (currentCharIndex < texts[currentTextIndex].length) {
            typewriterElement.textContent += texts[currentTextIndex].charAt(currentCharIndex);
            currentCharIndex++;
            setTimeout(typeText, 100); 
        } else {
            if (currentTextIndex === texts.length - 1) {
                return; 
            }
            setTimeout(deleteText, 2000); 
        }
    }

    function deleteText() {
        if (currentCharIndex > 0) {
            typewriterElement.textContent = typewriterElement.textContent.slice(0, -1);
            currentCharIndex--;
            setTimeout(deleteText, 50); 
        } else {
            currentTextIndex = (currentTextIndex + 1) % texts.length; 
            setTimeout(typeText, 1000);
        }
    }

   
    typewriterElement.addEventListener("click", function() {
        currentTextIndex = 0;
        currentCharIndex = 0;
        typewriterElement.textContent = "";
        typeText(); 
    });

    typeText(); // Comienza la animación
});

