// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    return clearstring(stringA) === clearstring(stringB);
}

function clearstring(str) {
    return str.replace(/[\w]/g, '').toLowerCase().split('').sort().join('');
}

function anagrams(stringA, stringB) {
    const Acharmap = buildCharMap(stringA);
    const Bcharmap = buildCharMap(stringB);

    if(Object.keys(Acharmap).length !== Object.keys(Bcharmap).length) {
        return false;
    }

    for (let char in Acharmap) {
        if(Acharmap[char] !== Bcharmap[char]) {
            return false;
        }
    }

    return true;
}

function buildCharMap(str) {
    const charmap = {};

    for (let char of str.replace(/[\w]/g, '').toLowerCase()) {
        charmap = charmap[char] + 1 || 1;
    }

    return charmap;
}

module.exports = anagrams;
