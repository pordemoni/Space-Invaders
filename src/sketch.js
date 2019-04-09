let player;
let enemies = [];
let projectiles = [];

let enemy;
function setup() {
   createCanvas(document.body.clientWidth, window.innerHeight);
   angleMode(DEGREES);
   rectMode(RADIUS);
   ellipseMode(RADIUS);
   noStroke();

   player = new Player(createVector(width / 2, height - 60));
   for (let i = 0; i < 1; i++) {
      const position = createVector(random(width), 50);
      const enemy = new Enemy(position);
      enemies.push(enemy);
      // enemy.fire();
   }
}

function draw() {
   background(29, 44, 66);
   projectiles.forEach(projectile => {
      projectile.render();
      projectile.set_direction();
      projectile.update();
      projectile.check_edges();
      projectile.check_collision();

      const index = projectiles.indexOf(projectile);
      if (projectile.exploded) projectiles.splice(index, 1);
   });

   player.render();
   player.update();
   player.fire();

   enemies.forEach(enemy => {
      enemy.render();
      enemy.update();
   })
}

function windowResized() {
   resizeCanvas(document.body.clientWidth, window.innerHeight);
}