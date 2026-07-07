// ==========================================
// FAYROSE
// Main Script
// ==========================================

// Wait for page
window.addEventListener("load", () => {

    // GSAP Intro Animation
    gsap.from(".hero h1", {
        duration: 1.5,
        y: -40,
        opacity: 0,
        ease: "power3.out"
    });

    gsap.from(".tagline", {
        duration: 1.4,
        delay: .3,
        opacity: 0,
        y: 20
    });

    gsap.from(".divider", {
        duration: 1,
        delay: .6,
        opacity: 0
    });

    gsap.from(".access", {
        duration: 1.3,
        delay: .9,
        opacity: 0,
        y: 40
    });

    gsap.from(".counter", {
        duration: 1.3,
        delay: 1.2,
        opacity: 0,
        y: 30
    });

    gsap.from(".scroll", {
        duration: 1.3,
        delay: 1.5,
        opacity: 0
    });

});


// ==========================================
// Golden Particles
// ==========================================

tsParticles.load("particles-js", {

    background: {
        color: {
            value: "transparent"
        }
    },

    fpsLimit: 60,

    particles: {

        number: {
            value: 35
        },

        color: {
            value: "#d4af37"
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: 0.35
        },

        size: {
            value: {
                min: 1,
                max: 3
            }
        },

        move: {

            enable: true,

            speed: 0.5,

            direction: "none",

            random: true,

            straight: false,

            outModes: {
                default: "out"
            }

        }

    }

});


// ==========================================
// ENTER Button
// ==========================================

const enterBtn = document.getElementById("enterBtn");
const secretKey = document.getElementById("secretKey");

enterBtn.addEventListener("click", () => {

    if (secretKey.value !== "keyrose") {
        alert("Wrong Secret Key");
        return;
    }

    gsap.to(".container", {
        opacity: 0,
        duration: 1,
        onComplete() {
            document.querySelector(".container").style.display = "none";
            // هنا نكملو الصفحة الثانية
        }
    });

});
