

export function useTheFirstLetterCapitalized(word) {
    const firstLetterOfTheWord = word.charAt(0).toUpperCase();
    const restOfTheWord = word.slice(1);
    const result = firstLetterOfTheWord + restOfTheWord;
    const wordWithCapitalized = result;
    return wordWithCapitalized;
}