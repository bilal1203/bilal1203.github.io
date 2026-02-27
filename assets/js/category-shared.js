// ========================================
// CATEGORY PAGE SHARED JAVASCRIPT
// Ahmad Bilal Portfolio
// ========================================

// ── SPLASH SCREEN ────────────────────────
window.addEventListener("load", function () {
    const splash = document.getElementById("splash-screen");
    if (splash) {
        setTimeout(function () {
            splash.classList.add("splash-fade-out");
            setTimeout(function () {
                splash.style.display = "none";
            }, 600);
        }, 2200);
    }
});

// ── CUSTOM CURSOR ────────────────────────
const cursorInner = document.getElementById("cursor-inner");
const cursorOuter = document.getElementById("cursor-outer");

if (cursorInner && cursorOuter) {
    document.addEventListener("mousemove", function (e) {
        cursorInner.style.left = e.clientX + "px";
        cursorInner.style.top = e.clientY + "px";
        cursorOuter.style.left = e.clientX + "px";
        cursorOuter.style.top = e.clientY + "px";
    });

    document.querySelectorAll("a, button, [onclick], .featured-project-card").forEach(function (el) {
        el.addEventListener("mouseenter", function () {
            cursorInner.classList.add("hover");
            cursorOuter.classList.add("hover");
        });
        el.addEventListener("mouseleave", function () {
            cursorInner.classList.remove("hover");
            cursorOuter.classList.remove("hover");
        });
    });
}

// ── BACK TO TOP BUTTON ───────────────────
const mybutton = document.getElementById("backtotopbutton");

window.addEventListener("scroll", function () {
    if (!mybutton) return;
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        mybutton.style.display = "flex";
    } else {
        mybutton.style.display = "none";
    }
});

// ── DARK / LIGHT MODE TOGGLE ─────────────
function visualmode() {
    document.body.classList.toggle("light-mode");
    var elements = document.querySelectorAll(".needtobeinvert");
    elements.forEach(function (element) {
        element.classList.toggle("invertapplied");
    });
    // In dark mode: show ☀️ (click to switch to light)
    // In light mode: show 🌙 (click to switch to dark)
    const icon = document.getElementById("theme-toggle-icon");
    if (icon) {
        icon.textContent = document.body.classList.contains("light-mode") ? "🌙" : "☀️";
    }
    localStorage.setItem("theme", document.body.classList.contains("light-mode") ? "light" : "dark");
}

// Apply saved theme on load
(function () {
    const savedTheme = localStorage.getItem("theme");
    const icon = document.getElementById("theme-toggle-icon");
    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
        if (icon) icon.textContent = "🌙"; // In light mode, show moon to go dark
    } else {
        if (icon) icon.textContent = "☀️"; // In dark mode (default), show sun to go light
    }
})();

// ── MOBILE HAMBURGER MENU ────────────────
const mobileToggleMenu = document.getElementById("mobiletogglemenu");

function hamburgerMenu() {
    document.body.classList.toggle("stopscrolling");
    if (mobileToggleMenu) mobileToggleMenu.classList.toggle("show-toggle-menu");
    const bar1 = document.getElementById("burger-bar1");
    const bar2 = document.getElementById("burger-bar2");
    const bar3 = document.getElementById("burger-bar3");
    if (bar1) bar1.classList.toggle("hamburger-animation1");
    if (bar2) bar2.classList.toggle("hamburger-animation2");
    if (bar3) bar3.classList.toggle("hamburger-animation3");
}

function hidemenubyli() {
    document.body.classList.remove("stopscrolling");
    if (mobileToggleMenu) mobileToggleMenu.classList.remove("show-toggle-menu");
    const bar1 = document.getElementById("burger-bar1");
    const bar2 = document.getElementById("burger-bar2");
    const bar3 = document.getElementById("burger-bar3");
    if (bar1) bar1.classList.remove("hamburger-animation1");
    if (bar2) bar2.classList.remove("hamburger-animation2");
    if (bar3) bar3.classList.remove("hamburger-animation3");
}

// ── FOOTER PUPIL EYE TRACKING ────────────
let Pupils = document.getElementsByClassName("footer-pupil");
let pupilsArr = Array.from(Pupils);

let pupilStartPoint = -5;
let pupilRangeX = 10;
let pupilRangeY = 7.5;

let mouseXStartPoint = 0;
let mouseXEndPoint = window.innerWidth;
let currentXPosition = 0;
let fracXValue = 0;
let mouseYEndPoint = window.innerHeight;
let currentYPosition = 0;
let fracYValue = 0;
let mouseXRange = mouseXEndPoint - mouseXStartPoint;

const mouseMove = (event) => {
    currentXPosition = event.clientX - mouseXStartPoint;
    fracXValue = currentXPosition / mouseXRange;
    currentYPosition = event.clientY;
    fracYValue = currentYPosition / mouseYEndPoint;

    let pupilX = pupilStartPoint + fracXValue * pupilRangeX;
    let pupilY = pupilStartPoint + fracYValue * pupilRangeY;

    pupilsArr.forEach((curPupil) => {
        curPupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
    });
};

const windowResize = () => {
    mouseXEndPoint = window.innerWidth;
    mouseYEndPoint = window.innerHeight;
    mouseXRange = mouseXEndPoint - mouseXStartPoint;
};

window.addEventListener("mousemove", mouseMove);
window.addEventListener("resize", windowResize);

// ── RIGHT-CLICK PROTECT IMAGES ───────────
document.addEventListener("contextmenu", function (e) {
    if (e.target.nodeName === "IMG") {
        e.preventDefault();
    }
}, false);

// ── CONSOLE SIGNATURE ────────────────────
console.log('%c Designed and Developed by Ahmad Bilal ', 'background-image: linear-gradient(90deg,#8000ff,#6bc5f8); color: white;font-weight:900;font-size:1rem; padding:20px;');