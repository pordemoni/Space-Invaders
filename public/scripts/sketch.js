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

   spawn_stars(50);
}

function draw() {

   switch (Game.preloaded) {
      case false:
         display_loading();
         break;

      default:
         play_game();
   }
}

function windowResized() {
   resizeCanvas(document.body.clientWidth, window.innerHeight);
}