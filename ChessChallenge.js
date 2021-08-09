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
      for (let j = 1; j < Board.HEIGHT; j += 1) {
        const color = flag ? 'dark' : 'light';

        this.squares[letter][j] = new Square(letter, j, color);
        flag = !flag;
      }
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

    let squareStart = this.getSquare(start[0], start[1]);
    let piece = squareStart.getPiece();
    // receive an array of squares that are in between start and end.
    let inbetweenSquares = piece.makeMove(start, end);

    // if the piece moves are illegal, inbetweenSquares will return as false.
    if(inbetweenSquares == false) {
      return false;
    }

    for(let item of inbetweenSquares) {

      // extract squares from array.
      let retrieveSquare = this.getSquare(item[0], item[1]);
      // check if there is a piece on the square.
      let pieceValue = retrieveSquare['piece'];

      if(pieceValue != null) {
        if(item[0] == end[0] && item[1] == end[1]) {
          
          // if there is a piece on the end square, the pieces cannot be the same color.
          if(pieceValue['color'] == squareStart['piece']['color']) {
            return false;
          }
        }

        // the only square in the move that is allowed to have a piece on it,
        // is the end square. check if the occupied square is the end. 
        else if(item != end) {
          console.log("fail because piece cannot jump other pieces");
          return false;
          
        }
      }
    }
    return true;
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
    return ;
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
    let squareStart = board.getSquare(start[0], start[1]);    
    let pieceDetails = squareStart.getPiece();

    // the bishop cannot move vertically or horizonatally; check the indexes 
    // to see if the move is trying to do so.
    if(start[0] == end[0] || start[1] == end[1]) {
      return false;
    }

    // the bishop piece can only travel on squares of its opposite color.
    else if(squareStart['color'] == pieceDetails['color']) {
      return false;
    }

    else if(squareStart['color'] != pieceDetails['color']) {
      let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
      let startIndex = letters.indexOf(start[0]);
      let endIndex = letters.indexOf(end[0]);

      //* start letter index is less than end letter index.
      if(startIndex < endIndex) {

        //* start num is less than end num.
        if(start[1] < end[1]) {
          let collectSquares = [];
          let squareNum = start[1];
          // create variable for how many items to add to array
          let diffIndex = (endIndex - startIndex);

          for(let i = 1; i <= diffIndex; i++) {
            // letter index to increase, num to increase.
            collectSquares.push([letters[startIndex+i], squareNum+i]);

          }
          return collectSquares;
        }

        //* start num is higher than end num
        else if(start[1] > end[1]) {
          let collectSquares = [];
          let squareNum = start[1];
          let diffIndex = (endIndex - startIndex);
          
          for(let i = 1; i <= diffIndex; i++) {
            // letter index needs to increase, num to decrease. 
            collectSquares.push([letters[startIndex+i], squareNum-i]);

          }
          return collectSquares;  
        }
      }

      //* start letter index higher than end letter index.
      else if(startIndex > endIndex) {

        //* start num lower than end num.
        if(start[1] < end[1]) {
          let collectSquares = [];
          let squareNum = start[1];
          let diffIndex = (startIndex - endIndex);

          for(let i = 1; i <= diffIndex; i++) {
            // letter added needs index to decrease, num to increase.
            collectSquares.push([letters[startIndex-i], squareNum+i]);

          }
          return collectSquares;
        }

        else if(start[1] > end[1]) {
          let collectSquares = [];
          let squareNum = start[1];
          let diffIndex = (startIndex - endIndex);

          for(let i = 1; i <= diffIndex; i++) {
            // letter added needs its index to decrease, num needs to decrease.
            collectSquares.push([letters[startIndex-i], squareNum-i]);

          }
          return collectSquares;
        }
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

    // piece can only move vertically ot horizontally, checking if moving vertically.
    if(start[0] == end[0]) {
    
      if(start[1] > end[1]) {
        let collectSquares = [];
        let value = start[0];

        for(let i = end[1]; i < start[1]; i++) {

          // because piece is always moving vertically here, always add same 0 index for the letter. 
          collectSquares.push([value, i]);
        
        }
        return collectSquares;
      } 
      
      else if(start[1] < end[1]) {
        let collectSquares = [];
        let value = start[0];

        for(let i = start[1]; i < end[1]; i++) {
          collectSquares.push([value, i]);
        
        }
        return collectSquares;
      } 
    }

    // checking if piece is moving horizontally.
    else if(start[1] == end[1]) {
      let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
      let startIndex = letters.indexOf(start[0]);
      let endIndex = letters.indexOf(end[0]);
    
      if(startIndex < endIndex) {
        let collectSquares = [];
        let value = start[1];
        
        for(let i = startIndex+1; i < endIndex+1; i++) {
          collectSquares.push([letters[i], value]);

        }
        return collectSquares;
      }

      else if(startIndex > endIndex) {
        let collectSquares = [];
        let value = start[1];
        
        for(let i = endIndex; i < startIndex; i++) {
          collectSquares.push([letters[i], value]); 
          
        }
        return collectSquares; 
      } 
    } 

    // if the requested move is not horizonal or vertical, than the move is illegal.
    else {
      return false;
    }
  }
}
  

// Setting Up the Board: START
const board = new Board();
// White Pawn on B4
board.setPiece(new Pawn('white'), 'b', 4);
// White Pawn on E4
board.setPiece(new Pawn('white'), 'e', 4);
// White Bishop on C3
board.setPiece(new Bishop('white'), 'c', 3);
// Black Pawn on F6
board.setPiece(new Pawn('black'), 'f', 6);
// Black Rook on E6
board.setPiece(new Rook('black'), 'e', 6);
// Setting Up the Board: END



// Moves for the White Bishop
// Bishops only move diagonally
console.assert(board.makeMove(['c', 3], ['e', 1]), 'Success'); // would output nothing since it is a success
console.assert(board.makeMove(['c', 3], ['f', 6]), 'Success'); // would output nothing since it is a success

console.assert(board.makeMove(['c', 3], ['h', 5]), 'Fail - Illegal move bishops in general');
console.assert(board.makeMove(['c', 3], ['b', 4]), 'Fail - Illegal move (white pawn on the way)');
console.assert(board.makeMove(['c', 3], ['h', 8]), 'Fail - Illegal move (cannot jump over other pieces)');

// // Moves for the Black Rook
// // Rooks moving only vertically or horizontally
console.assert(board.makeMove(['e', 6], ['a', 6]), 'Success'); // would output nothing since it is a success
console.assert(board.makeMove(['e', 6], ['e', 4]), 'Success'); // would output nothing since it is a success

console.assert(board.makeMove(['e', 6], ['c', 5]), 'Fail - Illegal move rooks in general')
console.assert(board.makeMove(['e', 6], ['f', 6]), 'Fail - Illegal move (black pawn on the way)');
console.assert(board.makeMove(['e', 6], ['e', 1]), 'Fail - Illegal move (cannot jump over other pieces)')
