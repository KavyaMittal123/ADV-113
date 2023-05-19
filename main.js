function preload(){}

function setup(){
    canvas= createCanvas(600,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 100, 100, 400, 200);
    fill(255,0,0);
    stroke(255,0,0);
    circle(100,100,50);
    circle(500,285,50);
    circle(500,100,50);
    circle(100,285,50);
}