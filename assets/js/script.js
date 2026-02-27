// ── SPLASH SCREEN ────────────────────────
window.addEventListener("load", function () {
    var splash = document.getElementById("splash-screen");
    if (splash) {
        // Pace variation: randomly toggle fast/normal to make rings breathe
        var paceTimer = null;
        function schedulePaceChange() {
            var delay = 600 + Math.random() * 900; // 0.6s–1.5s
            paceTimer = setTimeout(function () {
                if (Math.random() > 0.45) {
                    splash.classList.add("pace-fast");
                    splash.classList.remove("pace-normal");
                } else {
                    splash.classList.remove("pace-fast");
                    splash.classList.add("pace-normal");
                }
                schedulePaceChange();
            }, delay);
        }
        schedulePaceChange();

        setTimeout(function () {
            clearTimeout(paceTimer);
            splash.classList.add("splash-fade-out");
            setTimeout(function () {
                splash.style.display = "none";
                var hey = document.querySelector('.hey');
                if (hey) hey.classList.add('popup');
            }, 600);
        }, 2600);
    }
});
// ── SPLASH SCREEN END ─────────────────────

// switch for setting
function settingtoggle() {
  document.getElementById("setting-container").classList.toggle('settingactivate');
  document.getElementById("visualmodetogglebuttoncontainer").classList.toggle('visualmodeshow');
}

function visualmode() {
  document.body.classList.toggle("light-mode");
  var elements = document.querySelectorAll(".needtobeinvert");
  elements.forEach(function (element) {
    element.classList.toggle("invertapplied");
  });
  
  // Update icon based on current theme
  const icon = document.getElementById("theme-toggle-icon");
  if (icon) {
    icon.textContent = document.body.classList.contains("light-mode") ? "🌙" : "☀️";
  }
  
  // Save preference to localStorage
  localStorage.setItem("theme", document.body.classList.contains("light-mode") ? "light" : "dark");
}

function scrollToActiveMenuItem() {
  const activeMenuItem = document.querySelector('.mobile-navbar-tabs-li.activeThismobiletab');
  if (activeMenuItem) {
      setTimeout(() => {
          activeMenuItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 300); // Delay to allow menu opening animation to complete
  }
}

let emptyArea = document.getElementById("emptyarea");
let mobileTogglemenu = document.getElementById("mobiletogglemenu");
// toggle menu by clicking on hamburger
function hamburgerMenu() {
  document.body.classList.toggle("stopscrolling");
  document.getElementById("mobiletogglemenu").classList.toggle("show-toggle-menu");
  document.getElementById("burger-bar1").classList.toggle("hamburger-animation1");
  document.getElementById("burger-bar2").classList.toggle("hamburger-animation2");
  document.getElementById("burger-bar3").classList.toggle("hamburger-animation3");
  if (mobileTogglemenu.classList.contains('show-toggle-menu')) {
    scrollToActiveMenuItem();
}
}
// close mobile toggle menu by clicking on LI
function hidemenubyli() {
  document.body.classList.toggle("stopscrolling");
  document.getElementById("mobiletogglemenu").classList.remove("show-toggle-menu");
  document.getElementById("burger-bar1").classList.remove("hamburger-animation1");
  document.getElementById("burger-bar2").classList.remove("hamburger-animation2");
  document.getElementById("burger-bar3").classList.remove("hamburger-animation3");
}

const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.navbar .navbar-tabs .navbar-tabs-ul li');
const mobilenavLi = document.querySelectorAll('.mobiletogglemenu .mobile-navbar-tabs-ul li');

window.addEventListener('scroll', () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= (sectionTop - 200)) {
      current = section.getAttribute('id');
    }
  })

  mobilenavLi.forEach(li => {
    li.classList.remove('activeThismobiletab');
    if (li.classList.contains(current)) {
      li.classList.add('activeThismobiletab')
    }
  })
  navLi.forEach(li => {
    li.classList.remove('activeThistab');
    if (li.classList.contains(current)) {
      li.classList.add('activeThistab')
    }
  })
})
console.log('%c Designed and Developed by Ahmad Bilal ', 'background-image: linear-gradient(90deg,#8000ff,#6bc5f8); color: white;font-weight:900;font-size:1rem; padding:20px;');



let mybutton = document.getElementById("backtotopbutton");
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    mybutton.style.display = "block";
  }
  else {
    mybutton.style.display = "none";

  }
}

function scrolltoTopfunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// document.addEventListener("contextmenu", function (e){
//   e.preventDefault();
// }, false);

document.addEventListener("contextmenu", function (e) {
  // Only block right-click on the profile picture, not project images
  if (e.target.nodeName === "IMG") {
    const isProfilePic = e.target.closest('.dp') !== null;
    const isNavAvatar  = e.target.id === "nav-avatar";
    const isFooterAv   = e.target.closest('.footer-avatar-container') !== null;
    if (isProfilePic || isNavAvatar || isFooterAv) {
      e.preventDefault();
    }
    // Project card images, skill logos, cert logos → context menu allowed
  }
}, false);




let Pupils = document.getElementsByClassName('footer-pupil');
let pupilsArr = Array.from(Pupils);

let pupilStartPoint = -5;
let pupilRangeX = 10;
let pupilRangeY = 7.5;

// mouse X 
let mouseXStartPoint = 0;
let mouseXEndPoint = window.innerWidth;
let currentXPosition = 0;
let fracXValue = 0;


// mouse Y position 
let mouseYEndPoint = window.innerHeight;
let currentYPosition = 0;
let fracYValue = 0;

let mouseXRange = mouseXEndPoint - mouseXStartPoint;

const mouseMove = (event) => {
  currentXPosition = event.clientX - mouseXStartPoint;
  fracXValue = currentXPosition / mouseXRange;

  currentYPosition = event.clientY;
  fracYValue = currentYPosition / mouseYEndPoint;

  // footer
  let pupilXCurrrentPosition = pupilStartPoint + (fracXValue * pupilRangeX);
  let pupilYCurrrentPosition = pupilStartPoint + (fracYValue * pupilRangeY);

  // footer
  pupilsArr.forEach((curPupil) => {
    curPupil.style.transform = `translate(${pupilXCurrrentPosition}px, ${pupilYCurrrentPosition}px)`;
  })

}

const windowResize = (event) => {
  mouseXEndPoint = window.innerWidth;
  mouseYEndPoint = window.innerHeight;
  mouseXRange = mouseXEndPoint - mouseXStartPoint;
}


window.addEventListener('mousemove', mouseMove);
window.addEventListener('resize', windowResize);

(function() {
  const savedTheme = localStorage.getItem("theme");
  const icon = document.getElementById("theme-toggle-icon");
  if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    if (icon) icon.textContent = "🌙";
  } else {
    if (icon) icon.textContent = "☀️";
  }
})();

/* ============================================================
   ADD THIS CODE to the bottom of assets/js/script.js
   
   Uses IntersectionObserver to watch the Experience section.
   When the section's HEADING enters the viewport, it adds
   the class "timeline-visible" which fades the vertical line in.
   This way the line is never visible before the heading is seen.
   ============================================================ */

(function () {
    var experienceSection = document.getElementById('experience');
    if (!experienceSection) return;

    var observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    experienceSection.classList.add('timeline-visible');
                    observer.disconnect();
                }
            });
        },
        {
            /* Fire when the Experience HEADING itself enters the screen.
               rootMargin '0px 0px 0px 0px' means: trigger as soon as
               ANY part of #experience enters the viewport from below.
               The heading is at the top of #experience so this fires
               exactly when the heading scrolls into view. */
            rootMargin: '0px 0px 0px 0px',
            threshold: 0
        }
    );

    observer.observe(experienceSection);
})();

/* ============================================================
   PASTE at bottom of assets/js/script.js
   (Remove any previous avatar sticky code first)

   Creates a fixed avatar beside the theme toggle button.
   Eyes track the cursor. Hides when footer is in view
   so the original footer avatar takes over seamlessly.
   ============================================================ */

(function () {
    var footerAvatarContainer = document.querySelector('.footer-avatar-container');
    var footerEl = document.getElementById('footer');
    if (!footerAvatarContainer || !footerEl) return;

    /* Build sticky avatar */
    var stickyAvatar = document.createElement('div');
    stickyAvatar.classList.add('footer-avatar-sticky');
    stickyAvatar.innerHTML = [
        '<img src="assets/images/footer-avatar-ahmad.png"',
        '     alt="Ahmad" class="footer-avatar-img" />',
        '<div class="footer-avatar-face">',
        '  <div class="footer-avatar-eye footer-left-eye">',
        '    <div class="footer-pupil" id="sticky-pupil-left"></div>',
        '  </div>',
        '  <div class="footer-avatar-eye footer-right-eye">',
        '    <div class="footer-pupil" id="sticky-pupil-right"></div>',
        '  </div>',
        '</div>'
    ].join('');
    document.body.appendChild(stickyAvatar);

    var stickyPupils = stickyAvatar.querySelectorAll('.footer-pupil');

    /* 
       Eye tracking: calculate direction FROM the avatar's eye center
       TOWARD the cursor, then move pupil in that direction.
       
       Max pupil travel range (in px) — same as original
    */
    var maxX = 5;
    var maxY = 4;

    window.addEventListener('mousemove', function (e) {
        /* Get avatar face center position on screen */
        var avatarFace = stickyAvatar.querySelector('.footer-avatar-face');
        if (!avatarFace) return;

        var faceRect = avatarFace.getBoundingClientRect();
        var faceCenterX = faceRect.left + faceRect.width / 2;
        var faceCenterY = faceRect.top + faceRect.height / 2;

        /* Vector from face center to cursor */
        var dx = e.clientX - faceCenterX;
        var dy = e.clientY - faceCenterY;

        /* Normalize to get direction, then scale to max travel range */
        var distance = Math.sqrt(dx * dx + dy * dy);
        if (distance === 0) return;

        /* Cap the travel — pupils shouldn't move more than maxX/maxY px */
        var px = (dx / distance) * Math.min(distance / 30, maxX);
        var py = (dy / distance) * Math.min(distance / 30, maxY);

        stickyPupils.forEach(function (p) {
            p.style.transform = 'translate(' + px + 'px, ' + py + 'px)';
        });
    });

    /* Dock/undock */
    function checkDock() {
        var footerTop = footerEl.getBoundingClientRect().top;
        if (footerTop <= window.innerHeight) {
            stickyAvatar.classList.add('hidden');
            footerAvatarContainer.style.opacity = '1';
        } else {
            stickyAvatar.classList.remove('hidden');
            footerAvatarContainer.style.opacity = '0';
        }
    }

    window.addEventListener('scroll', checkDock, { passive: true });
    checkDock();
})();