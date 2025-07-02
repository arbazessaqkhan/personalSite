document.addEventListener("DOMContentLoaded", function () {
  let dynamicElement = document.querySelector("#dynamic");
  let dynamicContent = "A Tech Dev Enthusiast";

  function typeText(index) {
    if (index < dynamicContent.length) {
      dynamicElement.textContent += dynamicContent.charAt(index);
      index++;

      if (dynamicContent[index] == " ") {
        setTimeout(function () {
          typeText(index);
        }, 500);
      } else {
        setTimeout(function () {
          typeText(index);
        }, 150);
      }
    }
  }
  typeText(0);
});

let slides = document.querySelectorAll(".slide");
let index = 0;

// Set initial slide as active
slides[index].classList.add("active");

function prevSlide() {
  goToSlide(index - 1);
}

function nextSlide() {
  goToSlide(index + 1);
}

function goToSlide(n) {
  slides[index].classList.remove("active");
  index = (n + slides.length) % slides.length; // Handle negative and overflow index
  slides[index].classList.add("active");
}

//autoplay functionality
let autoplayInterval = setInterval(nextSlide, 3000); //next slide every 3 seconds

//Pause autoplay on mouseover
document.querySelector(".slider").addEventListener("mouseover", () => {
  clearInterval(autoplayInterval);
});

// Resume autoplay on mouseout
document.querySelector(".slider").addEventListener("mouseout", () => {
  autoplayInterval = setInterval(nextSlide, 3000);
});

// btn = document.querySelector(".read_more");
// btn.addEventListener("click", () => {
//   btn.textContent = "";
//   btn.remove();
//   text = document.querySelector(".hid");
//   text.style.display = "block";
// });

// hamburger
const toggleButton = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const navOverlay = document.getElementById("nav-overlay");

function closeMenu() {
  navLinks.classList.remove("active");
  navOverlay.classList.remove("active");
  toggleButton.setAttribute("aria-expanded", "false");
}

function openMenu() {
  navLinks.classList.add("active");
  navOverlay.classList.add("active");
  toggleButton.setAttribute("aria-expanded", "true");
}

toggleButton.addEventListener("click", () => {
  if (navLinks.classList.contains("active")) {
    closeMenu();
  } else {
    openMenu();
  }
});

toggleButton.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    toggleButton.click();
  }
});

navOverlay.addEventListener("click", closeMenu);

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 991) {
      closeMenu();
    }
  });
});

//make active nav on scroll
window.onscroll = () => {
  var currentId = "";
  sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    const sectionTopPos = section.offsetTop; //top pos of cur sec

    if (scrollY + 5 >= sectionTopPos) {
      currentId = section.getAttribute("id");
      // console.log(currentId);
    }
  });

  const navLinks = document.querySelectorAll(".nav-content");
  navLinks.forEach((nav) => {
    nav.classList.remove("active");
    // console.log(currentId);
    // console.log(nav.classList[1]);
    if (nav.classList[1] == currentId) {
      // console.log(nav);
      nav.classList.add("active");
    }
  });
};
