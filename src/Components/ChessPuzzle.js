import React from "react";
import { ColorAssigner } from "./HelperFunctions/ChessHelpers.js";
import "../App.css";

const ChessPuzzle = () => {
  let startingPosition =
    "r kn b k Q b kn r p p p p p p p p e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e p p p p p p p p r kn b k Q b kn r";
  let newStartingPosition = startingPosition.split(" ");
  let i = 0;
  let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h"];
  let board = [];
  let makeBoard = () => {
    while (i < 64) {
      i += 1;
      let TypeOfSquare;
      let piece = {
        id: i,
        className: ColorAssigner(i, TypeOfSquare),
        file: alphabet[(i - 1) % 8],
        piece: String(newStartingPosition[i - 1]),
      };
      board.push(piece);
    }
  };
  makeBoard();
  // console.log(board);

  return (
    <>
      <div className="ChessSection">
        <div className="BoardContainer">
          {board.map((piece) => {
            return (
              <div key={piece.id} id={piece.id} className={piece.className}>
                {piece.piece !== "e" ? piece.piece : null}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default ChessPuzzle;
