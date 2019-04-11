class Projectile extends Space_Object{
   constructor(origin) {
      super();
      this.position = createVector(origin.position.x, origin.position.y);
      this.origin_type = origin.type;
      this.exploded = false;
      this.width; 
      this.height;
      this.velocity;
      this.target_acquired;
      this.type = "PROJECTILE";
   }

   check_edges() {
      if (
         this.position.x <= -this.width * 2 ||
         this.position.x >= this.width * 2 + width ||
         this.position.y <= -this.height * 2 ||
         this.position.y >= this.height * 2 + height
      ) this.exploded = true;
   }

   set_direction() {

   }
}