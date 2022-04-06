songs = [];
songs2 = [];
let ps = false;
let screenstart;
let screen1;
let screen2;
let pantalla = 1;
i = 0;

function preload() {
  screenstart = loadImage("imagenes/Frame 3start.jpg");
  screen1 = loadImage("imagenes/Frame 1.jpg");
  screen2 = loadImage("imagenes/Frame 2.jpg");

  songs[0] = loadSound("canciones/song1.mp3.mp3");
  songs[1] = loadSound("canciones/song2.mp3.mp3");
  songs[2] = loadSound("canciones/song3.mp3.mp3");
  songs[3] = loadSound("canciones/song4.mp3.mp3");
  songs[4] = loadSound("canciones/song5.mp3.mp3");
  songs[5] = loadSound("canciones/song6.mp3.mp3");
  songs2[0] = loadSound("canciones/song11.mp3.mp3");
  songs2[1] = loadSound("canciones/song22.mp3.mp3");
  songs2[2] = loadSound("canciones/song33.mp3.mp3");
  songs2[3] = loadSound("canciones/song44.mp3.mp3");
  songs2[4] = loadSound("canciones/song55.mp3.mp3");
  songs2[5] = loadSound("canciones/song66.mp3.mp3");

}



function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background("white");

  if (pantalla == 1) {
    image(screenstart, 100, 100, 1200, 720);

  }
  else if (pantalla == 2) {
    image(screen1, 100, 100, 1200, 720);
    text("Click up",100,600)
  }
  
  else if (pantalla == 3) {
    image(screen2, 100, 100, 1200, 720)
    text("Click up",98,558)
  }
  
  //no logré crear bien los sliders, se dañaba el programa o no se pintaban
  //no se puede añadir nuevas canciones ni playlists :(

  // para ver coordenadas text("x:" + mouseX + " y: " + mouseY, mouseX, mouseY);
}

function mouseClicked(screenstart) {
  if (screenstart, mouseX < width / 2 && pantalla == 1) {
    pantalla = 2;
  }
  if (mouseX < 200 && mouseX > 100 && mouseY < 584 && mouseY > 370 && pantalla == 2) {
    pantalla = 3
    i = 0
  }
  else if (mouseX < 200 && mouseX > 100 && mouseY < 584 && mouseY > 370 && pantalla == 3) {
    pantalla = 2
    i = 0
  }
  if (mouseX < 470 && mouseX > 430 && mouseY < 680 && mouseY > 641 && ps == false) {
    Play();
  }
  else if (mouseX < 470 && mouseX > 430 && mouseY < 680 && mouseY > 641 && ps) {
    Stop();
  }
  if (mouseX < 518 && mouseX > 508 && mouseY < 667 && mouseY > 653) {
    Next();
  }
  if (mouseX < 397 && mouseX > 387 && mouseY < 667 && mouseY > 653) {
    Back();
  }
}


function Play() {
  if (pantalla == 2) {
    songs[i].play();

  }
  else if (pantalla == 3) {
    songs2[i].play();
  }
  ps = true
}

function Stop() {
  if (pantalla == 2) {
    songs[i].stop();

  }
  else if (pantalla == 3) {
    songs2[i].stop();
  }
  ps = false
}
function Next() {
  if (pantalla == 2) {

    Stop();
    if (i < songs.length - 1) {
      i += 1;
    }
    else {
      i = 0;
    }
    Play();

  }
  else if (pantalla == 3) {
    Stop();
    if (i < songs2.length - 1) {
      i += 1;
    }
    else {
      i = 0;
    }
    Play();

  }

}
function Back() {
  if (pantalla == 2) {

    Stop();
    if (i > 0) {
      i -= 1;
    }
    else {
      i = songs.length - 1;
    }
    Play();

  }
  else if (pantalla == 3) {
    Stop();
    if (i > 0) {
      i -= 1;
    }
    else {
      i = songs2.length - 1;
    }
    Play();

  }


}