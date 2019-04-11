class Missile extends Projectile {
   constructor(origin) {
      super(origin);
      this.width = 4;
      this.height = 4;
      this.velocity = createVector(0, 3);
      this.target_acquired = false;
      this.mode = "MISSILE";
   }

   render() {
      fill(255, 255, 0);
      ellipse(this.position.x, this.position.y, this.width, this.height);
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
   
   set_direction() {
      if (!this.target_acquired) {
         switch (this.origin_type) {
            case "ENEMY":
               let difference = p5.Vector.sub(player.position, this.position);
               let direction = difference.normalize();
               this.velocity = direction.copy().mult(this.velocity.y);
               break;
         }
         this.target_acquired = true;
      }
   }
}