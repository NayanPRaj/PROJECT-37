var canvas;
var gameState=0;
var contestantCount;
var database ;
var question; 
var contestant ;
var allContestants;

var quiz;

function setup(){
  canvas = createCanvas(850,400);

 quiz=new Quiz();
  quiz.getState();
  quiz.start();

  database=firebase.database();
}


function draw(){
  background("pink");

  
}
