/* Keyboard */
class Keyboard {
  static WIDTH = 10;
  static HEIGHT = 4;

  // "2D array" of characters
  characters = {};

  static Original() {
      // Initializes a standard board
      let keyboard = new Keyboard();
      // It's important that these are all lowercase (we could write a function to lowercase them...)
      keyboard.assignRows(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
                          ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
                          ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';'],
                          ['z', 'x', 'c', 'v', 'b', 'm', 'n', ',', '.', '/']);
      return keyboard;
  }

  assignRows(firstRow, secondRow, thirdRow, fourthRow) {
      this.characters[0] = firstRow;
      this.characters[1] = secondRow;
      this.characters[2] = thirdRow;
      this.characters[3] = fourthRow;
  }

  // Prints the keyboard (for debugging only)
  print() {
      // Iterate over each row
      for (let i = 0; i < Keyboard.HEIGHT; i += 1) {  
          let charactersInRow = this.characters[i];

          // Print the row
          console.log(charactersInRow.join(' '));
      }
  }

  keypressForCharacter(character) {
      let foundIndex = -1;
      for (let i = 0; i < Keyboard.HEIGHT; i += 1) {
          let row = this.characters[i];
          foundIndex = row.indexOf(character.toLowerCase());
          if (foundIndex != -1) {
              return [i, foundIndex];
          }
      }

      if (foundIndex == -1) {
          console.log("Error: couldn't find character in keyboard: " + character)
          return null;
      }
  }

  keypressesForString(string) {
      let keypresses = new Array();
      for (let i = 0; i < string.length; i += 1) {
          let character = string[i];
          let keypress = this.keypressForCharacter(character);
          if (keypress) {
              keypresses.push(keypress);
          } else {
              return null;
          }
      }

      return keypresses;
  }

  stringForKeypresses(keypresses) {
      let string = "";
      for (let i = 0; i < keypresses.length; i += 1) {
          let keypress = keypresses[i];

          let row = keypress[0];
          let column = keypress[1];
          if (row < Keyboard.HEIGHT && column < Keyboard.WIDTH) {
              let character = this.characters[row][column];
              string += character;
          } else {
              // XXX could check keyboard mismatch at the beginning of the function
              console.log("Error: keyboard mismatch");
              return null;
          }
      }

      return string;
  }

  flipVertical() {
      this.assignRows(this.characters[3], 
                      this.characters[2], 
                      this.characters[1], 
                      this.characters[0]);
  }

  flipHorizontal() {
      this.assignRows(this.characters[0].reverse(),
                      this.characters[1].reverse(),
                      this.characters[2].reverse(),
                      this.characters[3].reverse());
  }

  shift(number) {
      // Build up an array of all characters
      let allCharacters = new Array();
      for (let i = 0; i < Keyboard.HEIGHT; i += 1) {
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

      // Would be nice to make this a function - e.g. assignCharacters() or something
      // But this works
      this.assignRows(allCharacters.slice(0, Keyboard.WIDTH),
                      allCharacters.slice(Keyboard.WIDTH, Keyboard.WIDTH * 2),
                      allCharacters.slice(Keyboard.WIDTH * 2, Keyboard.WIDTH * 3),
                      allCharacters.slice(Keyboard.WIDTH * 3, Keyboard.WIDTH * 4));

  }

  applyKeyboardTransformation(transformString) {
      let str = transformString;
      while (str.length > 0) {
          let character = str[0];
          str = str.slice(1);

          if (character.toLowerCase() == 'h') {
              this.flipHorizontal();
          }
          else if (character.toLowerCase() == 'v') {
              this.flipVertical();
          }
          else if (character.toLowerCase() == 's') {
              // Look for a number that follows
              let parsedInt = parseInt(str)
              if (!isNaN(parsedInt)) {
                  // Found a valid number to shift by
                  this.shift(parsedInt);

                  // remove the digits from the string
                  let intAsString = parsedInt.toString();
                  str = str.slice(intAsString.length);
              } else {
                  console.log("Improper transform string: S must be followed by a number");
              }
          }
      }
  }    
}

// Helper functions

function transformString(string, sourceKeyboard, destKeyboard) {
  let keypresses = sourceKeyboard.keypressesForString(string);
  if (keypresses) {
      let string = destKeyboard.stringForKeypresses(keypresses);
      return string;
  } else {
      return null;
  }
}

let originalKeyboard = Keyboard.Original();
originalKeyboard.print();

// console.log('\nFlip horizontal:');
// originalKeyboard.flipHorizontal();
// originalKeyboard.print();

// console.log('\nFlip vertical');
// originalKeyboard.flipVertical();
// originalKeyboard.print();

// console.log('\nShift 3:');
// originalKeyboard.shift(3);
// originalKeyboard.print();

// *** INPUTS *** //
let keyboardTransformString = 'S3H';
let keyboardInputString = 'HORSE';

console.log('\nTransformed: ');
let transformedKeyboard = Keyboard.Original();
transformedKeyboard.applyKeyboardTransformation(keyboardTransformString);
transformedKeyboard.print();

let transformedString = transformString(keyboardInputString, originalKeyboard, transformedKeyboard);
console.log('\nTransformed string: ' + transformedString);