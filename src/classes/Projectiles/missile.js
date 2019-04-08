class Missile extends Projectile {
   constructor(origin) {
      super(origin);
      this.width = 4;
      this.height = 4;
      this.velocity = createVector(0, 2);
      this.target_acquired = false;
   }

   render() {
      fill(255, 255, 0);
      ellipse(this.position.x, this.position.y, this.width, this.height);
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
   
   set_direction() {
      if (!this.target_acquired) {
         switch (this.type) {
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