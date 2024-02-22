import { useReducedMotion } from 'framer-motion';
import { useCallback, useEffect, useRef } from 'react';

const TEXT_COLOR = '#6919FF';
const BACKGROUND_COLOR = '#060918';
const ALPHA_BACKGROUND_COLOR = '#06091818';
const FONT = '15pt monospace';
const TEXT_COLUMN_WIDTH = 20;
const FPS = 20;

function getPseudoRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function MatrixBackground() {
  const shouldReduceMotion = useReducedMotion();
  const matrixCanvasRef = useRef(null);

  const initializeMatrixCanvas = useCallback(() => {
    if (!matrixCanvasRef.current) return undefined;

    const { parentElement } = matrixCanvasRef.current;

    matrixCanvasRef.current.width = parentElement?.offsetWidth || window.innerWidth;
    matrixCanvasRef.current.height = parentElement?.offsetHeight || window.innerHeight;

    const canvasContext = matrixCanvasRef.current.getContext('2d');
    if (!canvasContext) return undefined;

    canvasContext.fillStyle = BACKGROUND_COLOR;
    canvasContext.fillRect(0, 0, matrixCanvasRef.current.width, matrixCanvasRef.current.height);

    const numberOfColumns = Math.floor(matrixCanvasRef.current.width / TEXT_COLUMN_WIDTH) + 1;
    const defaultYPositions = Array(numberOfColumns).fill(0);

    return defaultYPositions;
  }, []);

  const drawMatrix = useCallback((yPositions) => {
    if (!matrixCanvasRef.current) return undefined;

    const canvasContext = matrixCanvasRef.current.getContext('2d');

    if (!canvasContext) return undefined;

    canvasContext.fillStyle = ALPHA_BACKGROUND_COLOR;
    canvasContext.fillRect(0, 0, matrixCanvasRef.current.width, matrixCanvasRef.current.height);

    canvasContext.fillStyle = TEXT_COLOR;
    canvasContext.font = FONT;

    const newYPositions = yPositions.map((y, index) => {
      const char = String.fromCharCode(getPseudoRandomInRange(33, 126));
      const x = index * TEXT_COLUMN_WIDTH;

      canvasContext.fillText(char, x, y);

      const shouldResetYPosition = y > 100 + Math.random() * 10000;
      return shouldResetYPosition ? 0 : y + 20;
    });

    return newYPositions;
  }, []);

  useEffect(() => {
    const defaultYPositions = initializeMatrixCanvas();

    window.addEventListener('resize', initializeMatrixCanvas);
    window.addEventListener('orientationchange', initializeMatrixCanvas);

    const animate = (yPositions) => {
      if (shouldReduceMotion) return;
      const newYPositions = drawMatrix(yPositions);

      if (!newYPositions) return;

      setTimeout(() => {
        animate(newYPositions);
      }, 1000 / FPS);
    };

    if (defaultYPositions) animate(defaultYPositions);

    return () => {
      window.removeEventListener('resize', initializeMatrixCanvas);
      window.removeEventListener('orientationchange', initializeMatrixCanvas);
    };
  }, [drawMatrix, initializeMatrixCanvas, shouldReduceMotion]);

  return (
    <canvas
      ref={matrixCanvasRef}
      aria-label="Matrix background"
      className="mask-radial-faded absolute inset-0 -z-10 h-full w-full opacity-75"
    />
  );
}

export default MatrixBackground;
