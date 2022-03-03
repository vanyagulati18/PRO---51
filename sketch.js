
var backgroundImg, bg;
var knightImg, knight;
var enemiesImg, enemy;
var invisibleGround;
function preload() {


  backgroundImg = loadImage("background.jpg")
  knightImg = loadAnimation("assets/image1.png", "assets/image2.png", "assets/image3.png", "assets/image4.png", "assets/image5.png", "assets/image6.png", "assets/image7.png", "assets/image8.png")
  enemiesImg = loadImage("enemies.png")
}

function setup() {
  createCanvas(800, 600);
  bg = createSprite(width / 2, height / 2, width, height)
  bg.addImage(backgroundImg)
  bg.velocityX = -5;
  bg.x = width / 2;


  invisibleGround = createSprite(400, 600, 800, 100)
  invisibleGround.visible = false;



  knight = createSprite(width / 2, height / 2, 40, 40)
  knight.addAnimation("running", knightImg)
  knight.scale = 0.3;

}
function draw() {
  background("black");
  if (bg.x < 300) {
    bg.x = width / 2;
  }
  if (keyDown("space")) {
    knight.velocityY = -10
  }
  knight.velocityY = knight.velocityY + 0.8

  knight.collide(invisibleGround)


  drawSprites()
}

