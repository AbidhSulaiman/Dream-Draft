import React, { useState, useRef, useEffect } from "react";
import { Stage, Layer, Transformer } from "react-konva";
import ToolButtons from "./ToolButtons";
import Grid from "./Grid";
import ShapeLayer from "./ShapeLayer";

const BuildingPlanEditor = () => {
  const [tool, setTool] = useState("pencil");
  const [shapes, setShapes] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const stageRef = useRef(null);
  const [showGrid, setShowGrid] = useState(false);
  const [redoStack, setRedoStack] = useState([]);
  const [strokeWidth, setStrokeWidth] = useState(2);
  const gridSize = 50;

  const transformerRef = useRef(null);
  const [selectedShapeId, setSelectedShapeId] = useState(null);

  // Attach transformer to the selected shape
  useEffect(() => {
    const stage = stageRef.current?.getStage();
    const transformerNode = transformerRef.current;
    const selectedNode = stage?.findOne(`#${selectedShapeId}`);

    if (selectedNode && transformerNode) {
      transformerNode.nodes([selectedNode]);
      transformerNode.getLayer().batchDraw();
    } else if (transformerNode) {
      transformerNode.nodes([]);
      transformerNode.getLayer().batchDraw();
    }
  }, [selectedShapeId]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Delete" && selectedShapeId) {
        setShapes(shapes.filter((shape) => shape.id !== selectedShapeId));
        setSelectedShapeId(null); // Deselect after deletion
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [shapes, selectedShapeId]);

  const deselectAll = () => {
    setSelectedShapeId(null); // Clear the selected shape ID
  };
  const handleMouseDown = (e) => {
    // Check if the click is on the stage (not on any shape)
    const isOnStage = e.target === stageRef.current;

    if (isOnStage) {
      deselectAll(); // Deselect all shapes
    }
    if (tool === "select") return;
    const stage = stageRef.current?.getStage();
    if (!stage) return;
    setIsDrawing(true);
    const point = stage.getPointerPosition();

    let newShape = null;
    const id = `${shapes.length + 1}`;

    if (tool === "line") {
      newShape = {
        id,
        tool,
        points: [point.x, point.y, point.x, point.y],
        draggable: true,
      };
    } else if (tool === "pencil") {
      newShape = { id, tool, points: [point.x, point.y], draggable: true };
    } else if (tool === "rect") {
      newShape = {
        id,
        tool,
        x: point.x,
        y: point.y,
        width: 0,
        height: 0,
        draggable: true,
      };
    } else if (tool === "circle") {
      newShape = {
        id,
        tool,
        x: point.x,
        y: point.y,
        radius: 0,
        draggable: true,
      };
    }

    setShapes([...shapes, newShape]);
  };

  const handleMouseMove = (e) => {
    if (!isDrawing) return;
    const stage = stageRef.current?.getStage();
    if (!stage) return;
    const point = stage.getPointerPosition();
    const updatedShapes = [...shapes];
    const index = shapes.length - 1;

    if (tool === "pencil") {
      updatedShapes[index].points = updatedShapes[index].points.concat([
        point.x,
        point.y,
      ]);
    } else if (tool === "line") {
      updatedShapes[index].points = [
        updatedShapes[index].points[0],
        updatedShapes[index].points[1],
        point.x,
        point.y,
      ];
    } else if (tool === "rect") {
      updatedShapes[index].width = point.x - updatedShapes[index].x;
      updatedShapes[index].height = point.y - updatedShapes[index].y;
    } else if (tool === "circle") {
      updatedShapes[index].radius = Math.sqrt(
        Math.pow(point.x - updatedShapes[index].x, 2) +
          Math.pow(point.y - updatedShapes[index].y, 2)
      );
    }

    setShapes(updatedShapes);
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  const handleUndo = () => {
    if (shapes.length === 0) return;
    const lastElement = shapes[shapes.length - 1];
    setRedoStack([...redoStack, lastElement]);
    setShapes(shapes.slice(0, -1));
  };

  const handleRedo = () => {
    if (redoStack.length === 0) return;
    const redoShape = redoStack[redoStack.length - 1];
    setRedoStack(redoStack.slice(0, -1));
    setShapes([...shapes, redoShape]);
  };

  const handleErase = () => {
    setSelectedShapeId(null);
    setShapes([]);
  };

  const handleShapeClick = (id) => {
    setSelectedShapeId(id);
  };

  return (
    <section className="flex p-3">
      <div className="mt-52">
        <ToolButtons
          setTool={setTool}
          handleUndo={handleUndo}
          handleRedo={handleRedo}
          handleErase={handleErase}
          showGrid={showGrid}
          setShowGrid={setShowGrid}
          setStrokeWidth={setStrokeWidth}
          strokeWidth={2}
        />
      </div>
      <div className="mt-3">
        <Stage
          className="bg-slate-50"
          width={1400}
          height={800}
          ref={stageRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          style={{ border: "1px solid black" }}
        >
          {showGrid && (
            <Layer>
              <Grid gridSize={gridSize} />
            </Layer>
          )}
          <Layer>
            <ShapeLayer
              shapes={shapes}
              tool={tool}
              strokeWidth={strokeWidth}
              handleShapeClick={handleShapeClick}
            />
            <Transformer ref={transformerRef} />
          </Layer>
        </Stage>
      </div>
    </section>
  );
};

export default BuildingPlanEditor;
