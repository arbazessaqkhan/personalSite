document.addEventListener('DOMContentLoaded', function () {
  let dynamicElement = document.querySelector('#dynamic');
  let dynamicContent = 'An Aspiring Developer';

  function typeText(index) {
    if (index < dynamicContent.length) {

      dynamicElement.textContent += dynamicContent.charAt(index);
      index++;

      if (dynamicContent[index] == ' ') {
        setTimeout(function () {
          typeText(index);
        }, 500);
      }
      else {
        setTimeout(function () {
          typeText(index);
        }, 150);
      }


    }

  }
  typeText(0)

})



let slides = document.querySelectorAll('.slide');
let index = 0;

// Set initial slide as active
slides[index].classList.add('active');

function prevSlide() {
  goToSlide(index - 1);
}

function nextSlide() {
  goToSlide(index + 1);
}

function goToSlide(n) {
  slides[index].classList.remove('active');
  index = (n + slides.length) % slides.length; // Handle negative and overflow index
  slides[index].classList.add('active');
}

// Add autoplay functionality
let autoplayInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds

// Pause autoplay on mouseover
document.querySelector('.slider').addEventListener('mouseover', () => {
  clearInterval(autoplayInterval);
});

// Resume autoplay on mouseout
document.querySelector('.slider').addEventListener('mouseout', () => {
  autoplayInterval = setInterval(nextSlide, 3000);
});


btn = document.querySelector('.read_more');
btn.addEventListener('click',()=>{
  btn.textContent = ''
  btn.remove();
  text=document.querySelector('.hid')
  text.style.display='block'
})

// hamburger
const toggleButton = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

toggleButton.addEventListener('click',()=>{
      navLinks.classList.toggle('active');
});