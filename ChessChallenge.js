/**
 * @name ISSIO Solution – Chess board/piece movements Coding Challenge.
 * @package Chess Coding Challenge
 *
 * @description
 *
 * Chess is a very popular game, and almost everybody knows at least the basic moves of
 * pieces on the board. You don’t have to be a grandmaster to be able to code in this challenge.
 *
 * All we are doing is just implementing the moves of two pieces: Bishop and Rook.
 *
 * Bishops can move diagonally on the board in any direction. Rooks can move only vertically
 * or only horizontally.
 *
 * You can review the rules and the moves here: https://en.wikipedia.org/wiki/Chess#Movement
 *
 * You will be provided with the sample code that creates the table and sets up some pieces
 * (black and white) as shown on the diagram:
 *
 * Your goal is to implement the move of the Bishop (E3) and the Rook (E6). For example:
 * > board.makeMove(['c', 3], ['e', 1])
 *
 * You take a piece in the square C3 and try to move it to E1. If the chess piece from C3 square
 * can make a successful move to E1, the method will return true. In the move is illegal, it should
 * indicate so. You will have to take into consideration all legal and illegal moves.
 *
 * Feel free to adjust all of the classes and/or adding additional methods.
 *
 * You need to document your code and cover the edge cases, which are listed at the end of the
 * “ChessChallenge.js” file. You should not spend more than 1-2 hours on the exercise.
 *
 * Your performance will be measured on your ability to work with the existing code, follow the
 * instructions, understanding the principles and concepts of Object-Oriented Programming.
 *
 * @author Issio Solutions
 * @copyright Copyright (c) 2020, Issio Solutions, Inc
 */


/**
 * @class Square
 * @description - Contains all the logic and the data of the single squre
 * Also contains the chess piece
 */
class Square {
  x;
  y;
  color;
  piece = null;

  /**
   * @constructor
   *
   * @param string x - horizontal coordinates [a - h]
   * @param number y - vertical coordinates [1 - 8]
   * @param string color - light/dark
   */
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
  }

  /**
   * @method setPiece
   *
   * @param Piece piece - chess piece on the square
   */
  setPiece(piece) {
    this.piece = piece;
  }

  /**
   * @method getPiece
   *
   * @return Piece|null
   */
  getPiece() {
    return this.piece;
  }
}

/**
 * @class Board
 * @description - Main Board setup and logic including the moves
 */
// ********************************************************************************************
class Board {
  static LETTERS = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  static WIDTH = 8;
  static HEIGHT = 8;

  // squares grid in the format square = {}{}, so it could be easily
  // accessed as squares['a'][3];
  squares = {};

  /**
   * @constructor
   */
  constructor() {
    let flag = true;

    // Setting vertical
    for (let i = 1; i <= Board.WIDTH; i += 1) {
      const letter = Board.LETTERS[i];
      this.squares[letter] = {};

      // Setting horizontal
      for (let j = 1; j <= Board.HEIGHT; j += 1) {
        const color = flag ? 'dark' : 'light';

        this.squares[letter][j] = new Square(letter, j, color);
        flag = !flag;
      }
    }
  }

  print() {
    let letters = Board.LETTERS;

    for (let i = Board.HEIGHT; i > 0; i -= 1) {
      let rowString = i + ": ";

      for (let j = 1; j <= Board.WIDTH; j += 1) {
        let letter = letters[j];
        let square = board.getSquare(letter, i);
        let piece = square.getPiece();

        if (piece == null) {
          rowString += "[ ]";
        }
        else {
          let firstLetterOfPiece = piece.type[0];
          rowString += "[" + firstLetterOfPiece + "]";
        }
      }
      console.log(rowString);
    }
  }

  /**
   * @methdd getSquare - returns the selected square
   * @param string x - horizontal coordinates [a - h]
   * @param number y - vertical coordinates [1 - 8]
   * @return Square - returns a square
   */
  getSquare(x, y) {
    return this.squares[x][y];
  }

  /**
   * @method setPiece - setting a chess piece on the board
   *
   * @param Piece piece - chess piece on the board
   * @param string x - horizontal coordinates [a - h]
   * @param number y - vertical coordinates [1 - 8]
   */
  setPiece(piece, x, y) {
    let square = this.getSquare(x, y);
    square.setPiece(piece);
    this.setSquare(square, x, y);
  }

  /**
   * @method setSquare - setting a piece on the board
   *
   * @param Square square - Square
   * @param string x - horizontal coordinates [a - h]
   * @param number y - vertical coordinates [1 - 8]
   */
  setSquare(square, x, y) {
    this.squares[x][y] = square;
  }

  /**
   * @method makeMove - The implementation of the move of the piece on the board
   * picking the piece from the starting square (array), and moving to the
   * ending square (array).
   *
   * @param Array start - starting square [x, y]
   * @param Array end - finishing square [x, y]
   * @return {*}
   */

  makeMove(start, end) {
    // Collects all squares in a move, checks if pieces are on the squares in the move and if they're legal.

    // Find the piece making the move and execute the pieces move.
    let squareStart = this.getSquare(start[0], start[1]);
    // console.log(squareStart, "squareStart");
    let pieceInPlay = squareStart.getPiece();
    // Collects an array of squares in between start and end move, inclusive.
    let inbetweenSquares = pieceInPlay.makeMove(start, end);
    console.log(inbetweenSquares, "inbetweenSquares");

    // Illegal moves will return as empty array.
    if (inbetweenSquares == false) {
      return false;
    }

    // make sure the loop reads the array in order from start to end
    if (inbetweenSquares[0][0] == end[0]) {
      if (inbetweenSquares[0][1] == end[1]) {
        inbetweenSquares = inbetweenSquares.reverse();
      }
    }

    for (let item of inbetweenSquares) {
      // console.log(item, "item");
      // extract squares from array.
      let retrieveSquare = this.getSquare(item[0], item[1]);
      // console.log(retrieveSquare, "retrieveSquare");
      // check if there is a piece on the square.
      let pieceValue = retrieveSquare.getPiece();
      // console.log(pieceValue, "pieceValue");

      // if item is the start square, pass it
      if (item[0] == start[0] && item[1] == start[1]) {
        continue;
      }

      if (pieceValue != null) {
        // console.log("square piece value is not null");
        if (item[0] == end[0] && item[1] == end[1]) {
          // console.log("item equals end");
          if (pieceValue['color'] != pieceInPlay['color']) {
            return true;
          }
        }
        return false;
      }
      // supposed to check if the square is the end and the move is approved
      // but, it sometimes checks this square first in the array and ends the loop
      // TODO: find a way to check all squares without exiting the loop early
      else if (pieceValue == null) {
        if (item[0] == end[0]) {
          if (item[1] == end[1]) {
            return true;
          }
        }
      }
    }
    return false;
  }
}

/**
 * @class Piece - Chess Piece
 */
// *******************************************************************
class Piece {
  color;
  type;

  /**
   * @constructor
   *
   * @param string color - piece color [black/white]
   * @param string type - piece type, queen, king, pawn etc.
   */
  constructor(color, type) {
    this.color = color;
    this.type = type;
  }

  /**
   * @method makeMove - current existing piece should be making a move to x, y
   *
   * @param string x - horizontal coordinates [a - h]
   * @param number y - vertical coordinates [1 - 8]
   * @return mixed
   */
  makeMove(x, y) {
    return;
  }
}

/**
 * @class Pawn
 */
class Pawn extends Piece {
  /**
   * @constructor
   * @param string color- piece color [black/white]
   */
  constructor(color) {
    super(color, 'pawn');
  }
}

/**
 * @class Bishop
 * @todo - finish the class
 */
class Bishop extends Piece {
  /**
   * @constructor
   * @param string color- piece color [black/white]
   */
  constructor(color) {
    super(color, 'bishop');
  }

  /**
   * @method makeMove - Implementing the move of the piece
   * @param x
   * @param y
   */

  makeMove(start, end) {
    // Diagonal movement only.
    let startIndex = Board.LETTERS.indexOf(start[0]);
    let endIndex = Board.LETTERS.indexOf(end[0]); 
    let countOfSquaresToCollect = Math.abs(endIndex - startIndex); 
    let squareNum = start[1]; 
    let collectSquares = [];

    // TODO: Consider getting rid of this check, and adding instead a way to see
    // if the move is legal. 
    if (start[0] == end[0] || start[1] == end[1]) {
      return false;
    } 

    //* start letter index is less than end letter index.
    if (startIndex < endIndex) {

      //* start num is less than end num.
      if (start[1] < end[1]) {

        // create variable for how many items to add to array
        for (let i = 0; i <= countOfSquaresToCollect; i++) {
          // letter index to increase, num to increase.
          collectSquares.push([Board.LETTERS[startIndex + i], squareNum + i]);

        }
        return collectSquares;
      }

      //* start num is higher than end num
      else if (start[1] > end[1]) { 

        for (let i = 1; i <= countOfSquaresToCollect; i++) { 
          // letter index needs to increase, num to decrease. 
          collectSquares.push([Board.LETTERS[startIndex + i], squareNum - i]); 

        }
        return collectSquares;
      }
    }

    //* start letter index higher than end letter index.
    else if (startIndex > endIndex) {

      //* start num lower than end num.
      if (start[1] < end[1]) {

        for (let i = 1; i <= countOfSquaresToCollect; i++) {
          // letter index to decrease, num to increase.
          collectSquares.push([Board.LETTERS[startIndex - i], squareNum + i]);

        }
        return collectSquares;
      }

      else if (start[1] > end[1]) {

        for (let i = 1; i <= countOfSquaresToCollect; i++) {
          // letter index to decrease, num to decrease.
          collectSquares.push([Board.LETTERS[startIndex - i], squareNum - i]);

        }
        return collectSquares;
      }
    }
  }
}

/**
 * @class Rook
 * @todo - finish the class
 */
class Rook extends Piece {
  /**
   * @constructor
   * @param string color- piece color [black/white]
   */
  constructor(color) {
    super(color, 'rook');
  }

  /**
   * @method makeMove - Implementing the move of the piece
   * @param x
   * @param y
   */
  makeMove(start, end) {
    let collectSquares = [];

    // Verical movement only
    if (start[0] == end[0]) {
      let value = start[0]; // d
      let startAndEnd = [start[1], end[1]];

      // TODO: remove "apply" from min max.
      var min = Math.min.apply(null, startAndEnd),
        max = Math.max.apply(null, startAndEnd);

      for (let i = min; i <= max; i++) {
        collectSquares.push([value, i]);
      }
      return collectSquares;
    }

    // Horizontal movement only.
    else if (start[1] == end[1]) {
      let value = start[1];
      let startAndEnd = [Board.LETTERS.indexOf(start[0]),
      Board.LETTERS.indexOf(end[0])];

      var min = Math.min.apply(null, startAndEnd),
        max = Math.max.apply(null, startAndEnd);

      for (let i = min; i <= max; i++) {
        collectSquares.push([Board.LETTERS[i], value]);
      }
      return collectSquares;
    }
    else {
      return false;
    }
  }
}


// // Setting Up the Board: START
const board = new Board();
// White Pawn on B4
board.setPiece(new Pawn('white'), 'a', 5);
// White Pawn on E4
board.setPiece(new Pawn('white'), 'd', 3);
// White Bishop on C3
board.setPiece(new Bishop('white'), 'c', 3);
// Black Pawn on F6
board.setPiece(new Pawn('black'), 'f', 6);
// Black Rook on E6
board.setPiece(new Rook('black'), 'd', 6);
// Setting Up the Board: END

// To print the board and its piece placement
board.print();


function runTest(testValue, expectedResult, description) {
  console.log(description)
  if (testValue === expectedResult) {
    console.log('    ✅ Test passed')
  } else {
    console.log('    ❌ Test failed!')
  }
};

runTest(board.makeMove(['c', 3], ['e', 1]), true, 'Bishop makes legal move, down right');
runTest(board.makeMove(['c', 3], ['b', 4]), true, 'Bishop makes legal move, up left');
runTest(board.makeMove(['c', 3], ['a', 1]), true, 'Bishop makes legal move, down left');
runTest(board.makeMove(['c', 3], ['e', 5]), true, 'Bishop makes legal move, up right');
runTest(board.makeMove(['c', 3], ['h', 5]), false, 'Bishop makes illegal move, not diagonal');
runTest(board.makeMove(['c', 3], ['a', 5]), false, 'Bishop makes illegal move, cannot land on team piece');
runTest(board.makeMove(['c', 3], ['f', 6]), true, 'Bishop makes legal move, captures opponent');
runTest(board.makeMove(['c', 3], ['g', 7]), false, 'Bishop makes illlegal move, cannot jump over pieces');

runTest(board.makeMove(['d', 6], ['a', 6]), true, 'Rook makes legal move, left');
runTest(board.makeMove(['d', 6], ['d', 4]), true, 'Rook makes legal move, down');
runTest(board.makeMove(['d', 6], ['e', 6]), true, 'Rook makes legal move, right');
runTest(board.makeMove(['d', 6], ['d', 8]), true, 'Rook makes legal move, up');
runTest(board.makeMove(['d', 6], ['c', 2]), false, 'Rook makes illegal move, must move horizonal or vertical');
runTest(board.makeMove(['d', 6], ['f', 6]), false, 'Rook makes illegal move, cannot land on team piece');
runTest(board.makeMove(['d', 6], ['d', 3]), true, 'Rook makes legal move, captures opponent');
runTest(board.makeMove(['d', 6], ['d', 1]), false, 'Rook makes illegal move, cannot jump over pieces');

