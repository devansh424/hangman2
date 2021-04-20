var words=["hello","hi","devansh","bronze"];
var word = words[Math.floor(Math.random()*words.length)];
var answerArray=[];
var clickSound;
let button;

function preload(){
  clickSound=loadSound("sound/clickbutton.mp3");
}

function setup () {
  createCanvas(600,600);
  background("pink");
  
 
  var j = 65;
  for(var i = 150; i < 450; i=i+30){
    button = createButton(String.fromCharCode(j));
    button.position(i,400);
    button.mousePressed(sound);
    button.mousePressed(()=>{ Press(String.fromCharCode(j))})
    button.mousePressed(checkLetter(String.fromCharCode(j)));
    j++;
  }
  
  for(var i = 150; i < 450; i=i+30){
    button = createButton(String.fromCharCode(j));
    button.position(i,430);
    button.mousePressed(sound);
    button.mousePressed(()=>{ Press(String.fromCharCode(j))})
    button.mousePressed(checkLetter(String.fromCharCode(j)));
    j++;
  }
  
  for(var i = 210; i < 390; i=i+30){
    button = createButton(String.fromCharCode(j));
    button.position(i,460);
    button.mousePressed(sound);
    button.mousePressed(()=>{ Press(String.fromCharCode(j))})
    button.mousePressed(checkLetter(String.fromCharCode(j)));
    j++;
  }
}

function draw () {

 stroke("gray");
 line(250,100,250,350);//gallows
 line(250,100,300,100);//top line
 line(200,350,350,350);//base line
 line(300,100,300,150);//rope

 fill("pink");
 circle(300,160,50);//head
 fill(255);
 line(300,185,300,260);//body
 line(300,195,280,250);//left hand
 line(300,195,320,250);//right hand
 line(300,255,280,320);//left leg
 line(300,255,320,320);//right leg
 
}

function Press(){
  console.log(words.length);
}

function checkLetter(letter){
  for(var i = 0; i < word.length; i++){
    answerArray[i]="_";
    text("_",i*20+220,370);
      if(word[i]===letter){
        console.log(word[i]);
    }
  }
}

function sound(){
  clickSound.play();
}