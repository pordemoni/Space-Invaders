class Enemy extends Spaceship{
   constructor(position, velocity) {
      super(position);
      this.type = "ENEMY";
      this.velocity = velocity;
      this.image = GAME.images.enemy.red;
      this.width = 25;
      this.height = 18;
      this.exploded = false;
      this.firing = {
         delay: random(0, 2000),
         marker: 0,
         mode: {
            current: "MISSILE",
         },
         rate: 3,
         state: false,
      };
   }

   render() {
      image(this.image, this.position.x, this.position.y);
   }

   update() {
      super.update();
      
      // ? edge detection is now handled by the Trench
      // this.check_edges();
   }

   check_collision() {
      super.check_collision();
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