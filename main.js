nose_x=0;

nose_y=0;

function preload(){};

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
video.size(0,0,300,300);
video.hide();
poseNet=ml5.poseNet(video,model_loaded);
poseNet.on('pose',gotposes);
}

function model_loaded(){
console.log("model is loaded");
}

function gotposes(result){
if(result.length>0){
    console.log(result);
console.log("nose_x=",result[0].pose.nose.x);
console.log("nose_y=",result[0].pose.nose.y);
}
}

function draw(){
image(video,0,0,300,300);
}

function take_snapshot(){
    save('filters.png');
}