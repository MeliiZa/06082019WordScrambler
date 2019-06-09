"use strict";

// Create a function that reverses a word
let x = "yo!"
function reverseWord(word){
    let wordArr = [];
    for (let i = word.length-1; i>0; i--){
      wordArr.push(word[i]);
    }
    return wordArr.join('');
}
// Create a function that takes an array of words and returns a new array of the
 // words with each word reversed.
function reverseWordArray(words){
    return words.map(reverseWord);
}
// Create a function that returns a random word from an array
function randomword(words){
    return words [Math.floor(Math.random() * words.length)];
}

const words =["strawberry", "stitch","indecipherable", "donut"];
const reverseWords = reverseWordArray(words);
// Create an array of words and save it to a variable. Using your functions create
// a second array of reversed words.

// We could use the two arrays we've created to select a random word to show the user
// and check their guess. How could we do that? Is there a better way?


// ////////////////////////////////////////////////////////////////////////////

// Create a function that takes an array of words and returns a map with the keys
// as the reversed word and the values as the original word.



// Create a function that takes two strings, `guess` and `word` and a map, like
// the one you created above. If the first string is in the map, return the word
// if not, console log "Sorry, incorrect. The word was ..." and include word.


// ////////////////////////////////////////////////////////////////////////////
// FURTHER STUDY

// Create a function that scrambles a word. Use whatever method you like to
// rearrange the letters.



// Create a function that takes an array of words and returns a map with the
// scrambled words as the keys and the original word as the values.
