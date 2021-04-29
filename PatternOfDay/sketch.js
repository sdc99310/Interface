function setup() {
  createCanvas(windowWidth, windowHeight);
  background(350);
}

function draw(){

  translate(width/2, height/2); //trasnlate x,y to the center

  let mx = mouseX - width/2;
  let my = mouseY - height/2;
  let pmx = pmouseX - width/2;
  let pmy = pmouseY - height/2; //mouse position relative to the center

  if (mouseIsPressed) {
    stroke(0);

    for (let i=0; i<10; i++) { //repeat 6 times

    let d = dist(mouseX, mouseY, pmouseX, mouseY);
    let sw = map(d, 0, 20, 20, 1); //<1 is strokeWeight
    strokeWeight(sw);
    line(mouseX, mouseY, pmouseX, pmouseY);

    }
  }


}

  