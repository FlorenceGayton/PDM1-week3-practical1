let fillColour;
let X = 300;
let Y = 300;



function setup() {
    createCanvas(600, 600);
    fillColour = 0;
}

function draw() {
    background(0)
    if(keyIsPressed === true){
        if (keyCode === UP_ARROW){ 
            Y = Y - 5;
        }
        else if (keyCode === DOWN_ARROW){ 
            Y = Y + 5;
        }
        else if (keyCode === RIGHT_ARROW){ 
            X = X + 5;
        }
        else if (keyCode === LEFT_ARROW){ 
            X = X - 5;
        }
    }     
    fill(fillColour);
    rectMode(CENTER);
    square(X, Y, width - 50);

}

function mouseReleased(){
    fillColour = color(random(255), random(255), random(255)); 
}
