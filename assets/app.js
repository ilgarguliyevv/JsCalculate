let firstNumber = document.querySelector(".firstNumber")
let secondNumber = document.querySelector(".secondNumber")
let total = document.querySelector(".total")

let Plus = () => {
    let sum = Number(firstNumber.value) + Number(secondNumber.value)
    total.value = sum;

    if (firstNumber.value == "" || secondNumber.value == "") {
        alert("Enter number")
    }
    firstNumber.value = ""
    secondNumber.value = ""
};
let plus = document.querySelector(".plus")
plus.addEventListener("click", Plus);

let Minus = () => {
    let sum = Number(firstNumber.value) - Number(secondNumber.value)
    total.value = sum;

    if (firstNumber.value == "" || secondNumber.value == "") {
        alert("Enter number")
    }
    firstNumber.value = ""
    secondNumber.value = ""
};
let minus = document.querySelector(".minus")
minus.addEventListener("click", Minus);

let Mult = () => {
    let sum = Number(firstNumber.value) * Number(secondNumber.value)
    total.value = sum;

    if (firstNumber.value == "" || secondNumber.value == "") {
        alert("Enter number")
    }
    firstNumber.value = ""
    secondNumber.value = ""
};
let mult = document.querySelector(".mult")
mult.addEventListener("click", Mult);

let Divide = () => {
    let sum = Number(firstNumber.value) / Number(secondNumber.value)
    total.value = sum;

    if (firstNumber.value == "" || secondNumber.value == "") {
        alert("Enter number")
    }
    firstNumber.value = ""
    secondNumber.value = ""
};
let divide = document.querySelector(".divide")
divide.addEventListener("click", Divide);