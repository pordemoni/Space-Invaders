class Projectile {
   constructor(origin) {
      this.position = createVector(origin.position.x, origin.position.y);
      this.velocity;
      this.type = origin.type;
   }
}