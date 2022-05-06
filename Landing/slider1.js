const slider =document.querySelector("#slider");
let sections= document.querySelectorAll(".contenedor-zapatilla");
let sectionLast = sections[sections.length - 1];
const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");
slider.insertAdjacentElement("afterbegin", sectionLast);

function next(){
    let sectionFirst= document.querySelectorAll(".contenedor-zapatilla")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "margin-left .5s ease";
    setTimeout(function(){
        slider.style.marginLeft= "-100%";
        slider.style.transition="none";
        slider.insertAdjacentElement("beforeend",sectionFirst);
    },500)
    
}

function back(){
    let sectionLast2 = document.querySelectorAll(".contenedor-zapatilla")[document.querySelectorAll(".contenedor-zapatilla").length-1];
    slider.style.marginLeft = "0%";
    slider.style.transition="margin-left .5s ease";
    setTimeout(function(){
        slider.style.transition= "none"
        slider.style.marginLeft = "-100%"
        slider.insertAdjacentElement("afterbegin", sectionLast2);
    }, 500)

}
setInterval(function(){
    next();
}, 7000)