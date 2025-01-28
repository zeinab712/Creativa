// ======================= satrt side bar======================//
const menu_toggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');

menu_toggle.addEventListener('click', () => {
  menu_toggle.classList.toggle('is-active');
  sidebar.classList.toggle('is-active');
});

document.addEventListener('click', (event) => {

  if (!sidebar.contains(event.target) && !menu_toggle.contains(event.target)) {
    sidebar.classList.remove('is-active');
    menu_toggle.classList.remove('is-active');
  }
});
// ======================= end side bar======================//
// ======================= start progress bar======================//
document.addEventListener("scroll", () => {
  const progressBars = document.querySelectorAll(".prog span");
  progressBars.forEach((bar) => {
    const barPosition = bar.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (barPosition < windowHeight && barPosition > 0) {
      const progressValue = bar.dataset.prog;
      bar.style.width = progressValue;
    } else {
      bar.style.width = "0";
    }
  });
});
// ======================= end progress bar======================//
// ======================= Start modal image ======================//
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.getElementById("closeModal");
const images = document.querySelectorAll(".gallery .images img");
images.forEach((img) => {
    img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImage.src = img.src;
    });
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

modal.addEventListener("click", (event) => {
    if (event.target !== modalImage) {
        modal.style.display = "none";
    }
});
// ======================= end modal image======================//
// ======================= start side bar functions================//
//bullets display
const bullets = document.querySelector(".bullets");
const bullBtnYes = document.querySelector("#bull-y");
const bullBtnNo = document.querySelector("#bull-n");

window.addEventListener("load", () => {
  const savedDisplay = localStorage.getItem("bulletsDisplay");
  const savedOpacityYes = localStorage.getItem("bullBtnYesOpacity");
  const savedOpacityNo = localStorage.getItem("bullBtnNoOpacity");

  if (savedDisplay) {
    bullets.style.display = savedDisplay;
  } else {
    bullets.style.display = "block"; 
  }

  if (savedOpacityYes) {
    bullBtnYes.style.opacity = savedOpacityYes;
  } else {
    bullBtnYes.style.opacity = "1";
  }

  if (savedOpacityNo) {
    bullBtnNo.style.opacity = savedOpacityNo;
  } else {
    bullBtnNo.style.opacity = "0.7"; 
  }
});

bullBtnYes.addEventListener("click", () => {
  bullets.style.display = "block";
  bullBtnYes.style.opacity = "1"; 
  bullBtnNo.style.opacity = "0.7"; 

  localStorage.setItem("bulletsDisplay", "block");
  localStorage.setItem("bullBtnYesOpacity", "1");
  localStorage.setItem("bullBtnNoOpacity", "0.7");
});

bullBtnNo.addEventListener("click", () => {
  bullets.style.display = "none";
  bullBtnYes.style.opacity = "0.7"; 
  bullBtnNo.style.opacity = "1"; 

  localStorage.setItem("bulletsDisplay", "none");
  localStorage.setItem("bullBtnYesOpacity", "0.7");
  localStorage.setItem("bullBtnNoOpacity", "1");
});


//nav bar position
const nav = document.querySelector(".navbar");
const navUl = document.querySelector(".navbar-nav");
const navYes = document.querySelector("#nav-y");
const navNo = document.querySelector("#nav-n");

function checkScreenSize() {
  if (window.innerWidth <= 990) {
    if (nav.style.position === "relative") {
      navUl.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; 
    }
  } else {
    navUl.style.backgroundColor = "transparent";
  }
}

navYes.addEventListener("click", () => {
  nav.style.position = "fixed";
  nav.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  navUl.style.backgroundColor = "transparent";
  nav.style.width = "80%"; 
  navYes.style.opacity = "1"; 
  navNo.style.opacity = "0.7"; 

  localStorage.setItem("navPosition", "fixed");
  localStorage.setItem("navColor", "rgba(0, 0, 0, 0.5)");
  localStorage.setItem("navUlColor", "transparent");
  localStorage.setItem("navWidth", "80%");
  localStorage.setItem("navYesOpacity", "1");
  localStorage.setItem("navNoOpacity", "0.7");
});

navNo.addEventListener("click", () => {
  nav.style.position = "relative";
  nav.style.backgroundColor = "transparent";
  navUl.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; 
  nav.style.width = "100%"; 
  navYes.style.opacity = "0.7"; 
  navNo.style.opacity = "1";

  checkScreenSize();

  localStorage.setItem("navPosition", "relative");
  localStorage.setItem("navColor", "transparent");
  localStorage.setItem("navUlColor", "rgba(0, 0, 0, 0.5)");
  localStorage.setItem("navWidth", "100%");
  localStorage.setItem("navYesOpacity", "0.7");
  localStorage.setItem("navNoOpacity", "1");
});

window.addEventListener("load", () => {
  checkScreenSize();

  const savedPosition = localStorage.getItem("navPosition") || "relative";
  const savedColor = localStorage.getItem("navColor") || "transparent";
  const savedUlColor = localStorage.getItem("navUlColor") || "transparent";
  const savedWidth = localStorage.getItem("navWidth") || "100%";
  const savedYesOpacity = localStorage.getItem("navYesOpacity") || "0.7";
  const savedNoOpacity = localStorage.getItem("navNoOpacity") || "1";

  nav.style.position = savedPosition;
  nav.style.backgroundColor = savedColor;
  navUl.style.backgroundColor = savedUlColor;
  nav.style.width = savedWidth;
  navYes.style.opacity = savedYesOpacity;
  navNo.style.opacity = savedNoOpacity;

    checkScreenSize();
});
window.addEventListener("resize", checkScreenSize);


//random background 
const navigationImage = document.querySelector(".navigation img");
const randomYes = document.querySelector("#random-y");
const randomNo = document.querySelector("#random-n");

const randomImages = [
  'images/1.jpg',
  'images/2.jpg',
  'images/3.jpg',
  'images/6.jpg',
  'images/7.jpg',
  'images/8.jpg',
  'images/10.jpg',
];

let interval;

function changeImageRandomly() {
  const randomIndex = Math.floor(Math.random() * randomImages.length);
  navigationImage.src = randomImages[randomIndex];
}

randomYes.addEventListener("click", () => {
  localStorage.setItem("backgroundMode", "random");
  localStorage.setItem("randomYesOpacity", "1");
  localStorage.setItem("randomNoOpacity", "0.7");

  randomYes.style.opacity = "1";
  randomNo.style.opacity = "0.7";

  changeImageRandomly();
  interval = setInterval(changeImageRandomly, 10000);
});


randomNo.addEventListener("click", () => {
  localStorage.setItem("backgroundMode", "original");
  localStorage.setItem("randomYesOpacity", "0.7");
  localStorage.setItem("randomNoOpacity", "1");

  randomYes.style.opacity = "0.7";
  randomNo.style.opacity = "1";

  navigationImage.src = 'images/9.jpg';

  clearInterval(interval);
});

window.addEventListener("load", () => {
  const savedMode = localStorage.getItem("backgroundMode") || "original";
  const savedYesOpacity = localStorage.getItem("randomYesOpacity") || "0.7";
  const savedNoOpacity = localStorage.getItem("randomNoOpacity") || "1";

  randomYes.style.opacity = savedYesOpacity;
  randomNo.style.opacity = savedNoOpacity;

  if (savedMode === "random") {
    changeImageRandomly();
    interval = setInterval(changeImageRandomly, 10000);
  } else {
    navigationImage.src = 'images/9.jpg';
  }
});


//colors features
document.addEventListener("DOMContentLoaded", () => {
  const colors = document.querySelectorAll(".color");
  const defaultColor = "#c5baff"; 
  const savedColor = localStorage.getItem("selectedColor") || defaultColor; 

  document.documentElement.style.setProperty("--main-color", savedColor);

  colors.forEach((color) => {
    if (color.getAttribute("data-color") === savedColor) {
      color.classList.add("active"); 
      color.style.border = '5px solid white'; 
      color.style.boxShadow = '0 0 15px 5px ' + savedColor;
      color.style.opacity = '1';
    } else {
      color.style.border = '';
      color.style.boxShadow = '';
      color.style.opacity = '';
    }

    color.addEventListener("mousedown", () => {
      colors.forEach((otherColor) => {
        otherColor.classList.remove("active");
        otherColor.style.border = ''; 
        otherColor.style.boxShadow = '';
        otherColor.style.opacity = '';
      });

      const selectedColor = color.getAttribute("data-color");
      document.documentElement.style.setProperty("--main-color", selectedColor);

      color.classList.add("active");
      color.style.border = '5px solid white'; 
      color.style.boxShadow = '0 0 15px 5px ' + selectedColor;
      color.style.opacity = '1'; 

      localStorage.setItem("selectedColor", selectedColor);
    });
  });
});


// Reset button
const resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", () => {
  localStorage.setItem("backgroundMode", "original");
  localStorage.setItem("randomYesOpacity", "0.7");
  localStorage.setItem("randomNoOpacity", "1");
  localStorage.setItem("bulletsDisplay", "block");
  localStorage.setItem("bullBtnYesOpacity", "1");
  localStorage.setItem("bullBtnNoOpacity", "0.7");
  localStorage.setItem("navPosition", "relative");
  localStorage.setItem("navColor", "transparent");
  localStorage.setItem("navWidth", "100%");
  localStorage.setItem("navYesOpacity", "0.7");
  localStorage.setItem("navNoOpacity", "1");
  localStorage.setItem("selectedColor", "#c5baff"); 

  navigationImage.src = 'images/9.jpg';
  randomYes.style.opacity = "0.7";
  randomNo.style.opacity = "1";
  clearInterval(interval);

  bullets.style.display = "block";
  bullBtnYes.style.opacity = "1";
  bullBtnNo.style.opacity = "0.7";

  nav.style.position = "relative";
  nav.style.backgroundColor = "transparent";
  nav.style.width = "100%";
  navYes.style.opacity = "0.7";
  navNo.style.opacity = "1";

  document.documentElement.style.setProperty("--main-color", "#c5baff");

  document.querySelectorAll(".color").forEach((color) => {
    color.classList.remove("active");
    color.style.border = '';
    color.style.boxShadow = '';
    color.style.opacity = '';
  });

  const defaultColorElement = Array.from(document.querySelectorAll(".color")).find(
    (color) => color.getAttribute("data-color") === "#c5baff"
  );

  if (defaultColorElement) {
    defaultColorElement.classList.add("active"); 
    defaultColorElement.style.border = '5px solid white'; 
    defaultColorElement.style.boxShadow = '0 0 15px 5px var(--main-color)';
    defaultColorElement.style.opacity = '1'; 

    document.documentElement.style.setProperty("--main-color", "#c5baff");

    localStorage.setItem("selectedColor", "#c5baff");
  }
});
// ======================= end side bar functions================//
