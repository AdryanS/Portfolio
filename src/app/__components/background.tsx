"use client"

import { useTheme } from "next-themes";
import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


const BackgroundParticle:React.FC = () => {
  const { theme } = useTheme()
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <div className="w-full top-0 absolute -z-40">

    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
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
            value: theme === "dark" ? "#8541fa" : "#09050f",
          },
          links: {
            color: theme === "dark" ? "#8541fa" : "#09050f",
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
      </div>
  );
};

export default BackgroundParticle;