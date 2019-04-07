class Laser {
   constructor(origin) {
      this.position = createVector(origin.position.x, origin.position.y);
      this.velocity = createVector(0, origin.laser.speed);
      this.width;
      this.height;
      this.radius;
      this.target = {
         acquired : false,
         position: 0
      },
      this.target_acquired = false;
      this.type = origin.type;

      switch (this.type) {
         case "PLAYER":
            this.width = 4;
            this.height = 10;
            break;

         case "ENEMY":
            this.radius = 16;
            break;
      }
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

   render() {
      switch (this.type) {
         case "PLAYER":
            fill(0, 255, 255);
            rect(this.position.x, this.position.y, this.width, this.height);
            break;

         case "ENEMY":
            fill(0, 0, 255);
            ellipse(this.position.x, this.position.y, this.radius);
            break;
      }
   }

   set_direction(target) {
      if (this.type == "ENEMY" && !this.target_acquired) {
         let difference = p5.Vector.sub(target.position, this.position);
         let direction = difference.normalize();
         this.velocity = direction.copy().mult(this.velocity.y);
         console.log(this.velocity.mag());
         this.target_acquired = true;
      }
   }
}