// GUID f1c87934-0c8e-4eef-b490-5e62862e8ff5

// Beyond 12 Interview Project
// Create a program in your language of choice that takes an input string and a keyboard
// transformation string. Use the keyboard transformation string to transform the original simple
// keyboard into a transformed keyboard, and use the mapping to transform the input string and
// output the result. For example, an input string of HORSE with a transformation string of S3H
// should output S9RHT.


/**
 * Class for Keys on the Keyboard that hold the characters
 */
class Key {
  x;
  y;
  character = null;


  /**
   * @constructor
   *
   * @param number x - horizontal coordinates [1 - 10]
   * @param number y - vertical coordinates [1 - 4]
   */
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }


  /**
   * @method setCharacter
   *
   * @param Character character - character on the key
   */
  setCharacter(character) {
    this.character = character;
  }


  /**
   * @method getCharacter
   *
   * @return Character|null
   */
  getCharacter() {
    return this.character;
  }

}


/**
 * Class for Keyboard that holds the Keys with characters
 */
class Keyboard {
  static ROWS = ['', '1', '2', '3', '4'];
  static WIDTH = 10;
  static HEIGHT = 4;

  constructor() {

    let defaultCharacters = new Array();

    defaultCharacters[0] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    defaultCharacters[1] = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
    defaultCharacters[2] = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';'];
    defaultCharacters[3] = ['Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/'];

  }


  /**
   * @method getKey - returns the selected key
   * @param number x - horizontal coordinates [1 - 10]
   * @param number y - vertical coordinates [1 - 4]
   * @return Key - returns a key
   */
  getKey(x, y) {
    return this.keys[x][y];
  }


  /**
   * @method setCharacter - setting a character on the keyboard
   *
   * @param Character character - character on the keyboard
   * @param number x - horizontal coordinates [1 - 10]
   * @param number y - vertical coordinates [1 - 4]
   */
  setCharacter(character, x, y) {
    let key = this.getKey(x, y);
    key.setCharacter(character);
    this.setKey(key, x, y);
  }


  /**
   * @method setKey - setting a character on the keyboard
   *
   * @param Key key - key
   * @param number x - horizontal coordinates [1 - 10]
   * @param number y - vertical coordinates [1 - 4]
   */
  setKey(key, x, y) {
    this.keys[x][y] = key;
  }
}


/**
 * Class for flipped keyboards
 */
class Flipped {

  /**
   * @method horizontalFlip - takes the default string and returns the string with 
   * the keyboard horizontally flipped. Ex: 'HORSE' returns 'S9RHT'.
   */

  constructor() {
    let reverseLetters = new Array();
    reverseLetters[0] = Keyboard.defaultCharacters[0].reverse();
    reverseLetters[1] = Keyboard.defaultCharacters[1].reverse();
    reverseLetters[2] = Keyboard.defaultCharacters[2].reverse();
    reverseLetters[3] = Keyboard.defaultCharacters[3].reverse();

  }
  
  /**
   * @method getIndexOfAllItems - takes an input and gets the indices of each character
   * from a 2D array and collect into a new 2D array
   * @param {*} string 
   * @returns array
   */
  getIndexOfAllItems(string) {
    let arrOfIndices = [];

    for (let item of string) {

      for (let i = 0; i < Keyboard.defaultCharacters.length; i++) {
        let index = Keyboard.defaultCharacters[i].indexOf(item);

        if (index > -1) {
          arrOfIndices.push([i, index]);
        }
      }
    }
    return arrOfIndices;
  }


  /**
   * @method horizonatalFlip - takes in an 2D array of a strings' indices and
   * returns the characters at the indices from a flipped keyboard
   * @param {*} arr 
   * @returns string
   */

  horizonatalFlip(arr) {
    let horizontalToDefaultArr = [];

    for (let item of arr) {
      let row = item[0];
      let column = item[1];
      let horiz = [reverseLetters[row][column]];
      horizontalToDefaultArr.push(horiz);
    }
    let arrToStr = horizontalToDefaultArr.join();
    return arrToStr.replaceAll(',', '');
  }
}


const keyboard = new Keyboard();

