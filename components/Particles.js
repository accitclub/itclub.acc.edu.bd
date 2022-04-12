import Particles from "react-tsparticles";

export const Particle = () => {
    const particlesInit = (main) => {
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    const particlesLoaded = (container) => {

    };
    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            canvasClassName={"particles"}
            style={{"position": "absolute"}}
            options={{
                fullScreen: false,
                fpsLimit: 30,
                particles: {
                    color: {
                        value: "#ffffff",
                    },

                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outMode: "bounce",
                        random: false,
                        speed: 4,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 6000,
                        },
                        value: 60,
                    },
                    opacity: {
                        value: 0.3,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        random: true,
                        value: 7,
                    },
                },
                detectRetina: true,
            }}
        />
    );
};