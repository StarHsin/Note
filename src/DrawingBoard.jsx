import { ReactSketchCanvas } from "react-sketch-canvas";
import { useState, useEffect } from "react";

function App() {
  const [canvasSize, setCanvasSize] = useState({ width: 600, height: 600 });

  useEffect(() => {
    // 定義一個 resize 事件處理函數
    const handleResize = () => {
      const newWidth = window.innerWidth * 0.9;  // 寬度設為視窗寬度的 80%
      const newHeight = window.innerHeight * 0.8; // 高度設為視窗高度的 60%
      setCanvasSize({ width: newWidth, height: newHeight });
    };

    // 註冊 resize 事件監聽器
    window.addEventListener("resize", handleResize);

    // 初始化時調用一次以確保頁面加載後尺寸正確
    handleResize();

    // 清理事件監聽器
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <h1>Draw here!</h1>
      <ReactSketchCanvas
        width={`${canvasSize.width}px`}
        height={`${canvasSize.height}px`}
        canvasColor="transparent"
        strokeColor="#a855f7"
      />
    </div>
  );
}

export default App;