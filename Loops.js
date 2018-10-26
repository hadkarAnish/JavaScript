Task

Complete the vowelsAndConsonants

function in the editor below.It has one parameter, a string, , consisting of lowercase English alphabetic letters(i.e., a through z).The

function must do the following:

    First, print each vowel in on a new line.The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in .
Second, print each consonant(i.e., non - vowel) in on a new line in the same order as it appeared in .

// My code
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    var vowels = [],
        consonants = [],
        currentChar, i;
    for (currentChar = 0; currentChar < s.length; currentChar++) {
        if (s[currentChar] == 'a' || s[currentChar] == 'e' || s[currentChar] == 'i' || s[currentChar] == 'o' || s[currentChar] == 'u') {
            vowels.push(s[currentChar]);
        } else
            consonants.push(s[currentChar]);
    }
    for (i = 0; i < vowels.length; i++) {
        console.log(vowels[i]);
    }
    for (i = 0; i < consonants.length; i++) {
        console.log(consonants[i]);
    }
}

// Better code
let consonants = '';

for (let i in s.split('')) {
    if (i == 'a' ||
        i == 'e' ||
        i == 'i' ||
        i == 'o' ||
        i == 'u') {
        console.log(letter)
    } else {
        consonants += letter;
    }
}
for (let i in consonants) {
    console.log(i);
}