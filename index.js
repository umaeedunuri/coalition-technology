var slides = document.querySelectorAll('.slide');
var currentSlide=0;
var slideInterval=setInterval(nextSlide,2000);

function nextSlide(){
    slides[currentslide].classList.remove('active-slide');
    currentSlide=(currentSlide+1)%slides.length;
    slides[currentSlide].classList.add('active-slide');
}