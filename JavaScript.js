// Slider Section 
var slides = document.querySelectorAll(".slide");
var dots = document.querySelectorAll(".dot");
var index = 0;


function prevSlide(n){
  index+=n;
  console.log("prevSlide is called");
  changeSlide();
}

function nextSlide(n){
  index+=n;
  changeSlide();
}

changeSlide();

function changeSlide(){
    
  if(index>slides.length-1)
    index=0;
  
  if(index<0)
    index=slides.length-1;
  
  
  
    for(let i=0;i<slides.length;i++){
      slides[i].style.display = "none";
      
      dots[i].classList.remove("active");
      
      
    }
    
    slides[index].style.display = "block";
    dots[index].classList.add("active");

  

}


// Counter Up Animation Section 
const counterUp = window.counterUp.default

const callback = entries => {
  entries.forEach(entry => {
    const el = entry.target
    if (entry.isIntersecting && !el.classList.contains('is-visible')) {
      counterUp(el, {
        duration: 1500,
        delay: 16,
      })
      el.classList.add('is-visible')
    }
  })
}

const IO = new IntersectionObserver(callback, { threshold: 1 })

let el = document.querySelector('.counter')
let al = document.querySelector('.counter1')
let sl = document.querySelector('.counter2')
let dl = document.querySelector('.counter3')
IO.observe(el)
IO.observe(al)
IO.observe(sl)
IO.observe(dl)