var  cnv ; //centerCanvas

//interface
let button1, button2, button3;

let s1,s2; //slider
let inp1, inp2, inp3; //colorpicker


let font, points, flag

let colors = ['magenta', 'yellow']// [i] 1.blue 2.yellow

let loopDuration = 4 * 60

function preload() {
  font = loadFont('LeagueSpartan-Bold.otf')
}

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}//centerCanvas


///////////////////////////////setup
function setup() {
  cnv = createCanvas(750, 1080/2). style('display', 'block');
  centerCanvas();//centerCanvas

  ////////////////////////button
  p20 = createP('【TEMPLATE】'). position (140, height-700);
  button1 = createButton('Template 1').position(50, height-650);
  button2 = createButton('Template 2').position(150, height-650);
  button3 = createButton('Template 3').position(250, height-650);

  ////////////////////////slider
  p1 = createP('【STROKE】'). position (150, height-600);
  s3 = createSlider(0, 5, 1, 0). position (50, height-500). size(250);
  p3 = createP('Stroke weight'). position (140, height-500);//stroke
  
  //spacing slider
  p4 = createP('【SPACING】'). position (140, height-450);

  s5 = createSlider(0, 1000, 470, 0). position (50, height-400). size(250);
  p5 = createP('(Mon) ← →'). position (150, height-400);
  s6 = createSlider(0, 1000, 200, 0). position (50, height-350). size(250);
  p6 = createP('(Mon) ↑ ↓'). position (155, height-350);//wave

  //wave slider
  p7 = createP('【WAVE】'). position (150, height-300);

  s2 = createSlider(0, 10, 1.5, 0). position (50, height-250). size(250);
  p2 = createP('Speed'). position (160, height-250);
  s8 = createSlider(0, 100, 10, 0). position (50, height-200). size(250);
  p8 = createP('(M) wave ← →'). position (130, height-200);
  s9 = createSlider(0, 100, 10, 0). position (50, height-150). size(250);
  p9 = createP('(on) wave ← →'). position (130, height-150);//wave

  p0 = createP('√ Press "S" to save the image.png'). position (60, height-100);//save instruction

  ////color picker
  inp1 = createColorPicker('blue') .position(50, height-750).size(50);
  inp1.input(setShade1);
  q3 = createP('Background'). position (120, height-750);

  inp3 = createColorPicker(color('black')).position(50, height -550).size(50);
  inp3.input(setShade2);
  q5 = createP('―'). position (120, height-560);


  setMidShade();

  ///text value
  let text = 'Mon'
  let size = 10


  points = font.textToPoints(text, -2, -6, size, {
    sampleFactor: 10,
    simplifyThreshold: 0
  })
  bounds = font.textBounds(text, 0, 0, size)
  
  for (let i = 0; i < points.length; i++) {
    if (i < points.length - 1) {
      let p1 = createVector(points[i].x, points[i].y)
      let p2 = createVector(points[i + 1].x, points[i + 1].y)
      let diff = p1.dist(p2)
      if (diff > 1) {
        flag = i
        break //flag
      }
    }
  }
}





/////////////////centerCanvas
function windowResized() {
  centerCanvas();
  resizeCanvas (750, 1080/2);
}

////////////////color picker
function setMidShade() {
  // Finding a shade between the two
  let commonShade = lerpColor(inp1.color(), inp3.color(), 0.5);
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
function setShade3() {
  setMidShade();
  console.log('You are choosing shade 3 to be : ', this.value());
}






/////////////////////////draw
function draw() {

  background(inp1.color()) //background /colorpicker
  stroke(inp3.color())
  blendMode(BLEND)
  strokeWeight(s3.value()) //strokeweight /slider

  let scale = 20
  let speed = s2.value() //flag speed/ slider
  for (let k = 0; k < 10; k++) {
    push()
    translate(0, 340 + s6.value() * k) //200s height between text/ slider
    for (let j = 0; j < 3; j++) {
      push()
      translate(90 + j * s5.value(), 0)//470s width between text/ slider
  
      for (let i = 0; i < colors.length; i++) {
        fill(colors[i]) //color picker

        push()
        translate(scale * i, scale * i)
        beginShape()
        points.forEach((p, index) => {
          let x = p.x * scale + sin((10 + (k * 10)) * p.y / bounds.h + millis() / 500 * speed) * (s8.value() + (k * s8.value()))//(10 + (k * 10)flag / M slider
          let y = p.y * scale
          if (index < flag + 1) {
            vertex(x, y)
          }
        })
        beginContour() 
        points.forEach((p, index) => {
          let x = p.x * scale + sin((10 + (k * 10)) * p.y / bounds.h + millis() / 1000 * speed) * (s9.value() + (k * s9.value()))//(10 + (k * 10)flag / on slider
          let y = p.y * scale
          if (index >= flag + 1) {
            vertex(x, y)
          }
        })
        endContour()

        endShape(CLOSE)
        pop()
      }
      pop()
    }
    pop()
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