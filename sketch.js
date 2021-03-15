var canvas;
var movingRect, fixedRect;
var body1,body2;
function preload(){
    
}


function setup(){
    canvas = createCanvas(800,600);

    //create 2 different surfaces
    fixedRect = createSprite(500,500,60,40);
    fixedRect.shapeColor = "cyan";
    fixedRect.debug = true;
    movingRect = createSprite(500,100,30,60);
    movingRect.shapeColor = "crimson";
    movingRect.velocityY = 4;
    movingRect.debug = true;
    //create box sprite and give velocity
    body1 = createSprite(200,300,60,40);
    body1.shapeColor = "purple";
    body1.setVelocity(5,0);
    body2 = createSprite(400,300,20,60);
    body2.shapeColor = "yellow"
    body2.setVelocity(-3,0);

}

function draw() {
    background(rgb(222,169,119));

    // movingRect.x = mouseX;
    // movingRect.y = mouseY;
    console.log(fixedRect.x-movingRect.x);

    edges = createEdgeSprites();
    movingRect.bounceOff(edges);
    fixedRect.bounceOff(edges);
    body1.bounceOff(edges);
    body2.bounceOff(edges);
    
    //Detection of Touch
    if(touching(movingRect,fixedRect)){
        movingRect.shapeColor = "green";
        fixedRect.shapeColor = "green";
    }
    else{
        movingRect.shapeColor = "crimson";
        fixedRect.shapeColor = "cyan";
    }

    // if(fixedRect.x-movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
    //     movingRect.x-fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
    //     fixedRect.y-movingRect.y < fixedRect.height/2 + movingRect.height/2 &&
    //     movingRect.y-fixedRect.y < fixedRect.height/2 + movingRect.height/2 ){
    //     movingRect.shapeColor = "green";
    // }
    // else{
    //     movingRect.shapeColor = "crimson";
    // }

    //BounceOff
    bouncing(body1,body2);
    

    //add condition to check if box touching surface and make it box
    drawSprites();
}

function touching(a,b){
    if(a.x-b.x < a.width/2 + b.width/2 &&
        b.x-a.x < a.width/2 + b.width/2 &&
        a.y-b.y < a.height/2 + b.height/2 &&
        b.y-a.y < a.height/2 + b.height/2 ){
        //movingRect.shapeColor = "green";
        return(true);
    }
    else{
        //movingRect.shapeColor = "crimson";
        return(false);
    }
}

function bouncing(a,b){
    if(a.y - b.y < (a.height + b.height)/2 &&
    b.y - a.y < (a.height + b.height)/2 &&
    a.x - b.x < (a.width + b.width)/2 &&
    b.x - a.x < (a.width + b.width)/2){
        // b.setVelocity(3,0)
        a.velocityY = -a.velocityY;
        a.velocityX = -a.velocityX;
        b.velocityX = -b.velocityX;
        b.velocityY = -b.velocityY;
        return(true);
    }
    else{
        return(false);
    }
}