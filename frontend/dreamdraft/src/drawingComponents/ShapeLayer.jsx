import React from 'react';
import { Line, Rect, Circle } from 'react-konva';

const ShapeLayer = ({ shapes, tool, handleShapeClick, strokeWidth }) => {
  return shapes.map((shape, index) => {
    if (shape.tool === 'pencil' || shape.tool === 'line') {
      return (
        <Line
          key={index}
          id={shape.id}
          points={shape.points}
          stroke="black"
          strokeWidth={strokeWidth}
          draggable={tool === 'select'}
          onClick={() => handleShapeClick(shape.id)}
        />
      );
    } else if (shape.tool === 'rect') {
      return (
        <Rect
          key={index}
          id={shape.id}
          x={shape.x}
          y={shape.y}
          width={shape.width}
          height={shape.height}
          stroke="black"
          strokeWidth={strokeWidth}
          draggable={tool === 'select'}
          onClick={() => handleShapeClick(shape.id)}
        />
      );
    } else if (shape.tool === 'circle') {
      return (
        <Circle
          key={index}
          id={shape.id}
          x={shape.x}
          y={shape.y}
          radius={shape.radius}
          stroke="black"
          strokeWidth={strokeWidth}
          draggable={tool === 'select'}
          onClick={() => handleShapeClick(shape.id)}
        />
      );
    }
    return null;
  });
};

export default ShapeLayer;
