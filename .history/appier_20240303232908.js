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
    let maximumFrequency = 0;

    for (let i = 0; i < wordsWithLetterInAppier.length; i++) {
        let currentWordFrequency = 0;

        for (let j = 0; j < wordsWithLetterInAppier.length; j++) {
            if (wordsWithLetterInAppier[j] === wordsWithLetterInAppier[i]) {
                currentWordFrequency++;
            }
        }

        if (currentWordFrequency > maximumFrequency) {
            maximumFrequency = currentWordFrequency;
            mostFrequentWord = wordsWithLetterInAppier[i];
        }
    }


    console.log(mostFrequentWord);
    return mostFrequentWord;
}

let text = "Appier is a company good company. this one good. this company it is a perfect company"; // Testing string
mostFrequentWordWithLetterInAppier(text);
