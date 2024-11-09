
if (window.innerWidth < 768){
  particlesJS('particles-js', {
    particles: {
        number: {
            value: 20 
        },
    }
  });
}

particlesJS("particles-js", {
  particles: {
    number: {
      value: 50, 
      density: {
        enable: true,
        value_area: 500 
      }
    },
    color: {
      value: ["#6f42c1", "#0d6efd", "#FFFFFF"] 
    },
    shape: {
      type: "circle", 
      stroke: {
        width: 0,
        color: "#000"
      },
      polygon: {
        nb_sides: 0
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.6, 
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.3, 
        sync: false
      }
    },
    size: {
      value: 5,
      random: true,
      anim: {
        enable: true,
        speed: 4,
        size_min: 2, 
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.35, 
      width: 1
    },
    move: {
      enable: true,
      speed: 1.55, 
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
        mode: "grab" 
      },
      onclick: {
        enable: false,
        mode: "push"
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
  retina_detect: true,
  fps_limit: 30,
});
