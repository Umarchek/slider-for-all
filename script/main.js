const next = document.querySelector('#next_btn'),
    prev = document.querySelector('#prev_btn'),
    slides = document.querySelectorAll('.slide'),
    dot = document.querySelectorAll('.dot');


console.log(dot);

let index = 0;

const activeSlide = n => {
    for (slide of slides) {
        slide.classList.remove('active');
    }
    slide[n].classList.add('active');
}

const nextSlide = () => {
    if (index == slides.length - 1) {
        index = 0;
        activeSlide(index);
    } else {
        index++;
        activeSlide(index);
    }
}


const prevSlide = () => {
    if (index == 0) {
        index = slides.length - 1;
        activeSlide(index);
    } else {
        index--;
        activeSlide(index);
    }
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);