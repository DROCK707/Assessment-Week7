
const addToZero = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let num1 = arr[i]
        for (let j = 0; j < arr.length; j++) {
            let num2 = arr[j]
            if (num1 + num2 === 0) {
                return console.log("true")
            }
        }
    } return console.log("false")
}

// RUNTIME IS = O(n^2)
// Space complexity is = O(1)

console.log("=======================")

console.log("Add to Zero results")



addToZero([1]);
// -> False

addToZero([1, 2, 3]);
// -> False

addToZero([1, 2, 3, -2]);
// -> True

addToZero([1, 4, 3, -2, 5, 3, -5]);
console.log("=======================")

console.log("Has Unique Chars results")




const hasUniqueChars = (str) => {
    let charSet = new Set(str)
    if (charSet.size === str.length) {
        console.log("true")
    } else {
        console.log("false")
    }
}


// RUNTIME IS = O(n)
// Space complexity is = O(n)


hasUniqueChars("Monday");
// -> True

hasUniqueChars("Moonday");
// -> False

hasUniqueChars("aaaaa");

hasUniqueChars("abcdefghijklmnopqrstuvwxyz0123456789");


console.log("=======================")

console.log("Is Pangram results")


const isPangram = (str) => {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let compare = []
    str = str.toLowerCase()
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            if (str[i] === alphabet[j]) {
                compare.push(str[i])
            }
        }
    }
    let cleanCompare = new Set(compare)
    if (cleanCompare.size === alphabet.length) {
        console.log("true")
    } else {
        console.log("false")
    }
}

// RUNTIME IS = O(n)
// Space complexity is = O(n)



isPangram("The quick brown fox jumps over the lazy dog!");
// -> True

isPangram("I like cats, but not mice");
// -> False

isPangram("abcdefghijklmnopqrstuvwxyz");

isPangram("abcdefghijklmnopqrstuvwxyz0123456789")



console.log("=======================")

const findLongestWord = (arr) => {
    let longestStr = ''
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longestStr.length) {
            longestStr = arr[i]
        }
    } return console.log(longestStr, "is", longestStr.length, "characters long")
}

// RUNTIME IS = O(n)
// Space complexity is = O(1)



findLongestWord(["hi", "hello", 'dog', 'alphabet', 'Chevrolet', 'car', 'Johnny', 'Bob']);
// -> 5

console.log("=======================")
