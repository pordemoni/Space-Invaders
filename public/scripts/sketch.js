/*
* credits:
   > Rolemusic: http://freemusicarchive.org/music/Rolemusic/
   > bgm: http://freemusicarchive.org/music/Rolemusic/~/May_1871
*/

function preload() {
   images.player = loadImage("../assets/images/spaceship-player.png");
   images.enemy.black = loadImage("../assets/images/spaceship-enemy-black.png");
   images.enemy.red = loadImage("../assets/images/spaceship-enemy-red.png");
   bgm.track = loadSound("../assets/audio/bgm/rolemusic_may.mp3");
   sfx.player.laser = loadSound("../assets/audio/sfx/player_laser.wav");
   sfx.enemy.missile = loadSound("../assets/audio/sfx/enemy_missile.wav");
   sfx.player.crash = loadSound("../assets/audio/sfx/player_hit.wav");
   sfx.enemy.crash = loadSound("../assets/audio/sfx/enemy_hit.wav");
}

function setup() {
   createCanvas(document.body.clientWidth, window.innerHeight);
   angleMode(DEGREES);
   ellipseMode(RADIUS);
   imageMode(CENTER);
   rectMode(RADIUS);
   noStroke();

   if (bgm.state) {
      bgm.track.loop();
   }

   player = new Player(createVector(width / 2, height + 20));

   spawn_platoons("TRENCH", settings.trench.count);
   spawn_stars(50);
}

function draw() {
   background(29, 44, 66);

   stars.forEach(star => {
      star.render();
      star.update();
   });

   textSize(32);
   fill(0, 255, 0);
   text(player.HP.current, 20, 40);

   fill(255, 255, 0);
   text(score, 140, 40);



   // * Projectiles
   projectiles.forEach(projectile => {
      projectile.render();
      projectile.set_direction();
      projectile.check_edges();
      projectile.check_collision();

      if (projectile.exploded) despawn(projectile, projectiles);

      projectile.update();
   });

   // * Player

   player.render();
   player.update();

   // * Enemies

   trenches.forEach(trench => {
      trench.check_entry();
      trench.deploy();

      if (!trench.spaceships.length) despawn(trench, trenches);
   });

   if (!trenches.length) {
      settings.trench.count++;
      spawn_platoons("TRENCH", settings.trench.count);
   }

}

function windowResized() {
   resizeCanvas(document.body.clientWidth, window.innerHeight);
}