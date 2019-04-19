/*
* credits:
   > Rolemusic: http://freemusicarchive.org/music/Rolemusic/
   > bgm: http://freemusicarchive.org/music/Rolemusic/~/May_1871
*/

// function preload() {
//    Game.assets.fonts.baby_blocks = loadImage("../assets/fonts/baby_blocks.ttf");
// }


function setup() {
   preload_assets();

   createCanvas(document.body.clientWidth, window.innerHeight);
   masterVolume(0.5);
   angleMode(DEGREES);
   ellipseMode(RADIUS);
   imageMode(CENTER);
   textAlign(CENTER, CENTER);
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