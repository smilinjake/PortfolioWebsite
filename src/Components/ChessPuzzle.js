import React, { useState, useEffect } from "react";
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
  const [hookBoard, setHookBoard] = useState(board);
  // console.log(board);
  const [selected, setSelected] = useState({
    inHand: false,
    name: "empty",
    id: 0,
  });
  // NOW SOME PIECE MOVING LOGIC
  const isValidMove = (selection, positionValue) => {
    //want to return boolean if move is valid

    // rook moves are valid if position is adjacent, or a modulo of 8
    if (selection.id === positionValue) {
    }
  };
  const PieceMover = (arr, place) => {
    if (selected.inHand === false) {
      // selected.inHand = true;
      // selected.name = place.piece;
      setSelected({ inHand: true, name: place.piece, id: place.id - 1 });
    }
    // we take in an array that shows the current state of the board
    // onClick we want to rearrange that array
    // lets make Pawn Logic
    let destination = place.id - 1;
    if (selected.name === "p") {
      console.log("just clicked p", place);
      arr[destination].piece = selected.name;
      arr[selected.id].piece = "e";
      setHookBoard(arr);
      setSelected({
        inHand: false,
        name: "empty",
      });
    }
  };
  // console.log(selected);
  // console.log(board[53]);
  // console.log(board[45]);
  useEffect(() => {}, [hookBoard, selected]);
  return (
    <>
      <div id="ChessPage"></div>
      <p style={{ color: "red", textAlign: "center" }}>
        CHESS GAME IS STILL UNDER CONSTRUCTION
      </p>
      <div className="ChessSection">
        <div className="BoardContainer">
          {hookBoard.map((piece, i) => {
            return (
              <div key={piece.id} id={piece.id} className={piece.className}>
                <p
                  onClick={(square) => {
                    PieceMover(hookBoard, piece);
                    console.log("piece", piece);
                  }}
                  className="FillerPiece"
                >
                  {piece.piece !== "e" ? piece.piece : "-"}
                  {/* {i} */}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default ChessPuzzle;
