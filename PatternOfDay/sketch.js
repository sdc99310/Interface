let symmetry = 12;


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  background(350);
  translate(width/2, height/2);
  stroke(0, 0, 0);

  let angle = 360/ symmetry;
    for (let i=0; i<symmetry; i++) { //repeat drawing 10 times
      rotate(angle);
      line(0, 0,width, 0);
    }

}

function draw(){

  translate(width/2, height/2); //trasnlate x,y to the center

  let mx = mouseX - width/2;
  let my = mouseY - height/2;
  let pmx = pmouseX - width/2;
  let pmy = pmouseY - height/2; //mouse position relative to the center

  if (mouseIsPressed) {
    stroke(0, 100);

    let angle = 360/12;
    for (let i=0; i<12; i++) { //repeat drawing 10 times
      rotate(i*60)

    let d = dist(mx, my, pmx, pmy);
    let sw = map(d, 0, 20, 20, 10); //<1 is strokeWeight
    strokeWeight(sw);
    line(mx, my, pmx, pmy);

    }
  }


}

  