const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");
const clearBtn = document.querySelector(".clear-btn");
const undoBtn = document.querySelector(".undo-btn");

// size of the canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// defaults
let canvasBackroundColor = "white";
let drawColor = "black";
let drawStrokeWidth = "3";
let isDrawing = false;
let drawingContentArray = [];
let index = -1;

// canvas background and size initialization
context.fillStyle = canvasBackroundColor;
context.fillRect(0, 0, canvas.width, canvas.height);

// start fn
function start(event) {
  isDrawing = true;
  context.beginPath();
  context.moveTo(event.clientX, event.clientY);
  event.preventDefault();
}

// draw fn
function draw(event) {
  if (isDrawing) {
    context.lineTo(event.clientX, event.clientY);
    context.strokeStyle = drawColor;
    context.lineWidth = drawStrokeWidth;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.stroke();
  }
  event.preventDefault();
}

// stop fn
function stop(event) {
  if (isDrawing) {
    context.stroke();
    context.closePath();
    isDrawing = false;
  }
  // saves the current drawing state into the array
  if (event.type != "mouseout") {
    let savedDrawing = context.getImageData(0, 0, canvas.width, canvas.height);
    drawingContentArray.push(savedDrawing);
    index += 1;
  }

  event.preventDefault();
}

// change the color to the final computed styling of an element
function changeColor(element) {
  let computedColor = window.getComputedStyle(element).backgroundColor;
  drawColor = computedColor;
}

// clears the canvas to defaults
function clearCanvas() {
  context.fillStyle = canvasBackroundColor;
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillRect(0, 0, canvas.width, canvas.height);
  drawingContentArray = [];
  index = -1;
}

// undo last drawing el
function undoLast() {
  if (drawingContentArray.length <= 1) {
    clearCanvas();
  } else {
    index -= 1;
    drawingContentArray.pop();
    context.putImageData(drawingContentArray[index], 0, 0);
  }
}

// handle the drawing state during window resizing
function handleResizeWindow() {
  let lastDrawing = drawingContentArray[index] || null;

  // resize the canvas
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  if (lastDrawing) {
    context.putImageData(lastDrawing, 0, 0);
  }
}

// event listeners
canvas.addEventListener("touchstart", start);
canvas.addEventListener("touchmove", draw);
canvas.addEventListener("touchend", stop);
canvas.addEventListener("mousedown", start);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stop);
canvas.addEventListener("mouseout", stop);
clearBtn.addEventListener("click", clearCanvas);
undoBtn.addEventListener("click", undoLast);
window.addEventListener("resize", handleResizeWindow);
