var Raven = require('raven-js') ;

Raven
    .config('http://ff06d796c37b45eca667421adab78205@maxb.ngrok.io/5',{
      release: '1.4.0'
  }).install();

const c = document.getElementById("canvas");
const ctx = c.getContext("2d");




const width = ctx.canvas.width
const height = ctx.canvas.height


window.addEventListener("keypress", (e)=>{
  console.log(e.code)
  switch(e.code){
    case "KeyA":
      vx-= 3
      e.zxczxczxc()
      break;
    case "KeyD":
      vx+= 3
      break;
    case "KeyW":
      if(jumps>0){
        vy-= 13
        jumps--
      }
    break;

  }
});

var jumps = 2
let t = 1
let r = 9

let x = 1
let y = 15

let vy = 0
let vx = 4
var G = .5

var balls = []

// {
//   x:0,
//   y:2,
//   vy:0,
//   vx:9,
//   color: 'fff'
// }

const tick = () => {
  x += vx
  y += vy
  vy = vy + G
  if ( (x< 0) || (x > width) ){
    vx = vx*-1
  }
  if( (y> height) || (y<0)){
    vy *= -.6
    jumps =2
  }
  // y = (height/2) + (Math.cos(t/15)*(height/3))
  render()
}

const render = () => {
  ctx.fillStyle = `hsla(180, 0% ,30%,0.1)`
  ctx.fillRect(0,0,width,height);

  ctx.fillStyle = "#aff";
  ctx.beginPath();
  ctx.arc(x,y,r,0,2*Math.PI);
  ctx.fill();
}


const frame = (timestamp) => {
  t++;
  tick()
  window.requestAnimationFrame(frame);
}

window.requestAnimationFrame(frame);


/*const tick = () => {
  y+=vy
  x+=vx
  vy +=0.5
  if((y+r)>height){
    vy *=-1
  }
  vy *= .99
  if(x>width){
    x = r
    y =0
  }
  // x = (width/2) + (Math.sin(t/15)*(width/3))
  // y = (height/2) + (Math.cos(t/15)*(height/3))
  render()
}*/
