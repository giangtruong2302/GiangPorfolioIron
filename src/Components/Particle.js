import Particles from "react-particles-js";
import React from "react";
import img from "../img/iconvisual.png";
import img1 from "../img/reacticon.png";
import img2 from "../img/jsicon.png";
import putygon from "../img/download.png";

function Particle() {
  return (
    <>
      <Particles
        width="100%"
        height="100vh"
        params={{
          particles: {
            number: {
              value: 8,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              speed: 1,
              out_mode: "out",
            },
            shape: {
              type: ["image", "circle"],
              image: [
                {
                  src: img,
                  height: 20,
                  width: 23,
                },
                {
                  src: img,
                  height: 20,
                  width: 23,
                },
                {
                  src: img,
                  height: 20,
                  width: 23,
                },
                {
                  src: img1,
                  height: 20,
                  width: 20,
                },
                {
                  src: img1,
                  height: 30,
                  width: 83,
                },
                {
                  src: img,
                  height: 20,
                  width: 23,
                },
                {
                  src: img1,
                  height: 20,
                  width: 20,
                },
                {
                  src: img1,
                  height: 30,
                  width: 83,
                },
                {
                  src: img1,
                  height: 20,
                  width: 20,
                },
                {
                  src: img1,
                  height: 20,
                  width: 20,
                },
                {
                  src: img,
                  height: 20,
                  width: 23,
                },
                {
                  src: img,
                  height: 20,
                  width: 23,
                },
                {
                  src: img,
                  height: 20,
                  width: 23,
                },
                {
                  src: img1,
                  height: 20,
                  width: 20,
                },
                {
                  src: img1,
                  height: 30,
                  width: 83,
                },
                {
                  src: img,
                  height: 20,
                  width: 23,
                },
                {
                  src: img1,
                  height: 20,
                  width: 20,
                },
                {
                  src: img1,
                  height: 30,
                  width: 83,
                },
                {
                  src: img1,
                  height: 20,
                  width: 20,
                },
                {
                  src: img1,
                  height: 20,
                  width: 20,
                },
                {
                  src: img1,
                  height: 20,
                  width: 20,
                },
                {
                  src: img1,
                  height: 20,
                  width: 20,
                },
              ],
            },
            color: {
              value: "#636e72",
            },
            size: {
              value: 30,
              random: false,
              anim: {
                enable: true,
                speed: 4,
                size_min: 10,
                sync: false,
              },
            },
          },
          retina_detect: false,
        }}
      />
      {/* <Particles width="100%" height="100vh"
              params={{
                particles: {
                  number:{
                    value:109,
                    density:{
                      enable: true,
                      value_area: 1200
                    }
                  },
                  color:{
                    value: '#636e72'
                  },
                  shape:{
                    type: 'circle',
                    stroke: {
                      width: 0
                    },
                    polygon:{
                      nb_sides: 6
                    }
                  },
                  line_linked: {
                    enable: false,
                    distance: 150,
                    opacity: 0.9,
                    width: 1,
                    shadow: {
                      enable: true,
                      color: "#e74c3c",
                      blur: 5
                    }
                  },
                  move:{
                    enable: true,
                    random: true,
                    speed: .6,
                    attract:{
                      rotateX: 600,
                      rotateY: 1200
                    }
                  },
                  size: {
                    value: 4,
                    random: true,
                    anim:{
                      speed: 40,
                      size_min: 0.1
                    }
                  },
                  opacity: {
                    value: 0.8,
                    anim: {
                      speed: 1,
                      opacity_min: 0.1
                    }
                  }
                }
              }}
      /> */}
      {/* <Particles
        width="100%"
        height="100vh"
        params={{
          fps_limit: 28,
          particles: {
            collisions: {
              enable: false,
            },
            number: {
              value: 200,
              density: {
                enable: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 30,
              opacity: 0.4,
            },
            move: {
              speed: 1,
            },
            opacity: {
              anim: {
                enable: true,
                opacity_min: 0.05,
                speed: 1,
                sync: false,
              },
              value: 0.4,
            },
          },
          polygon: {
            enable: true,
            scale: 0.5,
            type: "inline",
            move: {
              radius: 10,
            },
            url: "../img/download.png",
            inline: {
              arrangement: "equidistant",
            },
            draw: {
              enable: true,
              stroke: {
                color: "rgba(255, 255, 255, .2)",
              },
            },
          },
          retina_detect: false,
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
              },
            },
            modes: {
              bubble: {
                size: 6,
                distance: 40,
              },
            },
          },
        }}
      /> */}
    </>
  );
}

export default Particle;
