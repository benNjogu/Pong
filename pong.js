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

//create the net
const net = {
    x: cvs.width/2 - 1,
    y: 0,
    width: 2,
    height: 10,
    color: "white"
}

//draw the net
function drawNet(){
    for (let i = 0; i < cvs.height; i+=15) {
        drawRect(net.x, net.y + i, net.width, net.height, net.color);
    }
}

//draw rectangle
function drawRect(x, y, w, h, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
}

//draw circle
function drawCircle(x, y, r, color){
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fill();
}

//drawing the text
function drawText(x, y, text, color){
    ctx.fillStyle = color;
    ctx.font = "45px fantasy";
    ctx.fillText(text, x, y);
}

//render the game
function render() {
  //clear the canvas
  drawRect(0, 0, cvs.width, cvs.height, "black");

  //draw the net
  drawNet();

  //draw the score
  drawText(cvs.width / 4, cvs.height / 5, user.score, "white");
  drawText((3 * cvs.width) / 4, cvs.height / 5, comp.score, "white");

  //draw the paddles
  drawRect(user.x, user.y, user.width, user.height, user.color);
  drawRect(comp.x, comp.y, comp.width, comp.height, comp.color);

  //draw the ball
  drawCircle(ball.x, ball.y, ball.radius, ball.color);
}

//control the user paddle
cvs.addEventListener("mousemove", movePaddle);

function movePaddle(evt){
    let rect = cvs.getBoundingClientRect();

    user.y = evt.clientY - rect.top - user.height/2;
}

//collision detection 
function collision(b, p){
    b.top = b.y - b.radius;
    b.bottom = b.y + b.radius;
    b.left = b.x - b.radius;
    b.right = b.x + b.radius;

    p.top = p.y;
    p.bottom = p.y + p.height;
    p.left = p.x;
    p.right = p.x + p.width;

    return b.right > p.left && b.bottom > p.top && b.left < p.right && b.top < p.bottom;
}

//update: pos, mov, score...
function update() {
  ball.x += ball.velocityX;
  ball.y += ball.velocityY; 

  if (ball.y + ball.radius > cvs.height || ball.y - ball.radius < 0) {
    ball.velocityY = -ball.velocityY;
  }

  let player = (ball.x < cvs.width/2) ? user : comp;

  if(collision(ball, player)){

  }

}

//game init
function game() {
  update();
  render();
}

//loop
const framePerSecond = 50;
setInterval(game, 1000/framePerSecond);

