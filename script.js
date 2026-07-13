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

// ======================================
// ENTER BUTTON
// ======================================

const enterBtn = document.getElementById("enterBtn");
const secretKey = document.getElementById("secretKey");
const registerScreen = document.getElementById("register-screen");
const container = document.querySelector(".container");

enterBtn.addEventListener("click", () => {
    alert("الزر خدم");
});



});
const storyBtn = document.getElementById("storyBtn");

storyBtn.addEventListener("click", () => {

    const success = document.getElementById("successMessage");
success.classList.remove("hidden");
success.style.display = "block";

    gsap.from("#successMessage",{
        opacity:0,
        y:30,
        duration:1
    });setTimeout(() => {
    const appLink = "instagram://user?username=fayr.oseshop";

    // محاولة فتح التطبيق
    window.location.href = appLink;

    // إذا ما تفتحش التطبيق، بعد ثانية يفتح الموقع
    setTimeout(() => {
        window.location.href = "https://www.instagram.com/fayr.oseshop/";
    }, 1000);

}, 5000);
});
