class Car 
{
  constructor(tempC, tempXpos, tempYpos, tempXspeed)
  {
    this.c = tempC;
    this.xpos = tempXpos;
    this.ypos = tempYpos;
    this.xspeed = tempXspeed;
  }

display()
  {
    push();
    stroke(0);
    fill(this.c);
    rectMode(CENTER);
    rect(this.ypos, this.xpos, 10, 30); // swap xpos and y pos for vertical, swap 10 and 30 to change rectangle shape/direction
    pop();
  }
  
drive()
  {
    this.xpos = this.xpos + this.xspeed;
    if (this.xpos > width)
    {
        this.xpos = 0; 
    }
  }
}

let myCar1;
let myCar2;
let myCar3;


function setup()
{
createCanvas(400, 400);
  myCar1 = new Car(color(255, 0, 0), 0, width/2, 1); 
  myCar2 = new Car(color(49, 2, 240), 0, width/2 - width/4, 2); 
  myCar3 = new Car(color(16, 232, 25), 0, width/2 + width/4, 1.5); 
}

function draw()
{
 background(0);

   stroke(250, 242, 8);
   strokeWeight(5);
   for (let i = 0; i < height; i = i + 60)
   {
        line(width/2 + 50, i, width/2 + 50, i + 20);
        line(width/2 - 50, i, width/2 - 50, i + 20);
   }
   stroke(0);
   strokeWeight(1);

 fill(28, 134, 12);
 rect(0, 0, 50, height);
 rect(350, 0, 100, height);

 myCar1.drive();
 myCar1.display();
 
 myCar2.drive();
 myCar2.display();
 
 myCar3.drive();
 myCar3.display();
}
