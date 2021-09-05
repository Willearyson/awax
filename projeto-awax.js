function abrirMenu(){
    let menuArea = document.querySelector("nav");
    if (menuArea.style.display == 'block') {
        menuArea.style.display = 'none'
    } else{
       menuArea.style.display = 'block';
    }
}

function irParaOTopo(){
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
}
function showBarScroll(){
    if(window.scrollY===0){
        document.querySelector('.scrollbutton').style.display = 'none';
    } else{
        document.querySelector('.scrollbutton').style.display = 'block';
    }
}

window.addEventListener('scroll',showBarScroll);

let tempo = 2000,
    currenteSlide = 0;
    slides = document.querySelector('#sliders .slide')
    max = slides.length;

function nextSlide(){

    console.log(slides)   
    updateMargin()
}
function start(){
    setInterval(() => {
        // troca de slide
        nextSlide()
    }, tempo);
    updateMargin()
}

window.addEventListener('load',start)

function updateMargin(){
    let slideItemWidth = document.querySelector('.slide').clientWidth;
    let novaMargin = (currenteSlide * slideItemWidth);
    document.querySelector('.slide').style.marginLeft = `-${novaMargin}px`
}


/*
let totalSlides = document.querySelector('main .slide').length;
currenteSlide = 0;

function prevSlide(){
    currenteSlide--;
    if(currenteSlide < 0 );{
    currenteSlide = totalSlides -1;
    }
    updateMargin()
}
function nextSlide(){
    currenteSlide++;
    if(currenteSlide > (totalSlides -1)){
        currenteSlide = 0;
    }
    updateMargin()
}

function updateMargin(){
    let slideItemWidth = document.querySelector('.slide').clientWidth;
    let novaMargin = (currenteSlide * slideItemWidth);
    document.querySelector('.slide').style.marginLeft = `-${novaMargin}px`
}
*/