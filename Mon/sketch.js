

  var letter = "MONDAY";

  function setup(){
    createCanvas(780, 900);
    background(255);
    stroke(255,0,255);
    noFill();
    textFont("Arial");
    textSize(12);
    textAlign(CENTER, CENTER);
  }
  
  function mouseMoved(){
    background(255);
    noStroke();
    fill(255,0,255);
    textSize((mouseX-width/2)*5+1);
    text(letter, mouseX, mouseY);
  }
  
  function mouseMoved(){
  
    stroke(255,0,255);
    noFill();
    textSize((mouseX-width/2)*5+1);
    text(letter, mouseX, mouseY);
  }
  

  function keyPressed() {
    if (keyCode == CONTROL) save("P_3_0_01.png");
  }
  
  function keyTyped(){
        letter = str(key);
    
  }











//////sources, references, work cited