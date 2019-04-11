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

   player = new Player(width / 2, height - 60);
   for (let i = 0; i < 4; i++) {
      enemies.push(new Enemy(random(width), 50));
   }
}

function draw() {
   console.log(projectiles.length);
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

   enemies.forEach(enemy => {
      enemy.render();
      // enemy.update();
      // enemy.fire();
      
      const index = enemies.indexOf(enemy);
      if (enemy.exploded) enemies.splice(index, 1);
   })
}

function windowResized() {
   resizeCanvas(document.body.clientWidth, window.innerHeight);
}