//variables
    var cat, cat_img1, cat_img2, cat_img3, cat_img4;
    var mouse, mouse_img1, mouse_img2, mouse_img3;
    var bg; 

function preload() {
    //background
    bg = loadImage('images/garden.png');

    //mouse images
    mouse_img1 = loadImage('images/jerryOne.png');
    mouse_img2 = loadAnimation('images/jerryTwo.png','images/jerryThree.png');
    mouse_img3 = loadImage('images/jerryFour.png');

    //cat images
    cat_img1 = loadImage('images/tomOne.png');
    cat_img2 = loadImage('images/tomFour.png')
    cat_img3 = loadAnimation('images/tomThree.png','images/tomTwo.png');
}

function setup(){
    createCanvas(1000,800);
    //tom and jerry sprites
    cat = createSprite(750,600,500,400);
    cat.addAnimation('cat',cat_img1);
    cat.scale = 0.1

    mouse = createSprite(250,600,500,400);
    mouse.addAnimation('mouse',mouse_img1);
    mouse.scale = 0.1
}

function draw() {

    background(bg);

    //Write condition here to evalute if tom and jerry collide

    if((cat.x - mouse.x < 100) &&
    (mouse.x - cat.x < 100)){
        cat.addAnimation('lost',cat_img2);
        mouse.addAnimation('win',mouse_img3);
        cat.changeAnimation('lost');
        mouse.changeAnimation('win');
        cat.velocityX = 0;
    }


    /*cat.debug = true;
    mouse.debug = true;
    mouse.setCollider('circle',0,0,500);
    cat.setCollider('circle',0,0,700);*/

    console.log(cat.x);

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
    cat.velocityX = -5;
    cat.addAnimation('catrunning',cat_img3);
    cat.changeAnimation('catrunning');
    mouse.addAnimation('teasing',mouse_img2);
    mouse.changeAnimation('teasing');

  }


}
