class Laser extends Projectile {
   constructor(origin) {
      super(origin);
      this.velocity = createVector(0, 10);
      this.width = 8;
      this.height = 20;
   }

   render() {
      fill(0, 255, 0);
      rect(this.position.x, this.position.y, this.width, this.height);
   }

   update() {
      switch (this.type) {
         case "PLAYER":
            this.position.sub(this.velocity);
            break;

         case "ENEMY":
            this.position.add(this.velocity);
            break;
      }
   }
}