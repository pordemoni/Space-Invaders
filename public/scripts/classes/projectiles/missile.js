class Missile extends Projectile {
   constructor(origin) {
      super(origin);
      this.mode = "MISSILE";
      this.velocity = createVector(0, 4);
      this.width = 4;
      this.height = 4;
      this.target_acquired = false;
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
   
   check_collision() {
      super.check_collision();
   }

   check_edges() {
      super.check_edges();
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