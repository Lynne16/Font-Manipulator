function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,500);
    canvas.position(560,100);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('Model Loaded!');
}

function gotPoses(results){
    if(results.length > 0){

        console.log(results);

        LeftwristX=results[0].pose.leftWrist.x;
        RightwristX=results[0].pose.rightWrist.x;
        console.log("X postion of the Leftwrist "+LeftwristX+" X position of the Rightwrist "+RightwristX);

        difference=floor(LeftwristX-RightwristX);
    }
}

function draw(){
    background('#e39df5');
    textSize(difference);
    fill('#000000')
    text('Lynne',50,400)
}