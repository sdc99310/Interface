var  cnv ; //centerCanvas

//interface
let s1,s2,s3,s4,s5,s6,s7,s8,s9; //slider
let inp1, inp2; //colorpicker
// let savebutton;


let pg
let font
let rgba = ['rgba(255, 0, 0, 0.9)', 'rgba(0, 255, 0, 0.9)', 'rgba(0, 0, 255, 0.9)']
let textSize = 100
let posOffset = 10
let sizeOffset = 50
let tiles = 100
let tileSize
let loopDuration = 2 * 90

function preload() {
  font = loadFont('LeagueSpartan-Bold.otf')
}



function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}//centerCanvas

function setup() {

  cnv = createCanvas(1500, windowHeight). style('display', 'block');
  centerCanvas();//centerCanvas

  ////Tues-slider
  p0 = createP('【Tues-】'). position (155, height-600);//text size
  s1 = createSlider(100, 1000, 500, 100). position (50, height-550). size(250);
  p1 = createP('Text size'). position (150, height-550);//text size
  
  s2 = createSlider(-10, 1500, 20, 0). position (50, height-500). size(250);
  p2 = createP('Shadow 1: ← →'). position (130, height-500);
  s3 = createSlider(-10, 1080, 10, 0). position (50, height-450). size(250);
  p3 = createP('Shadow 1: ↑ ↓'). position (130, height-450);//shadow 1

  s4 = createSlider(-10, 1500, 2, 0). position (50, height-400). size(250);
  p4 = createP('Shadow 2: ← →'). position (130, height-400);
  s5 = createSlider(-10, 1080, 2, 0). position (50, height-350). size(250);
  p5 = createP('Shadow 2: ↑ ↓'). position (130, height-350);//shadow 2

  ////day-slider
  p6 = createP('【day】'). position (155, height-300);
  s7 = createSlider(100, 1000, 500, 100). position (50, height-250). size(250);
  p7 = createP('Text size'). position (150, height-250);//text size

  s8 = createSlider(-150, 900, -100, 900). position (50, height-200). size(250);
  p8 = createP('Move ← →'). position (150, height-200);
  s9 = createSlider(0, 1080, 500, 0). position (50, height-150). size(250);
  p9 = createP('Move ↑ ↓'). position (150, height-150);//shadow 2

  p10 = createP('√ Press "S" to save the image.png'). position (60, height-100);//save instruction

  // savebutton = createButton('save');
  // savebutton.position(150, height-100);
  // savebutton.mousePressed(saveImage);



  ////color picker
  inp1 = createColorPicker('white') .position(50, height-700).size(50);
  inp1.input(setShade1);
  q3 = createP('Background'). position (120, height-700);

  inp2 = createColorPicker(color('blue')).position(50, height -650).size(50);
  inp2.input(setShade2);
  q4 = createP('Tues-'). position (120, height-650);

  setMidShade();

  
  // Throttle frame rate for performance
  frameRate(30)
}
///////////////////////////////////////////////function
// ///save canvas button
// function saveImage(){
//   saveCanvas("Tuesday","png")
// }

///////////////////color picker
function setMidShade() {
  // Finding a shade between the two
  let commonShade = lerpColor(inp1.color(), inp2.color(), 0.5);
  fill(commonShade);
  rect(20, 20, 60, 60);
}

function setShade1() {
  setMidShade();
  console.log('You are choosing shade 1 to be : ', this.value());
}
function setShade2() {
  setMidShade();
  console.log('You are choosing shade 2 to be : ', this.value());
}
/////////////////centerCanvas

function windowResized() {
  centerCanvas();
  resizeCanvas (1500, windowHeight );
}

/////draw
function draw() {
  
  background(inp1.color());


  pg = createGraphics(width, height)
  pg.textFont(font)
  pg.textAlign(CENTER)
  pg.blendMode(SCREEN)
  pg.translate(width / 2, height / 3)
  pg.textSize(s1.value())
  push()
  pg.fill(inp2.color())
  pg.text('Tues-', -4, -4)
  pop()
  pg.fill(rgba[1])
  pg.text('Tues-', 20 ,10)
  pg.fill(rgba[1])
  pg.text('Tues-', s2.value() ,s3.value())
  pg.fill(rgba[2])
  pg.text('Tues-', 2, 2)
  pg.fill(rgba[2])
  pg.text('Tues-', s4.value() ,s5.value())

  pg.textSize(s7.value())
  // pg.textAlign(RIGHT)
  pg.fill(rgba[0])
  pg.text('day', s8.value(), s9.value())
  pg.fill(rgba[1])
  pg.text('day', s8.value()-20, s9.value()+4)
  pg.fill(rgba[2])
  pg.text('day', s8.value()-30, s9.value()+8)

  tileSize = width / tiles


  let currentFrame = frameCount % loopDuration
  let t = currentFrame / loopDuration
  let u = map(t, 0, 1, 0, PI)
  
  for (let y = 0; y < tiles; y++) {
  	for (let x = 0; x < tiles; x++) {
      
      const waveX = sin(currentFrame * 0.02 * ( x * y ) * 0.01) * 100
      const waveY = cos(currentFrame * 0.02 * ( x * y ) * 0.01) * 100
      
      const sx = x * tileSize + waveX * sin(u)
      const sy = y * tileSize + waveY * sin(u)
      const sw = tileSize
      const sh = tileSize 

      const dx = x * tileSize 
      const dy = y * tileSize
      const dw = tileSize
      const dh = tileSize
      
      image(pg, dx, dy, dw, dh, sx, sy, sw, sh)
    }
  }
}

function keyPressed(){
  //if the key is a s
  if(key == 's'){
    //save out to a file
    saveCanvas('Tuesday.png');
  }
}



//work sited
//https://p5js.org/ko/reference/#/p5/createColorPicker
//https://p5js.org/ko/reference/#/p5/createSlider
//https://www.youtube.com/watch?v=Evchr6a1lxY&t=519s