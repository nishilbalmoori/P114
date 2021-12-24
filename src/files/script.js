var capture;
var canvas;
var noseX;
var noseY;

function preload(){
    clown_nose = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}       
function setup(){
    canvas = createCanvas(400,400);
    canvas.center();
    capture = createCapture(VIDEO); 
    capture.size(320,240);
    capture.hide();

    poseNet = ml5.poseNet(capture, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function take_snapshot(){
    console.log("Took Snapshot!");
    save('fimg.png');
}
function modelLoaded(){
    console.log("model loaded")
}
function gotPoses(results){
    if(results.length >  0){
        console.log(results)
        noseX = results[0].pose.nose.x-40;
        noseY = results[0].pose.nose.y;
    }
}
function draw(){
    image(capture,0,0,320,240);
    image(clown_nose, noseX,noseY, 80,35);
}