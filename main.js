nosex=0;
nosey=0;
function preload() {
  mustache = loadImage("https://i.postimg.cc/NG4f14NW/Moostachio.png");
}

function setup() {
    canvas = createCanvas(600, 600);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoded);
    poseNet.on("pose", gotPoses);
}

function draw() {
    image(video, 0,0,600,600);
image( mustache,nosex,nosey,200, 100);
}

function take_snapshot(){
  save('FilteredImage.png');
}

function modelLoded(){
  console.log("model is loded!");
}

function gotPoses(results){
  if (results.length > 0){
console.log(results);
nosex = results[0].pose.nose.x -120;
console.log("X of nose is "+ nosex);
nosey = results[0].pose.nose.y +48;
console.log("Y of nose is"+ nosey);
  }
}
