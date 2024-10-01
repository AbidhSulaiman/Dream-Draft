import React from 'react';
import { Rect } from 'react-konva';

const Grid = ({ gridSize }) => {
  const grid = [];
  const width = 1400;
  const height = 800;

  for (let i = 0; i < width / gridSize; i++) {
    for (let j = 0; j < height / gridSize; j++) {
      grid.push(
        <Rect
          key={`${i}-${j}`}
          x={i * gridSize}
          y={j * gridSize}
          width={gridSize}
          height={gridSize}
          stroke="lightgray"
          strokeWidth={1}
        />
      );
    }
  }
  return grid;
};

export default Grid;
