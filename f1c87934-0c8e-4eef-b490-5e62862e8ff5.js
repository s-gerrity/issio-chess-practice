console.log("Hi Sam! Good luck with this project!");

class Key {
  x;
  y;
  character = null;

  /**
   * @constructor
   *
   * @param string x - horizontal coordinates [a - j]
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

class Keyboard {
  static CHARACTERS = ['', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  static WIDTH = 4;
  static HEIGHT = 10;

  keys = {};

  constructor() {

    // Setting vertical
    for (let i = 1; i <= Keyboard.WIDTH; i += 1) {
      const character = Keyboard.CHARACTERS[i];
      this.keys[character] = {};

      // Setting horizontal
      for (let j = 1; j <= Keyboard.HEIGHT; j += 1) {

        this.keys[character][j] = new Key(character, j);
      }
    }
  }

  print() {

    for (let i = 1; i <= Keyboard.WIDTH; i += 1) {
      const column = Keyboard.CHARACTERS[i];
      var rowString = column + ": ";

    for (let j = 1; j <= Keyboard.HEIGHT; j += 1) {
      let key = keyboard.getKey(column, j);
      let character = key.getCharacter();

      if (character == null) {
        rowString += "[ ]";
      }
      else {
        let character = key.getCharacter();
        rowString += "[" + character + "]";
      }
    }
      console.log(rowString);
    }
  }

  /**
   * @methdd getKey - returns the selected key
   * @param string x - horizontal coordinates [a - j]
   * @param number y - vertical coordinates [1 - 4]
   * @return Key - returns a key
   */
  getKey(x, y) {
    return this.keys[x][y];
  }

  /**
   * @method setCharacter - setting a character on the keyboard
   *
   * @param Piece character - character on the keyboard
   * @param string x - horizontal coordinates [a - j]
   * @param number y - vertical coordinates [1 - 4]
   */
  setCharacter(character, x, y) {
    let key = this.getKey(x, y);
    key.setCharacter(character);
    this.setKey(key, x, y);
  }

  /**
   * @method setSquare - setting a character on the keyboard
   *
   * @param Key key - key
   * @param string x - horizontal coordinates [a - j]
   * @param number y - vertical coordinates [1 - 4]
   */
  setKey(key, x, y) {
    this.keys[x][y] = key;
  }


  
}

const keyboard = new Keyboard();

keyboard.print();

