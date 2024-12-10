import { ReactSketchCanvas } from "react-sketch-canvas";
import { useRef, useState, useEffect } from "react";
import DrawingBoard from './DrawingBoard.jsx';

function toolsBar() {
    const canvasRef = useRef(null);
    const [eraseMode, setEraseMode] = useState(false);
    const [strokeWidth, setStrokeWidth] = useState(5);
    const [strokeColor, setStrokeColor] = useState("#000000");

    const handleEraserClick = () => {
        setEraseMode(true);
        canvasRef.current?.eraseMode(true);
    };

    const handlePenClick = () => {
        setEraseMode(false);
        canvasRef.current?.eraseMode(false);
    };

    const handleStrokeWidthChange = (event) => {
        setStrokeWidth(+event.target.value);
    };

    const handleStrokeColorChange = (event) => {
        setStrokeColor(event.target.value);
    };

    const handleUndoClick = () => {
        canvasRef.current?.undo();
    };

    const handleRedoClick = () => {
        canvasRef.current?.redo();
    };

    const handleClearClick = () => {
        canvasRef.current?.clearCanvas();
    };

    return (
        <>
            <div className="Canvas">
                <div className="Tools">
                <h1>Canvas</h1>
                <button
                    type="button"
                    className="button"
                    disabled={!eraseMode}
                    onClick={handlePenClick}
                    >
                    筆
                    </button>
                    <button
                    type="button"
                    className="button"
                    disabled={eraseMode}
                    onClick={handleEraserClick}
                    >
                    橡皮擦
                    </button>
                    <label htmlFor="strokeWidth" className="form-label">
                    大小
                    </label>
                    <input
                    type="range"
                    className="form-range"
                    min="1"
                    max="20"
                    step="1"
                    id="strokeWidth"
                    value={strokeWidth}
                    onChange={handleStrokeWidthChange}
                    />
                    <label htmlFor="storkeColor" className="form-label">
                    顏色
                    </label>
                    <input
                    type="color"
                    id="storkeColor"
                    value={strokeColor}
                    onChange={handleStrokeColorChange}
                    />
                    <button
                    type="button"
                    className="button"
                    onClick={handleUndoClick}
                    >
                    上一步
                    </button>
                    <button
                    type="button"
                    className="button"
                    onClick={handleRedoClick}
                    >
                    下一步
                    </button>
                    <button
                    type="button"
                    className="button"
                    onClick={handleClearClick}
                    >
                    清除
                    </button>
                </div>
                
                <div className="Board">
                    <DrawingBoard
                    canvasRef = {canvasRef}
                    strokeWidth = {strokeWidth}
                    eraserWidth = {strokeWidth}
                    strokeColor = {strokeColor}
                    />
                </div>
            </div>
        </>
    );
}

export default toolsBar;
