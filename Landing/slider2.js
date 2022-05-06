const sliderRun = document.querySelector("#slider-run");
const sectionsRun = document.querySelectorAll("#section-run");
const sectionLastRun = sectionsRun[sectionsRun.length-1];
const leftRun = document.querySelector("#btnLeft");
const rightRun = document.querySelector("#btnRight");

sliderRun.insertAdjacentElement("afterbegin",sectionLastRun);
// funcion para que el primer contenedor se vaya al ultimo pulsando el boton right
function nextRun() {
    let firstRun = document.querySelectorAll("#section-run")[0]; 
    sliderRun.style.marginLeft ="-200%";
    sliderRun.style.transition = "margin-left 1s"
    setTimeout(function() {
    sliderRun.style.marginLeft = "-100%";
    sliderRun.style.transition = "none"
    sliderRun.insertAdjacentElement("beforeend",firstRun)
},1000)
}
function backRun(){
    let lastRun = document.querySelectorAll("#section-run")[document.querySelectorAll("#section-run").length-1];
    sliderRun.style.marginLeft ="0%"
    sliderRun.style.transition = "margin-left 1s"
    setTimeout(function(){
        sliderRun.style.marginLeft = "-100%";
        sliderRun.style.transition = "none";
        sliderRun.insertAdjacentElement("afterbegin",lastRun);
    },1000)
}