class Missile extends Projectile {
   constructor(origin) {
      super(origin);
      this.velocity = createVector(0, 4);
      this.radius = 8;
      this.target_acquired = false;
   }

   render() {
      fill(255, 255, 0);
      ellipse(this.position.x, this.position.y, this.radius);
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
   
   set_direction(target) {
      if (this.type == "ENEMY" && !this.target_acquired) {
         let difference = p5.Vector.sub(target.position, this.position);
         let direction = difference.normalize();
         this.velocity = direction.copy().mult(this.velocity.y);
         this.target_acquired = true;
      }
   }
}