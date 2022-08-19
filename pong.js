//Select canvas
const cvs = document.getElementById("pong");
const ctx = cvs.getContext("2d");

//create the user paddle
const user = {
    x: 0,
    y: cvs.height/2 - 100/2,
    width: 10,
    height: 100,
    color: "white",
    score: 0
}

//create the computer paddle
const comp = {
    x: cvs.width - 10,
    y: cvs.height/2 - 100/2,
    width: 10,
    height: 100,
    color: "white",
    score: 0
}

//create the ball
const ball = {
  x: cvs.width / 2,
  y: cvs.height / 2,
  radius: 10,
  speed: 5,
  velocityX: 5,
  velocityY: 5,
  color: "white",
};

//draw rectangle
function drawRect(x, y, w, h, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
}

drawRect(0, 0, cvs.width, cvs.height, "black");

//draw rectangle
function drawCircle(x, y, r, color){
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fill();
}

drawCircle(150, 150, 50, "white");

//drawing the text
function drawText(x, y, text, color){
    ctx.fillStyle = color;
    ctx.font = "45px fantasy";
    ctx.fillText(text, x, y);
}

drawText(100, 300, "Bro do yo even code?", "white");
