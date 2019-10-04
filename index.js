//////////// ////////////////////
// DOM

console.log(document);

//const title = document.getElementById("title");   // id 가 title인 객체 select
const title = document.querySelector("#title");     // id 가 title인 객체 select
const title2 = document.querySelector(".title2");   // class 가 title2인 객체 select
console.dir(title);

//////////////////////////////////
// Event 


// function handleResize(event){
//     console.log(event);
// }
// window.addEventListener("resize", handleResize);

// function handleCilck(){
//     title.style.color = red;    
// }

// title.addEventListener("click", handleCilck);

/////////////////////////////////
// 조건문

const BASE_COLOR = "rgb(52, 73, 94)"
const OTHER_COLOR = "#7f8c8d"


function handleCilck(){
    const currentColor = title.style.color;
    console.log(currentColor);
    if (currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    } 
    else{
        title.style.color = BASE_COLOR;
    }
}

function init(){
    title.style.color = BASE_COLOR;
}
title.addEventListener("click", handleCilck);
init();

//////////////////////////////////
