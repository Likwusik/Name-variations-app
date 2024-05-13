import {getNumberOfChars, getLower, getUpper, getReverse, getAltCase} from "./function.js"

let number = document.querySelector("#number")
let lower = document.querySelector("#lower")
let upper = document.querySelector("#upper")
let altCase = document.querySelector("#altCase")
let reverse = document.querySelector("#reverse")

let name = document.querySelector("#your-name")

name.addEventListener("keyup", () => {
    number.textContent = getNumberOfChars(name.value)
    lower.textContent = getLower(name.value)
    upper.textContent = getUpper(name.value)
    reverse.textContent = getReverse(name.value)
    altCase.textContent = getAltCase(name.value)
});
