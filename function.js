/** @param {string} name */
export function getNumberOfChars(name) {
    // return the number of characters in: name
return name.length;
}


/** @param {string} name */
export function getLower(name) {
    // return name all in lower case 
return name.toLowerCase();
}

/** @param {string} name */
export function getUpper(name) {
    // return name all in upper case 
return name.toUpperCase();
}

/** @param {string} name */
export function getReverse(name) {
    // return reversed name 
const upperCaseName = name.toUpperCase();
    // Split the name into an array of characters, reverse it, then join it back into a string
    const reversedName = upperCaseName.split('').reverse().join('');
    return reversedName;
}

/** @param {string} name */
export function getAltCase(name) {
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