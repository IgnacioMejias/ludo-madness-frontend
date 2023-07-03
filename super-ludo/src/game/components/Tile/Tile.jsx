import React, { useState } from "react";
import "./Tile.css";

export default function Tile({ i, j, image, pieceNumber, onClick }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    onClick(pieceNumber);
    setClicked(true);
  };

  let tileClassName = "tile white-tile";
  if (i < 6) {
    if (j < 6) {
      tileClassName = "tile red-tile";
    } else if (j > 8) {
      tileClassName = "tile green-tile";
    } else if (j === 7 && i > 0) {
      tileClassName = "tile green-tile";
    } else if (i === 1 && j === 8) {
      tileClassName = "tile green-tile";
    } else {
      tileClassName = "tile white-tile";
    }
  } else if (i > 8) {
    if (j < 6) {
      tileClassName = "tile blue-tile";
    } else if (j > 8) {
      tileClassName = "tile yellow-tile";
    } else if (j === 7 && i < 14) {
      tileClassName = "tile blue-tile";
    } else if (i === 13 && j === 6) {
      tileClassName = "tile blue-tile";
    } else {
      tileClassName = "tile white-tile";
    }
  } else if (i === 7) {
    if (j > 0 && j < 7) {
      tileClassName = "tile red-tile";
    } else if (j > 7 && j < 14) {
      tileClassName = "tile yellow-tile";
    } else {
      tileClassName = "tile white-tile";
    }
  } else if (i === 6) {
    if (j === 7) {
      tileClassName = "tile green-tile";
    } else if (j === 1) {
      tileClassName = "tile red-tile";
    } else {
      tileClassName = "tile white-tile";
    }
  } else if (i === 8) {
    if (j === 7) {
      tileClassName = "tile blue-tile";
    } else if (j === 13) {
      tileClassName = "tile yellow-tile";
    } else {
      tileClassName = "tile white-tile";
    }
    } else {
    tileClassName = "tile white-tile";
  }

  const resetSize = () => {
    setClicked(false);
  };

  return (
    <div
      className={`${tileClassName}${clicked ? " clicked" : ""}`}
      key={`${i},${j}`}
      onClick={handleClick}
    >
      <img src={image} onClick={resetSize} />
    </div>
  );
}