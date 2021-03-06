export class Utility {
    static getInputValue(elementId: string): string {
        const element: HTMLInputElement = <HTMLInputElement> document.getElementById(elementId)!;
        return element.value;
    }
    
    static titleCaseWord(word: string) {
        if (!word) {
            return word;
        }
        else {
            return word[0].toUpperCase() + word.substr(1).toLowerCase();
        }
    }
    
    static logger(message: string) {
        console.log(message);
        console.error(message);
    }

    static isEmptyOrSpaces(str: string): boolean {
        if (/^ *$/.test(str)) {
            // It has only spaces, or is empty
            return true;
        }
        else {
            return false;
        }
    }

    // get the new string without the empty values at the begining
    static getStringWithoutSpaces(str: string): string {
        let indexOfFirstLetter: number = 0;

        for (let i = 0; i < str.length; i++) {
            const character = str.charAt(i);
            if (character !== ' ') {
                indexOfFirstLetter = i;
              break
            }
        }
    
        str = str.substring(indexOfFirstLetter);
        return str;
    }

    // only checking if there is a @ smyblol in the string
    static isEmailAddress(str: string): boolean {
        if (str.search(`@`) == -1) {
            return false;
        }
        else {
            return true;
        }
    }

    static containWhiteSpaces(str: string): boolean {
        if (/\s/.test(str)) {
            // It has any kind of whitespace
            return true;
        }
        else {
            return false;
        }
    }
}