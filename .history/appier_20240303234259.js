/* Q: Construct a function that accepts an argument `text`, 
which can be either a string or an array of characters. 
The function should identify and 
return the most frequently occurring word from
 the input that contains at least one of the characters in: 'appier'.
 */

function mostFrequentWordWithLetterInAppier(text) {

    let words = text.split(" ");

    let wordsWithLetterInAppier = [];
    let targetText = "appier";

    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < targetText.length; j++) {
            if (words[i].toLowerCase().includes(targetText[j].toLowerCase())) {
                wordsWithLetterInAppier.push(words[i]);
                break;
            }
        }
    }

    let mostFrequentWord = null;
    let maxFrequency = 0;

    for (let i = 0; i < wordsWithLetterInAppier.length; i++) {
        let word = wordsWithLetterInAppier[i];
        let currentFrequency = 0;

        for (let j = 0; j < wordsWithLetterInAppier.length; j++) {
            if (wordsWithLetterInAppier[j] === word) {
                currentFrequency++;
            }
        }

        if (currentFrequency > maxFrequency) {
            maxFrequency = currentFrequency;
            mostFrequentWord = word;
        }
    }


    console.log(mostFrequentWord);
    return mostFrequentWord;
}

let text = "Appier  a good company. this one  good. it pool part party a perfect"; // Testing string
mostFrequentWordWithLetterInAppier(text);
