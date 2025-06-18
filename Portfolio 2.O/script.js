var typed = new Typed(".profession",{
    strings:["Web Developer","Android App Developer"],
    typeSpeed:100,
    BackSpeed:150,
    loop:true
})
const myCarouselElement = document.querySelector('#carouselExample')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})