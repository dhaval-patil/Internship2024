

const navLinks = document.querySelectorAll('.nav_item');
// Function for smooth Scrolling
function scrollToSection(event) {
  event.preventDefault(); 

  const targetSection = event.target.getAttribute('href');
  const targetElement = document.querySelector(targetSection);

  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
}

navLinks.forEach(link => {
  link.addEventListener('click', scrollToSection);
});


// mousemove home img

document.addEventListener('mousemove', move);
function move(e){
  this.querySelectorAll('.move').forEach(layer =>{
    const speed = layer.getAttribute('data-speed')

    const x = (window.innerWidth - e.pageX*speed)/120
    const y = (window.innerWidth - e.pageY*speed)/120

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`

  })
}




gsap.from('.navbar .nav_item', {opacity: 0, duration: 1, delay: 2.1, y:30, stagger: 0.2})

gsap.from('.title', {opacity: 0, duration: 1, delay: 1.6, y:30})
gsap.from('.description', {opacity: 0, duration: 1, delay: 1.8, y:30})
gsap.from('.btn', {opacity: 0, duration: 1, delay: 2.1, y:30})
gsap.from('.image', {opacity: 0, duration: 1, delay: 2.6, y:30})
