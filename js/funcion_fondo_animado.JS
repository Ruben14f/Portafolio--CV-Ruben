particlesJS("particles-js", {
  particles: {
    number: {
      value: 50, // Ajusta la cantidad de partículas para un efecto personalizado
      density: {
        enable: true,
        value_area: 400 // Espaciado de las partículas
      }
    },
    color: {
      value: ["#6f42c1", "#0d6efd", "#FFFFFF"] // Colores variados para un efecto único
    },
    shape: {
      type: "circle", // Puedes cambiarlo a "polygon" o "triangle" para variar
      stroke: {
        width: 0,
        color: "#000"
      },
      polygon: {
        nb_sides: 5 // Número de lados para formas poligonales
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.6, // Mayor opacidad para un efecto más visible
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.3, // Mínimo de opacidad para animaciones
        sync: false
      }
    },
    size: {
      value: 4, // Tamaño de las partículas
      random: true,
      anim: {
        enable: true,
        speed: 4,
        size_min: 2, // Tamaño mínimo durante la animación
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.3, // Opacidad de las líneas de conexión
      width: 1
    },
    move: {
      enable: true,
      speed: 3, // Velocidad de movimiento
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: true,
      attract: {
        enable: true,
        rotateX: 3000,
        rotateY: 3000
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab" // Cambia a "bubble" o "grab" para otros efectos
      },
      onclick: {
        enable: false,
        mode: "push" // Efecto al hacer clic
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 200,
        line_linked: {
          opacity: 0.5
        }
      },
      bubble: {
        distance: 250,
        size: 8,
        duration: 2,
        opacity: 0.8,
        speed: 3
      },
      repulse: {
        distance: 150,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
});
