let player;
let lasers = [];

function setup() {
    createCanvas(document.body.clientWidth, window.innerHeight);
    angleMode(DEGREES);
    rectMode(CENTER);
    ellipseMode(CENTER);
    noStroke();
    player = new Player(createVector(width / 2, height - 50));

}

function draw() {
    background(29, 44, 66);
    player.render();
    player.update();

    lasers.forEach(laser => {
       laser.render();
       laser.update();
    });

   //  console.log(lasers.length);

}

function windowResized() {
    resizeCanvas(document.body.clientWidth, window.innerHeight);
}