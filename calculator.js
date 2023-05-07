let inputOne = document.querySelector(".one");
let inputTwo = document.querySelector(".two");
let result = document.querySelector(".p3");
let button = document.querySelector(".add")


button.addEventListener("click", function plus() {
    let first = inputOne.value;
    let second = inputTwo.value;
    result.innerHTML = parseInt(first) + parseInt(second); 
});

let inputThree = document.querySelector(".three");
let inputFour = document.querySelector(".four");
let result1 = document.querySelector(".p6");
let you = document.querySelector(".subst")

you.addEventListener("click", function minus() {
    let third = inputThree.value;
    let forth = inputFour.value;
    result1.innerHTML = parseInt(third) - parseInt(forth); 
});

let inputFive = document.querySelector(".five");
let inputSix = document.querySelector(".six");
let result2 = document.querySelector(".p9");
let me = document.querySelector(".multiply")

me.addEventListener("click", function of() {
    let fifth = inputFive.value;
    let sixth = inputSix.value;
    result2.innerHTML = parseInt(fifth) * parseInt(sixth); 
});

let inputSeven = document.querySelector(".seven");
let inputEight = document.querySelector(".eight");
let result3 = document.querySelector(".p12");
let them = document.querySelector(".divide")

them.addEventListener("click", function sum() {
    let seventh = inputSeven.value;
    let eight = inputEight.value;
    result3.innerHTML = parseInt(seventh) / parseInt(eight); 
});