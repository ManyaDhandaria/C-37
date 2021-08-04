var  canvas, backgroundImage ,database;
var gameState=0;
var playercount;
var form,game,player;
function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(400,400);
  game=new Game();
  game.getState();
  game.start();

  
}

function draw(){
  background("white");
    if(playerCount==4){
      game.update(1);
    }
    if(gameState==1){
     clear();
      game.play();
    }
    drawSprites();
  
}
