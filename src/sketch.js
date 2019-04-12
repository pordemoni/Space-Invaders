p5.disableFriendlyErrors = true;

let player;
let projectiles = [];
let trenches = [];
let bgm = {
   track: null,
   state: true,
};
let sfx = {
   player: {
      laser: null,
      missile: null,
      crash: null
   },
   enemy: {
      laser: null,
      missile: null,
      crash: null,
   },
};

let trench_count = 3;

function preload() {
   bgm.track = loadSound("../assets/audio/BGM/rolemusic_may.mp3");
   sfx.player.laser = loadSound("../assets/audio/SFX/player_laser.wav");
   sfx.enemy.missile = loadSound("../assets/audio/SFX/enemy_missile.wav");
   sfx.player.crash = loadSound("../assets/audio/SFX/player_hit.wav");
   sfx.enemy.crash = loadSound("../assets/audio/SFX/enemy_hit.wav");
}

function setup() {
   createCanvas(document.body.clientWidth, window.innerHeight);
   angleMode(DEGREES);
   rectMode(RADIUS);
   ellipseMode(RADIUS);
   noStroke();
   
   if (bgm.state) {
      bgm.track.loop();
   }

   player = new Player(createVector(width / 2, height - 60));
   for (let i = 0; i < trench_count; i++) {
      const position = createVector(width / 2, random(50, 200));
      const velocity = createVector(random([-1, 1]), 0);
      trench = new Trench(position, velocity);
      trenches.push(trench);
      trench.spawn();
   }
}

function draw() {
   background(29, 44, 66);
   
   projectiles.forEach(projectile => {
      projectile.render();
      projectile.set_direction();
      projectile.check_edges();
      projectile.check_collision();

      const index = projectiles.indexOf(projectile);
      if (projectile.exploded) projectiles.splice(index, 1);

      projectile.update();
   });

   player.render();
   player.update();

   trenches.forEach(trench => {
      trench.check_edges();
      trench.deploy();

      const index = trenches.indexOf(trench);
      if (!trench.ships.length) trenches.splice(index, 1);
   });

}

function windowResized() {
   resizeCanvas(document.body.clientWidth, window.innerHeight);
}