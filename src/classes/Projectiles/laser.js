class Laser extends Projectile {
   constructor(origin) {
      super(origin);
      this.height = 6;
      this.width = 2;
      this.velocity = createVector(0, 10);
      this.type = "LASER";
   }

   render() {
      fill(0, 255, 0);
      rect(this.position.x, this.position.y, this.width, this.height);
   }

   update() {
      switch (this.origin_type) {
         case "PLAYER":
            this.position.sub(this.velocity);
            break;

         case "ENEMY":
            this.position.add(this.velocity);
            break;
      }
   }
}