import React from "react";
import {
  PencilIcon,
  SlashIcon,
  CursorArrowRaysIcon,
  ArrowTurnDownLeftIcon,
  ArrowTurnDownRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

const ToolButtons = (props) => {
  const {
    setTool,
    handleUndo,
    handleRedo,
    handleErase,
    showGrid,
    setShowGrid,
    setStrokeWidth,
    strokeWidth,
  } = props;
  return (
    <div className="grid grid-cols-2 p-3 gap-3 min-w-[120px]  bg-slate-200 z-20">
      <div className="w-10 h-10 border-2 cursor-pointer hover:border-3 hover:border-red-300"
      onClick={() => setTool('select')}>
        <CursorArrowRaysIcon className="text-2xl" />
      </div>
      <div className="w-10 h-10 cursor-pointer hover:border-3 hover:border-red-300" onClick={() => setTool('line')}>
        <SlashIcon />
      </div>
      <div className=" w-10 h-10 cursor-pointer hover:border-3 hover:border-red-300" onClick={() => setTool('pencil')}>
        <PencilIcon />
      </div>
      <div>
        <i className="fa-regular fa-square text-3xl cursor-pointer hover:border-3 hover:border-red-300" onClick={() => setTool('rect')}></i>
      </div>
      <div>
        <i className="fa-regular fa-circle text-3xl" onClick={() => setTool('circle')}></i>
      </div>
      <div>
        <i className="fa-solid fa-border-all text-3xl" onClick={() => setShowGrid(!showGrid)}></i>
      </div>
      <div onClick={handleUndo}>
        <ArrowTurnDownLeftIcon />
      </div>
      <div onClick={handleRedo}>
        <ArrowTurnDownRightIcon />
      </div>
      <div onClick={handleErase}>
        <XMarkIcon />
      </div>
    </div>
  );
};

export default ToolButtons;
