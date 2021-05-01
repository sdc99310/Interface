var  cnv ; //centerCanvas

//interface
let s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11,s12,s13,s14,s15,s16,s17,s18; //slider
let inp1, inp2, inp3, inp4, inp5, inp6, inp7; //colorpicker
// let savebutton;

let graphic
let font
let canvas

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}//centerCanvas


function preload() {
  font = loadFont('LeagueSpartan-Bold.otf')
}
////////////setup
function setup() {
  cnv = createCanvas(750, windowHeight). style('display', 'block');
  centerCanvas();//centerCanvas

 ////////////////////////button
//  p20 = createP('【TEMPLATE】'). position (135, height-1220);
 button1 = createButton('Template 1').position(50, height-800);
 button2 = createButton('Template 2').position(50, height-770);
 button3 = createButton('Template 3').position(50, height-740);

////Wednse-slider
p0 = createP('【Wednse】'). position (125, height-730);

s1 = createSlider(100, 1000, 200, 100). position (50, height-620). size(110,10);//740
p1 = createP('Text size'). position (80, height-620);//text size
s2 = createSlider(0, 1000, 400, 0). position (170, height-620). size(110,10);
p2 = createP('Text: ↑ ↓'). position (200, height-620);

s3 = createSlider(0, 1000, 400, 0). position (50, height-570). size(110,10);
p3 = createP('Shadow 1: ↑ ↓'). position (60, height-570);
s4 = createSlider(0, 1000, 390, 0). position (170, height-570). size(110,10);
p4 = createP('Shadow 2: ↑ ↓'). position (180, height-570);//position  //590

////day-slider
p4 = createP('【day】'). position (140, height-520); //540

s6 = createSlider(0, 1200, 350, 0). position (50, height-400). size(110,10);//430
p6 = createP('Text size'). position (80, height-400);//text size

s7 = createSlider(100, 1800, 650, 100). position (170, height-400). size(110,10);
p7 = createP('Text: ↑ ↓'). position (200, height-400);//text size
s8 = createSlider(100, 1800, 700, 100). position (50, height-350). size(110,10);
p8 = createP('Shadow 1: ↑ ↓'). position (60, height-350);
s9 = createSlider(100, 1800, 700, 100). position (170, height-350). size(110,10);
p9 = createP('Shadow 2: ↑ ↓'). position (180, height-350);//shadow 2

////tile
p11 = createP('【Tile】'). position (145, height-300);

s12 = createSlider(0, 100, 20, 0). position (50, height-250). size(230,10);
p12 = createP('Size'). position (155, height-250);//tile size

s13 = createSlider(10, 200, 20, 10). position (50, height-200). size(110,10);
p13 = createP('Distortion X'). position (70, height-200);
s14 = createSlider(10, 200, 30, 10). position (170, height-200). size(110,10);
p14 = createP('Distortion Y'). position (190, height-200);//Distortion

s15 = createSlider(0, 200, 10, 0). position (50, height-150). size(110,10);
p15 = createP('Width'). position (90, height-150);
s16 = createSlider(0, 200, 0, 0). position (170, height-150). size(110,10);
p16 = createP('Height'). position (205, height-150);

s17 = createSlider(0, 50, 1, 0). position (50, height-100). size(110,10);
p17 = createP('Slice X'). position (85, height-100);//shadow 2
s18 = createSlider(0, 50, 1, 0). position (170, height-100). size(110,10);
p18 = createP('Slice Y'). position (205, height-100);//shadow 2

p10 = createP('√ Press "S" to save the image.png'). position (55, height-60);//save instructio


///color picker
  inp1 = createColorPicker('black') .position(50, height-840).size(75);
  inp1.input(setShade1);
  q3 = createP('Background'). position (140, height-846);

  //wednse color
  inp2 = createColorPicker(color('rgba(255, 0, 0, 0.9)')).position(50, height -680).size(50);
  inp2.input(setShade2);
  q4 = createP('Text'). position (65, height-665);

  inp3 = createColorPicker(color('rgba(0, 255, 0, 0.9)')).position(135, height-680).size(50);
  inp3.input(setShade2);
  q5 = createP('Shadow 1'). position (135, height-665);

  inp4 = createColorPicker(color('rgba(0, 0, 255, 0.9)')).position(220, height -680).size(50);
  inp4.input(setShade2);
  q5 = createP('Shadow 2'). position (220, height-665);

  //day color

  inp5 = createColorPicker(color('rgba(255, 0, 0, 0.9)')).position(50, height -465).size(50);
  inp5.input(setShade2);
  q6 = createP('Text'). position (65, height-450);

  inp6 = createColorPicker(color('rgba(0, 255, 0, 0.9)')).position(135, height -465).size(50);
  inp6.input(setShade2);
  q7 = createP('Shadow 1'). position (135, height-450);

  inp7 = createColorPicker(color('rgba(0, 0, 255, 0.9)')).position(220, height -465).size(50);
  inp7.input(setShade2);
  q8 = createP('Shadow 2'). position (220, height-450);


  setMidShade();


}

const loopDuration = 3 * 60 //speed slider

///////////////////color picker
function setMidShade() {
  // Finding a shade between the two
  let commonShade = lerpColor(inp1.color(), inp2.color(), 0.5);
  // let commonShade = lerpColor(inp1.color(), inp2.color(),
  //                    inp3.color(), inp4.color(), inp5.color(),
  //                    inp6.color(), inp7.color(), 0.5);
  // fill(commonShade);
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
  resizeCanvas (750, windowHeight );
}

function draw() {
  
  let currentFrame = frameCount % loopDuration
  let t = currentFrame / loopDuration
  let u = map(t, 0, 1, 0, 2 * PI)

  background(inp1.color()) //color picker

  ////////text
  // create offscreen graphics buffer
  graphic = createGraphics(width, height)
  
  // type setup offscreen in buffer
  graphic.textFont(font)
  graphic.textAlign(CENTER, CENTER)
  graphic.blendMode(SCREEN)

  //wed
  graphic.textSize(s1.value())// textsize1 
  graphic.fill(inp2.color()) //color picker1
  graphic.text('Wednse', width / 2, s2.value()) //position slider1
  graphic.textSize(s1.value()-100)// textsize-100
  graphic.fill(inp3.color())//color picker2
  graphic.text('Wednse', width / 1.95, s3.value()) //position slider2
  graphic.textSize(s1.value()-200)// textsize-200
  graphic.fill(inp4.color())//color picker3
  graphic.text('Wednse', width / 2, s4.value()) //position slider3

  //day
  graphic.textSize(s6.value())
  graphic.fill(inp5.color())
  graphic.text('day', width / 2, s7.value()) 
  graphic.textSize(s6.value()-100)
  graphic.fill(inp6.color())
  graphic.text('day', width / 1.95, s8.value())
  graphic.textSize(s6.value()-200)
  graphic.fill(inp7.color())
  graphic.text('day', width / 2.05, s9.value()) 
  
  const tiles = s12.value() //tile num/ slider
  const tileSize = width / tiles
  
  // loop over each tile
  for (let x = 0; x < tiles; x++) {
    for (let y = 0; y < tiles; y++) {
      
      const distortionX = cos(u + x * 0.5) * s13.value() //distortionX /slider
      const distortionY = sin(u + y * 0.5) * s14.value() //distortionY /slider
      
      // think of this as applying the grid to the source in the graphics buffer
      const sx = x * tileSize + distortionX
      const sy = y * tileSize + distortionY +100
      const sw = tileSize + distortionX + s15.value()// tile width //slider
      const sh = tileSize + distortionY + s16.value() //tile height //slider

      // and this as applying the grid to the destination on the canvas
      const dx = x * tileSize 
      const dy = y * tileSize
      const dw = tileSize /s17.value() // slice vertical the word //slider
      const dh = tileSize /s18.value() //slice horizantal the word //slider

      // grided image from buffer into main canvas
      image(graphic, dx, dy, dw, dh, sx, sy, sw, sh)
    }
  }
  
}

function keyPressed(){
  //if the key is a s
  if(key == 's'){
    //save out to a file
    saveCanvas('Wednesday.png');
  }
}