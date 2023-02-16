import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Container } from "./styles";

const BackgroundParticle:React.FC = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Container>

    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "#272829",
          },
        },
        fpsLimit: 50,
        style: {
          top: "0px",
          width: "100%",
          height: "100vh",
          position: "absolute",
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 0.3,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 0.8,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 1000,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 0.3, max: 3 },
          },
        },
        detectRetina: true,
      }}
      />
      </Container>
  );
};

export default BackgroundParticle;
