document.addEventListener("DOMContentLoaded", function() {
    if (typeof particlesJS === 'undefined') {
        console.error('particlesJS is not defined. Ensure particles.js is loaded correctly.');
        return;
    }

    // Function to get screen size and adjust particle density
    function getParticleConfig() {
        let numParticles;
        let areaValue;

        if (window.innerWidth < 576) { // Small screens
            numParticles = 100;
            areaValue = 400;
        } else if (window.innerWidth < 768) { // Medium screens
            numParticles = 200;
            areaValue = 600;
        } else if (window.innerWidth < 992) { // Large screens
            numParticles = 350;
            areaValue = 800;
        } else { // Extra large screens
            numParticles = 450;
            areaValue = 1000;
        }

        return {
            "particles": {
                "number": {
                    "value": numParticles,
                    "density": {
                        "enable": true,
                        "value_area": areaValue
                    }
                },
                "color": {
                    "value": "#7e00af"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": false,
                    "distance": 0,
                    "color": "#7e00af",
                    "opacity": 0,
                    "width": 0
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": false,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 0,
                        "duration": 0
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        };
    }

    // Initialize particles with the dynamic config
    particlesJS('particles-js', getParticleConfig());

    // Reinitialize particles on window resize to adjust for new screen size
    window.addEventListener('resize', function() {
        particlesJS('particles-js', getParticleConfig());
    });

    const body = document.getElementById("background-body");
    const additionalContent = document.getElementById("additional-content");


    // Typewriter effect remains the same
    const textBox = document.querySelector('.typewriter');
    const texts = ["Welcome", "To Francis Universe."];
    let currentTextIndex = 0;
    let isDeleting = false;
    let textIndex = 0;
    let cursorVisible = true;

    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseBeforeNextText = 1000;

    const typewriter = () => {
        const currentText = texts[currentTextIndex];

        if (!isDeleting) {
            if (textIndex < currentText.length) {
                textBox.innerHTML += currentText.charAt(textIndex);
                textIndex++;
                setTimeout(typewriter, typeSpeed);
            } else {
                setTimeout(() => {
                    isDeleting = true;
                    setTimeout(typewriter, pauseBeforeNextText);
                }, pauseBeforeNextText);
            }
        } else {
            if (textIndex > 0) {
                textBox.innerHTML = currentText.substring(0, textIndex - 1);
                textIndex--;
                setTimeout(typewriter, deleteSpeed);
            } else {
                isDeleting = false;
                if (currentTextIndex === 1 && textIndex === 0) {
                    textBox.style.opacity = '0';
                    body.style.overflowY = 'scroll';
                    additionalContent.classList.add("welcome")
                    return;
                }
                currentTextIndex = (currentTextIndex + 1) % texts.length;
                setTimeout(typewriter, 250);
            }
        }

        cursorVisible = !cursorVisible;
        document.querySelector('.cursor').style.visibility = cursorVisible ? 'visible' : 'hidden';
    };

    typewriter();
});

const menu = document.getElementById("menu");
const iconMenuNotOpen = document.getElementById("icon-of-menu-not-open");
const iconMenuOpen = document.getElementById("icon-of-menu-open");
const menuOpen = document.getElementById("menu-open");

menu.addEventListener("click", () => {
    menu.classList.toggle("already-clicked");
    iconMenuNotOpen.classList.toggle("already-clicked");
    iconMenuOpen.classList.toggle("already-clicked");

    if (menu.classList.contains("already-clicked")) {
        const halfHeight = menuOpen.offsetHeight / 2;
        menuOpen.style.transform = `translateX(10vw) translateY(${halfHeight - halfHeight * 0.3}px)`;
    }
});