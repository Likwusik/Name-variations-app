
let number = document.querySelector("#number")
let lower = document.querySelector("#lower")
let upper = document.querySelector("#upper")
let altCase = document.querySelector("#altCase")
let reverse = document.querySelector("#reverse")
let addHeart = document.querySelector("#addHeart")


let name = document.querySelector("#your-name")

name.addEventListener("keyup", () => {
    number.textContent = getNumberOfChars(name.value)
    lower.textContent = getLower(name.value)
    upper.textContent = getUpper(name.value)
    reverse.textContent = getReverse(name.value)
    altCase.textContent = getAltCase(name.value)
    addHeart.textContent = getaddHeart(name.value)
});

function getNumberOfChars(name) {
    // return the number of characters
return name.length;
}

function getLower(name) {
    // return name all in lower case 
return name.toLowerCase();
}

function getUpper(name) {
    // return name all in upper case 
return name.toUpperCase();
}

function getReverse(name) {
    // return reversed name 
const upperCaseName = name.toUpperCase();
    // Split the name into an array of characters, reverse it, then join it back into a string
    const reversedName = upperCaseName.split('').reverse().join('');

    return reversedName.toLowerCase(-1);
}

function getAltCase(name) {
    var resultAlt = '';
    for (var i = 0; i < name.length; i++) {
        if (i % 2 === 0) {
            resultAlt += name[i].toUpperCase();
        } else {
            resultAlt += name[i].toLowerCase();
        }
    }
    return resultAlt;
}

function getaddHeart(name) {
    let nameWithHearts = '';
    for (let i = 0; i < name.length; i++) {
        nameWithHearts += name[i] + '❤️';
    }
    // Remove the extra heart at the end
    nameWithHearts = nameWithHearts.slice(0, -2);
    return nameWithHearts;
}