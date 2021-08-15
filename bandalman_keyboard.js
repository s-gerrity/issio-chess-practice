/* Keyboard */
class Keyboard {
    // The number of keys in each row 
    static NUM_KEYS_PER_ROW = 10;

    // The number of rows in the keyboard
    static NUM_ROWS = 4;

    // A 2D array of characters
    characters = null;

    /**
     * @constructor 
     * A Keyboard consists of Keyboard.NUMBER_OF_ROWS) rows, 
     * each with Keyboard.KEYS_PER_ROW keys.
     *  
     * @param array firstRow - an array of the first row's keys
     * @param array secondRow - an array of the second row's keys
     * @param array thirdRow - an array of the third row's keys
     * @param array fourthRow - an array of the fourth row's keys
     */
    constructor(firstRow, secondRow, thirdRow, fourthRow) {
        // Error checking
        if (firstRow.length != Keyboard.NUM_KEYS_PER_ROW ||
            secondRow.length != Keyboard.NUM_KEYS_PER_ROW ||
            thirdRow.length != Keyboard.NUM_KEYS_PER_ROW ||
            fourthRow.length != Keyboard.NUM_KEYS_PER_ROW) {
                console.log("Error constructing Keyboard: each row must have " + Keyboard.NUM_KEYS_PER_ROW + "keys");
                return null;
        }

        // Assign rows
        this.characters = {};
        this.characters[0] = firstRow;
        this.characters[1] = secondRow;
        this.characters[2] = thirdRow;
        this.characters[3] = fourthRow;
    }
  
    /**
     * @method Factory constructor for an original keyboard
     */
    static Original() {
        // Initializes a standard board
        // It's important that these are all lowercase (we could write a function to lowercase them...)
        return new Keyboard(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
                            ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
                            ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';'],
                            ['z', 'x', 'c', 'v', 'b', 'm', 'n', ',', '.', '/']);
    }


    /** 
     * @method Prints the keyboard (for debugging only)
     */
    print() {
        // Iterate over each row
        for (let i = 0; i < Keyboard.NUM_ROWS; i += 1) {  
            let charactersInRow = this.characters[i];

            // Print the row
            console.log(charactersInRow.join(' '));
        }
    }

    //*** Methods to translate strings to locations (and back)

    /**
     * @method locationForCharacter
     * Returns the location (a pair) of the character in the keyboard.
     * 
     * @param string character - a string of one character
     * @returns A pair that represents the location of the character
     */
    locationForCharacter(character) {
        if (character.length != 1) {
            console.log("Error: character string exceeds one letter: " + character);
            return null;
        }
        
        // Iterate over the entire keyboard looking for the character
        let foundIndex = -1;
        for (let i = 0; i < Keyboard.NUM_ROWS; i += 1) {
            let row = this.characters[i];
            foundIndex = row.indexOf(character.toLowerCase());
            if (foundIndex != -1) {
                // We found the character. Woo.
                return [i, foundIndex];
            }
        }

        // Something went wrong
        if (foundIndex == -1) {
            console.log("Error: couldn't find character in keyboard: " + character);
            return null;
        }
    }

    /**
     * @method locationsForString
     * Returns an array of locations (an array of pairs) in the keyboard
     * 
     * @param string string - a string
     * @returns An array of locations (pairs) that represents the string
     */
    locationsForString(string) {
        let locations = new Array();
        for (let i = 0; i < string.length; i += 1) {
            let character = string[i];
            let location = this.locationForCharacter(character);
            if (location) {
                locations.push(location);
            } else {
                return null;
            }
        }

        return locations;
    }

    /**
     * @method stringForLocations
     * Returns a string constructed by looking up the character for each location in the array
     * 
     * @param array locations - an array of locations
     * @returns The constructed string
     */
    stringForLocations(locations) {
        let string = "";
        for (let i = 0; i < locations.length; i += 1) {
            let location = locations[i];

            let row = location[0];
            let column = location[1];
            if (row < Keyboard.NUM_ROWS && column < Keyboard.NUM_KEYS_PER_ROW) {
                let character = this.characters[row][column];
                string += character;
            } else {
                console.log("Error: Location out of bounds: " + location);
                return null;
            }
        }

        return string;
    }

    //*** Methods to transform keyboards

    /**
     * @method flipVertical
     * Flips the keyboard vertically
     * 
     * @returns A new, flipped keyboard
     */
    flipVertical() {
        return new Keyboard(this.characters[3], 
                            this.characters[2], 
                            this.characters[1], 
                            this.characters[0]);
    }

    /**
     * @method flipHorizontal
     * Flips the keyboard horizontally
     * 
     * @returns A new, flipped keyboard
     */
    flipHorizontal() {
        // Use slice to avoid mutating this.characters
        return new Keyboard(this.characters[0].slice().reverse(),
                            this.characters[1].slice().reverse(),
                            this.characters[2].slice().reverse(),
                            this.characters[3].slice().reverse());
    }

    /**
     * @method shift
     * Shifts the keyboard by the given number of keys
     * 
     * @param int number - the number of keys to shift by. 
     * If negative, keys are removed from the beginning of the keyboard and added to the end.
     * If positive, keys are removed from the end of the keyboard and added to the beginning.
     * 
     * @returns A new, shifted keyboard
     */
    shift(number) {
        // Build up an array of all characters
        let allCharacters = new Array();
        for (let i = 0; i < Keyboard.NUM_ROWS; i += 1) {
            allCharacters = allCharacters.concat(this.characters[i]);
        }

        // Figure out how much to shift 
        // (use mod so we never try to shift more than the number of characters)
        let shiftNumber = Math.abs(number) % allCharacters.length;

        if (number < 0) {
            // Remove from the beginning and add to the end
            let removedCharacters = allCharacters.splice(0, shiftNumber);

            // Add the removed characters to the end of the array
            allCharacters = allCharacters.concat(removedCharacters);
        } else {
            // Remove from the end and add to the beginning
            let removedCharacters = allCharacters.splice(-shiftNumber);

            // Add the removed characters to the beginning
            allCharacters = removedCharacters.concat(allCharacters);
        }

        // TODO: Might be nice to make this a function. But this works.
        let newRows = {};
        for (let i = 0; i < Keyboard.NUM_ROWS; i += 1) {
            newRows[i] = allCharacters.slice(Keyboard.NUM_KEYS_PER_ROW * i, 
                                             Keyboard.NUM_KEYS_PER_ROW * (i + 1));
        }

        // Return a new keyboard
        return new Keyboard(newRows[0],
                            newRows[1],
                            newRows[2],
                            newRows[3]);
    }
}

//*** Free functions

/**
 * @function applyKeyboardTransformation
 * Applies the given transformation to the keyboard
 * 
 * @param string transformString - a string that describes how the keyboard should be transformed
 * @param Keyboard keyboard - the initial keyboard
 * 
 * @returns A new, transformed keyboard
 */
function applyKeyboardTransformation(transformString, keyboard) {
    // This variable will contain the latest, transformed keyboard
    let transformedKeyboard = keyboard;

    // We will modify the given transform string as we iterate over it
    let str = transformString;

    // Iterate over each character (more or less) in the string
    while (str.length > 0) {
        // "Pop" the first character off of 'str'
        let character = str[0];
        str = str.slice(1);

        // Flip Horizontal
        if (character.toLowerCase() == 'h') {
            transformedKeyboard = transformedKeyboard.flipHorizontal();
        }
        else if (character.toLowerCase() == 'v') {
            transformedKeyboard = transformedKeyboard.flipVertical();
        }
        else if (character.toLowerCase() == 's') {
            // Look for a number that follows
            let parsedInt = parseInt(str);
            if (!isNaN(parsedInt)) {
                // Found a valid number to shift by. Shift.
                transformedKeyboard = transformedKeyboard.shift(parsedInt);

                // remove the digits from the string
                let intAsString = parsedInt.toString();
                str = str.slice(intAsString.length);
            } else {
                console.log("Improper transform string: S must be followed by a number");
                return null;
            }
        }
    }

    return transformedKeyboard;
}
 
/**
 * @function transformString
 * Finds the locations for the characters in `string` in source keyboard, then returns
 * a string constructed by finding the characters at those locations in the destination
 * keyboard.
 * 
 * @param string string - the string to transform
 * @param Keyboard sourceKeyboard - the keyboard in which to find the locations for the characters in `string`
 * @param Keyboard destKeyboard - the keyboard used to find the string for the determined locations
 * 
 * @returns A new, transformed keyboard
 */

function transformString(string, sourceKeyboard, destKeyboard) {
    let locations = sourceKeyboard.locationsForString(string);
    if (locations) {
        let string = destKeyboard.stringForLocations(locations);
        return string;
    } else {
        return null;
    }
}

let originalKeyboard = Keyboard.Original();
originalKeyboard.print();

// *** Some testing
console.log('\nFlip horizontal:');
let flippedHorizKeyboard = originalKeyboard.flipHorizontal();
flippedHorizKeyboard.print();

console.log('\nFlip vertical');
let flippedVertKeyboard = originalKeyboard.flipVertical();
flippedVertKeyboard.print();

console.log('\nShift 3:');
let shiftedKeyboard = originalKeyboard.shift(3);
shiftedKeyboard.print();

// *** INPUTS *** //
let keyboardTransformString = 'S3H';
let keyboardInputString = 'HORSE';

console.log('\nTransformed: ');
let transformedKeyboard = applyKeyboardTransformation(keyboardTransformString, Keyboard.Original());
transformedKeyboard.print();

let transformedString = transformString(keyboardInputString, originalKeyboard, transformedKeyboard);
// Instructions used uppercase...so uppercase
console.log('\nTransformed string: ' + transformedString.toUpperCase());
