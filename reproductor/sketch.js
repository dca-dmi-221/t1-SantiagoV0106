var song;
var button;

//function preload(){
  //song = loadSound("songsname");
//}

function setup() {
  createCanvas(800, 500);
  song = loadSound("songsname");
  button = createButton("play");
  button.mousePressed(togglePlaying);
  background(50);

}


function togglePlaying(){
  song.play();
}

function draw() {
  background(255,0,0);
}
