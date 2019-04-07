let player;
let enemies = [];
let lasers = [];
let missiles = [];

function setup() {
   createCanvas(document.body.clientWidth, window.innerHeight);
   angleMode(DEGREES);
   rectMode(CENTER);
   ellipseMode(RADIUS);
   noStroke();

   player = new Player(createVector(width / 2, height - 50));
   for (let i = 0; i < 5; i++) {
      const position = createVector(random(width), 50);
      const enemy = new Enemy(position);
      enemies.push(enemy);
      // enemy.fire();
   }
}

function draw() {
   background(29, 44, 66);
   
   lasers.forEach(laser => {
      laser.render();
      laser.update();
   });

   missiles.forEach(missile => {
      missile.render();
      missile.update();
      missile.set_direction(player);
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