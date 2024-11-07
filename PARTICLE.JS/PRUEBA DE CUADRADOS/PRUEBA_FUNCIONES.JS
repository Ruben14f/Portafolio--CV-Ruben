particlesJS("particles-js", {
  particles: {
      number: {
          value: 100,
          density: {
              enable: true,
              value_area: 650
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
              nb_sides: 5
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
          value: 4,
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
          opacity: 0.3,
          width: 1
      },
      move: {
          enable: true,
          speed: 3,
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
  retina_detect: true
});

var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function () {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);
