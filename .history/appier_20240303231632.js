/* Q: Construct a function that accepts an argument `text`, 
which can be either a string or an array of characters. 
The function should identify and 
return the most frequently occurring word from
 the input that contains at least one of the characters in: 'appier'.
 */

 function mostFrequentWordWithLetterInAppier() {
    let text = "Appier is a good company. This company is not like any other company.";

    // Split the text into an array of words
    let words = text.split(/\s+/);

    let wordsWithLetterInAppier = [];
    let targetText = "appier";

    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < targetText.length; j++) {
            // Make the comparison case-insensitive
            if (words[i].toLowerCase().includes(targetText[j].toLowerCase())) {
                wordsWithLetterInAppier.push(words[i]);
                break;
            }
        }
    }

    let mostFrequentWord = null;
    let maxFrequency = 0;

    for (let i = 0; i < wordsWithLetterInAppier.length; i++) {
        let currentWord = wordsWithLetterInAppier[i];
        let currentFrequency = 1;

        for (let j = i + 1; j < wordsWithLetterInAppier.length; j++) {
            if (currentWord === wordsWithLetterInAppier[j]) {
                currentFrequency++;
            }
        }

        if (currentFrequency > maxFrequency) {
            maxFrequency = currentFrequency;
            mostFrequentWord = currentWord;
        }
    }

    console.log(mostFrequentWord);
    return mostFrequentWord;
}

mostFrequentWordWithLetterInAppier();
