/*
* credits:
   > Rolemusic: http://freemusicarchive.org/music/Rolemusic/
   > bgm: http://freemusicarchive.org/music/Rolemusic/~/May_1871
*/

// function preload() {
//    bgm.track = loadSound("../assets/audio/bgm/rolemusic_may.mp3");
//    sfx.player.laser = loadSound("../assets/audio/sfx/player_laser.wav");
//    sfx.enemy.missile = loadSound("../assets/audio/sfx/enemy_missile.wav");
//    sfx.player.crash = loadSound("../assets/audio/sfx/player_hit.wav");
//    sfx.enemy.crash = loadSound("../assets/audio/sfx/enemy_hit.wav");
// }

function setup() {
   createCanvas(document.body.clientWidth, window.innerHeight);
   angleMode(DEGREES);
   rectMode(RADIUS);
   ellipseMode(RADIUS);
   noStroke();
   
   if (bgm.state) {
      // bgm.track.loop();
   }

   player = new Player(createVector(width / 2, height + 20));
   for (let i = 0; i < trench_count; i++) {
      const position = createVector(random(width), random(50, 200));
      const velocity = createVector(random([-1, 1]), 0);
      trench = new Trench(position, velocity);
      trenches.push(trench);
      trench.spawn();
   }
}

function draw() {
   background(29, 44, 66);
   
   // * Projectiles

   projectiles.forEach(projectile => {
      projectile.render();
      projectile.set_direction();
      projectile.check_edges();
      projectile.check_collision();

      const index = projectiles.indexOf(projectile);
      if (projectile.exploded) projectiles.splice(index, 1);

      projectile.update();
   });

   // * Player
   
   player.render();
   player.update();

   // * Enemies
   
   trenches.forEach(trench => {
      trench.check_edges();
      trench.deploy();
      
      const index = trenches.indexOf(trench);
      if (!trench.spaceships.length) trenches.splice(index, 1);
   });

}

function windowResized() {
   resizeCanvas(document.body.clientWidth, window.innerHeight);
}