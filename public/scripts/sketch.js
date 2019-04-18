/*
* credits:
   > Rolemusic: http://freemusicarchive.org/music/Rolemusic/
   > bgm: http://freemusicarchive.org/music/Rolemusic/~/May_1871
*/



function setup() {
   preload_assets();
   
   createCanvas(document.body.clientWidth, window.innerHeight);
   angleMode(DEGREES);
   ellipseMode(RADIUS);
   imageMode(CENTER);
   rectMode(RADIUS);
   noStroke();
}

function draw() {
   switch (Game.preloaded) {
      case false:
         background(29, 44, 66);
         stroke(255);
         noFill();
         rect(width / 2, height * 3 / 4, 200, 20);

         noStroke();
         fill(255, 100);
         rect(width / 2, height * 3 / 4, 200 * Game.preload.progress / Game.preload.paths.length, 20);
         break;

      default:
         play_game();
   }
}

function windowResized() {
   resizeCanvas(document.body.clientWidth, window.innerHeight);
}