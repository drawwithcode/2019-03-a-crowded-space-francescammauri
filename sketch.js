
var happyTurkey = [];




function setup() {
  createCanvas(windowWidth, windowHeight);
	background("#3abeff");

  for (var i=0; i<30; i++) {
  var  myTurkey = new turkey(random(0,width),-100, 100, 100);

    happyTurkey.push(myTurkey);

}

}

function draw() {
	background("#3abeff");
// text
stroke("orange")
  text("I would like it fried", 575, 300)
  textSize(32);
  textFont("Helvetica")

for (var a=0; a<happyTurkey.length; a++) {
  happyTurkey[a].display();
  happyTurkey[a].move();
}
}

// flying eggs
 function turkey (_x, _y, _width, _height) {

   this.x = _x;
   this.y = _y;
   this.width = _width;
   this.height = _height;
   this.speed_y = random (3,5);

   this.move = function() {
     this.y += this.speed_y;
     if (this.y > height) {
       this.y = _y;
     }
   }
//eggs
   this.display = function () {
     fill("white");
     noStroke();
     ellipse (this.x, this.y, this.width, this.height);
     fill("#ffd963")
     ellipse(this.x, this.y,this.width/3, this.height/3);


   }



 }
