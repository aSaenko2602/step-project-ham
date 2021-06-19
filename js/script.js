
// для секции Service
let elBtn = document.querySelectorAll(".list-service .tab");
for (let i = 0 ; i <= elBtn.length -1 ; i++ ){
    let el = elBtn[i];
    el.addEventListener("click",btnClickHandler);
}


function btnClickHandler(event) {
    document.querySelector(".tab.active").classList.remove("active");
    event.target.classList.add("active");
    document.querySelector(".tab-content.active").classList.remove("active");
    event.target.classList.add("active");

    const currentIndex = event.target.dataset.index;
    document.getElementById("js-tab-"+ currentIndex).classList.add("active");
}

// для секции Our Amazing Work

let elBtnWork = document.querySelectorAll(".menu .nav-menu");
for (let i = 0; i <= elBtnWork.length -1 ; i++){
    let el = elBtnWork[i];
    el.addEventListener("click" ,btnClickWorkEl)
}
function btnClickWorkEl(event) {
    document.querySelector(".nav-menu.active").classList.remove("active");
    event.target.classList.add("active");
    document.querySelector(".work-img.active").classList.remove("active");
    event.target.classList.add("active");

    const currentIndex = event.target.dataset.index;
    document.getElementById("work-img-tab-"+ currentIndex).classList.add("active");
}

// load more

let btnMore = document.querySelector(".load-more");
btnMore.addEventListener("click",addMoreEl );

function addMoreEl (){
    let content = document.querySelector(".work-img-more");
    content.classList.add("active");

    btnMore.remove();
}

// Slider

function changeSlide(direction,event) {
    const sliderBtnList = document.querySelectorAll(".slider .slider-btn");
    const slideCount = sliderBtnList.length;  // получаю 4
    const activeSlideBtn = document.querySelector(".slider .slider-btn.active");
    const slideIndex = Number(activeSlideBtn.dataset.index);

    let updatedIndex;

    switch (direction) {
        case "prev":
            updatedIndex =
                slideIndex - 1 <= 0 ? slideCount : slideIndex - 1; // проверка по длине и интексе ,
            break;
        case "next":
            updatedIndex =
                slideIndex + 1 > slideCount ? 1 : slideIndex + 1;
            break;
    }

    activeSlideBtn.classList.remove("active");
    document.getElementById("slide-" + slideIndex).classList.remove("active");  // по индексу удаляю актив

    sliderBtnList[updatedIndex -1].classList.add("active");
    document.getElementById("slide-" + updatedIndex).classList.add("active");

}

document.querySelector(".btn-arrow.prev")
    .addEventListener("click" ,() => changeSlide("prev"));

document.querySelector(".btn-arrow.next")
    .addEventListener("click" ,() =>changeSlide("next"));


// function clickBtnSlider(event) {
//     document.querySelector(".slider-btn.active").classList.remove("active");
//     event.target.classList.add("active");
//     document.querySelector("slide-content.active").classList.remove("active");
//     event.target.classList.add("active");
//
//     const currentIndex = event.target.dataset.index;
//     document.getElementById("slide-"+ currentIndex).classList.add("active");
// }
// //document.querySelector(".slider-btn").addEventListener("click" , ()=> clickBtnSlider(event));
//
// let elBtnSlider = document.querySelectorAll(".slider .slider-btn");
// for (let i = 0; i <= elBtnWork.length -1 ; i++) {
//     let el = elBtnSlider[i];
//     el.addEventListener("click" ,clickBtnSlider);
// }
