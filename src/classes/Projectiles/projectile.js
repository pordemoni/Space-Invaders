class Projectile extends Space_Object {
   constructor(origin) {
      super();
      this.type = "PROJECTILE";
      this.position = createVector(origin.position.x, origin.position.y);
      this.velocity;
      this.width;
      this.height;
      this.exploded = false;

      this.origin_type = origin.type;
      this.target_acquired;
   }

   check_edges() {
      if (this.position.x <= -this.width * 2 ||
         this.position.x >= this.width * 2 + width ||
         this.position.y <= -this.height * 2 ||
         this.position.y >= this.height * 2 + height) {
         this.exploded = true;
      }
   }

   set_direction() {

   }
}