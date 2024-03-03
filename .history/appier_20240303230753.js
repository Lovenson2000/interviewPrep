/* Q: Construct a function that accepts an argument `text`, 
which can be either a string or an array of characters. 
The function should identify and 
return the most frequently occurring word from
 the input that contains at least one of the characters in: 'appier'.
 */

function mostFrequentWordWithLetterInAppier () {

    let text = "Appier is a good company to work at as a student. This company is not like any other company";

    let wordsWithLetterInAppier = [];

    let targetText = "appier"; 
    for(let i = 0; i < text.length; i++) {

        for ( let j = 0; j < i.length; j++) {
            if( text[i].includes(targetText[j])) {
                wordsWithLetterInAppier.push(text[i]);
            }
        }
    }
    let mostFrequentWord;
    
    for( let k = 0; k < wordsWithLetterInAppier.length; k++) {


    }
}