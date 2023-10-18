let slideBtnLeft =document.getElementById("slider-left")
let slideBtnRight =document.getElementById("slider-right")
let imgItem =document.querySelectorAll(".image-item")

console.log(imgItem.length-1)

let startSlider = 0
let endSlider = (imgItem.length-1)*100

slideBtnLeft.addEventListener("click",()=>{
    if(startSlider <  0){
        startSlider = startSlider + 100;
    }
    imgItem.forEach(element =>{
        element.style.transform = `translateX(${startSlider}%)`;
    })
})

slideBtnRight.addEventListener("click",()=>{
    if(startSlider >= -endSlider+100){
        startSlider = startSlider - 100;
    }
    imgItem.forEach(element =>{
        element.style.transform = `translateX(${startSlider}%)`;
    })
})
    

let slideBtnLeft1 =document.getElementById("b-slider-left")
let slideBtnRight1 =document.getElementById("b-slider-right")
let bookItem =document.querySelectorAll(".book-item")

console.log(bookItem.length-1)

let startSlider1 = 0
let endSlider1 = (bookItem.length-1)*100

slideBtnLeft1.addEventListener("click",()=>{
    if(startSlider1 <  0){
        startSlider1 = startSlider1 + 100;
    }
    bookItem.forEach(element =>{
        element.style.transform = `translateX(${startSlider1}%)`;
    })
})

slideBtnRight1.addEventListener("click",()=>{
    if(startSlider1 >= -endSlider1+100){
        startSlider1 = startSlider1 - 100;
    }
    bookItem.forEach(element =>{
        element.style.transform = `translateX(${startSlider1}%)`;
    })
})