let sky = document.querySelector('#sky');
let rocks3 = document.querySelector('#rocks3');
let rocks2 = document.querySelector('#rocks2');
let rocks1 = document.querySelector('#rocks1');
let sectionSec = document.querySelector('.sec');
let title = document.querySelector('#title');

let section_width = sectionSec.offsetWidth; 

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    let sectionSecX = sectionSec.getBoundingClientRect();
    console.log(scroll)
    sky.style.transform = `translateY(-${scroll * 0.6}px)`;
    rocks3.style.transform = `translateY(-${scroll * 0.15}px)`;
    rocks2.style.transform = `translateY(${scroll * 0.3}px)`;
    rocks1.style.transform = `translateY(${scroll * 0}px)`;

    if(scroll / (section_width - sectionSecX.top) * 900 - 450 <= 0) {
        title.style.transform = `translateX(${scroll / (section_width - sectionSecX.top) * 900 - 450}px)`;
    }
});