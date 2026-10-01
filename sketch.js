let x,y,d;
let colorPalette = ['#D62BAB','#B8C7D6', '#C4D6C0','#D6C6AA','#826E7D','#D6886D','#D6ACB2','#A9C8D6','#BAD6D0','#82716C'];
let numCircles;
let spacing;
function setup() {
  // Create a canvas that fills the entire browser window
  createCanvas(windowWidth, windowHeight);

  x= width/2;
  y=height/2;
  d=width/2;
  numCircles = 10;
  spacing=d/numCircles
}

function draw() {
  // Set background to black
  background(0);
  d=width/2;
for( i = 0; i<numCircles;i++)
{
 fill(colorPalette[i])
 circle(x,y,d);
 d=d-spacing;
}

  
}
