class Enemy extends Spaceship{
   constructor(position, velocity) {
      super(position);
      this.width = 10;
      this.height = 10;
      this.velocity = velocity;
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
      this.type = "ENEMY";
   }

   render() {
      // fill(255, 0, 0);
      fill("rgba(255, 0, 0, 0.75)");
      rect(this.position.x, this.position.y, this.width, this.height);
   }

   update() {
      this.position.add(this.velocity);
      // ? edge detection is now handled by the Trench
      // this.constrain_edges();
   }

   constrain_edges() {
      super.constrain_edges();
      if (this.position.x <= this.width ||this.position.x >= width - this.width)
         this.velocity.x = -this.velocity.x;
   }
   
   fire() {
      setTimeout(() => {
         super.fire();
      }, this.firing.delay);
   }
}