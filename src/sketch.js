let player;
let enemies = [];
let lasers = [];
let missiles = [];

let enemy;
function setup() {
   createCanvas(document.body.clientWidth, window.innerHeight);
   angleMode(DEGREES);
   rectMode(RADIUS);
   ellipseMode(RADIUS);
   noStroke();

   player = new Player(createVector(width / 2, height - 60));
   for (let i = 0; i < 10; i++) {
      const position = createVector(random(width), 50);
      const enemy = new Enemy(position);
      enemies.push(enemy);
      // enemy.fire();
   }
}

function draw() {
   background(29, 44, 66);
   // console.log(lasers.length);
   
   lasers.forEach(laser => {
      laser.render();
      laser.update();
      laser.check_edges();
      laser.check_collision();

      const index = lasers.indexOf(laser);
      if (laser.exploded) lasers.splice(index, 1);
   });

   missiles.forEach(missile => {
      missile.render();
      missile.update();
      missile.set_direction();
      missile.check_edges();
      missile.check_collision();

      const index = missiles.indexOf(missile);
      if (missile.exploded) missiles.splice(index, 1);
   })

   player.render();
   player.update();

   enemies.forEach(enemy => {
      enemy.render();
      enemy.update();
   })
}

function windowResized() {
   resizeCanvas(document.body.clientWidth, window.innerHeight);
}