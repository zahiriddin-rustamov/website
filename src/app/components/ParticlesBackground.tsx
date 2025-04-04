"use client";

import { useCallback, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Engine } from "tsparticles-engine";

// Component for creating an interactive particle network background
const ParticlesBackground = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Initialize the particles engine once component mounts
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
    setIsLoaded(true);
  }, []);

  return (
    <div className="particles-container absolute inset-0 z-0">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: false,
          background: {
            color: {
              value: "#ffffff",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "connect",
                parallax: {
                  enable: true,
                  force: 60,
                  smooth: 20
                }
              },
              resize: true,
            },
            modes: {
              connect: {
                distance: 180,
                radius: 200,
                links: {
                  opacity: 0.4,
                },
              },
              push: {
                quantity: 4,
              },
            },
          },
          particles: {
            color: {
              value: "#6366f1",
            },
            links: {
              color: {
                value: "#6366f1"
              },
              distance: 150,
              enable: false,
              opacity: 0.3,
              width: 1.2,
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
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 70,
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: true,
                speed: 0.2,
                opacity_min: 0.2,
                sync: false
              }
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 2, max: 4 },
              random: true,
            },
          },
          detectRetina: true,
        }}
        className="w-full h-full"
      />
    </div>
  );
};

export default ParticlesBackground; 