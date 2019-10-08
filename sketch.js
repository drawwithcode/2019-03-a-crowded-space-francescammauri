
var happyTurkey = [];




function setup() {
  createCanvas(windowWidth, windowHeight);


  for (var i=0; i<30; i++) {
  var  myTurkey = new turkey(random(0,width),-100, 100, 100);

    happyTurkey.push(myTurkey);

}

}

function draw() {
	//Sky color
	background("#DADADA");
  text("FREE IT", 700, 300)
  textSize(32);
  textFont("Helvetica")
for (var a=0; a<happyTurkey.length; a++) {
  happyTurkey[a].display();
  happyTurkey[a].move();
}
}

// flying turkeys
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
//nipples
   this.display = function () {
     fill("pink");
     noStroke();
     ellipse (this.x, this.y, this.width, this.height);
     fill("brown")
     ellipse(this.x, this.y,this.width/7, this.height/7);
     fill("#3e1c00")
     ellipse(this.x, this.y,this.width/12, this.height/12);

   }



 }
