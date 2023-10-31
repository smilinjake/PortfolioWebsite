import React from "react";
import "../App.css";

const ChessPuzzle = () => {
  let i = 0;
  let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h"];
  let board = [];
  let makeBoard = () => {
    while (i < 64) {
      i += 1;
      let TypeOfSquare;
      if (i % 2 === 0) {
        TypeOfSquare = "GreySquare";
      } else {
        TypeOfSquare = "WhiteSquare";
      }

      let piece = { id: i, className: TypeOfSquare, file: alphabet[i % 8] };
      // create a board square
      //give board square alternating Classname
      // GreySquare
      // WhiteSquare
      board.push(piece);
    }
  };
  makeBoard();
  console.log(board);

  return (
    <>
      <div className="BoardContainer">
        {board.map((piece) => {
          return (
            <div key={piece.id} id={piece.id} className={piece.className}>
              {piece.ClassName}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ChessPuzzle;
