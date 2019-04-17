/*
* credits:
   > Rolemusic: http://freemusicarchive.org/music/Rolemusic/
   > bgm: http://freemusicarchive.org/music/Rolemusic/~/May_1871
*/

function preload() {
  GAME.images.player = loadImage("../assets/images/spaceship-player.png");
  GAME.images.enemy.black = loadImage("../assets/images/spaceship-enemy-black.png");
  GAME.images.enemy.red = loadImage("../assets/images/spaceship-enemy-red.png");
  GAME.audio.BGM.track = loadSound("../assets/audio/bgm/rolemusic_may.mp3");
  GAME.audio.SFX.player.laser = loadSound("../assets/audio/sfx/player_laser.wav");
  GAME.audio.SFX.enemy.missile = loadSound("../assets/audio/sfx/enemy_missile.wav");
  GAME.audio.SFX.player.crash = loadSound("../assets/audio/sfx/player_hit.wav");
  GAME.audio.SFX.enemy.crash = loadSound("../assets/audio/sfx/enemy_hit.wav");
}

function setup() {
  createCanvas(document.body.clientWidth, window.innerHeight);
  angleMode(DEGREES);
  ellipseMode(RADIUS);
  imageMode(CENTER);
  rectMode(RADIUS);
  noStroke();

  if (GAME.audio.BGM.state) {
    GAME.audio.BGM.track.loop();
  }

  GAME.player = new Player(createVector(width / 2, height + 20));

  spawn_platoons("TRENCH", settings.trench.count);
  spawn_stars(50);
}

function draw() {
  background(29, 44, 66);

  GAME.stars.forEach(star => {
    star.render();
    star.update();
  });



  // * Projectiles
  GAME.projectiles.forEach(projectile => {
    projectile.render();
    projectile.set_direction();
    projectile.check_edges();
    projectile.check_collision();

    if (projectile.exploded) despawn(projectile, GAME.projectiles);

    projectile.update();
  });

  // * Player

  GAME.player.render();
  GAME.player.update();

  // * Enemies

  GAME.platoons.forEach(platoon => {
    platoon.check_entry();
    platoon.deploy();

    if (!platoon.spaceships.ships.length) despawn(platoon, GAME.platoons);
  });

  // ? Automatic respawn of platoons
  if (!GAME.platoons.length) {
    GAME.difficulties[GAME.difficulty].trench.count++;
    spawn_platoons("TRENCH", GAME.difficulties[GAME.difficulty].trench.count);
  }

  // * HUD
  textSize(32);
  fill(0, 255, 0);
  text(GAME.player.HP.current, 20, 40);

  fill(255, 255, 0);
  text(GAME.score, 140, 40);

}

function windowResized() {
  resizeCanvas(document.body.clientWidth, window.innerHeight);
}