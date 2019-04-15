class Laser extends Projectile {
   constructor(origin) {
      super(origin);
      this.mode = "LASER";
      this.velocity = createVector(0, 10);
      this.height = 6;
      this.width = 2;

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
   
   check_collision() {
      super.check_collision();
   }

   check_edges() {
      super.check_edges();
   }
}