class Enemy extends Spaceship{
   constructor(position, velocity) {
      super(position);
      this.type = "ENEMY";
      this.velocity = velocity;
      this.width = 10;
      this.height = 10;
      this.exploded = false;
      this.firing = {
         delay: random(0, 2000),
         marker: 0,
         mode: {
            current: "MISSILE",
         },
         rate: 3,
         state: true,
      };
   }

   render() {
      fill("rgba(255, 0, 0, 0.75)");
      rect(this.position.x, this.position.y, this.width, this.height);
   }

   update() {
      this.position.add(this.velocity);
      // ? edge detection is now handled by the Trench
      // this.check_edges();
   }

   check_edges() {
      super.check_edges();
      if (this.position.x <= this.width ||this.position.x >= width - this.width)
         this.velocity.x = -this.velocity.x;
   }
   
   fire() {
      setTimeout(() => {
         super.fire();
      }, this.firing.delay);
   }
}