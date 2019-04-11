let player;
let enemies = [];
let projectiles = [];
let bgm;
let sfx = {
   player: {
      laser: null,
      missile: null,
      hit: null
   },
   enemy: {
      laser: null,
      missile: null,
      hit: null,
   },
}

let fr;
let enemy_count = 3;

function preload() {
   sfx.player.laser = loadSound("../assets/audio/SFX/player_laser.wav");
   sfx.enemy.missile = loadSound("../assets/audio/SFX/enemy_missile.wav");
   sfx.player.hit = loadSound("../assets/audio/SFX/player_hit.wav");
   sfx.enemy.hit = loadSound("../assets/audio/SFX/enemy_hit.wav");
}

function setup() {
   createCanvas(document.body.clientWidth, window.innerHeight);
   angleMode(DEGREES);
   rectMode(RADIUS);
   ellipseMode(RADIUS);
   noStroke();
   bgm = loadSound("../assets/audio/BGM/rolemusic_may.mp3", loadedBGM);
   
   player = new Player(width / 2, height - 60);
   for (let i = 0; i < enemy_count; i++) {
      enemies.push(new Enemy(random(width), random(50, 200)));
   }
}

function draw() {
   background(29, 44, 66);
   // console.log(player.shield.state, player.HP.current);
   // console.log(player.HP.current);
   // console.log(projectiles.length);
   
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

   enemies.forEach(enemy => {
      enemy.render();
      enemy.fire();
      enemy.check_collision();
      
      const index = enemies.indexOf(enemy);
      if (enemy.exploded) enemies.splice(index, 1);
      
      enemy.update();
   })
}

function windowResized() {
   resizeCanvas(document.body.clientWidth, window.innerHeight);
}