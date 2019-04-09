class Enemy extends Spaceship{
   constructor(position) {
      super(position);
      this.width = 10;
      this.height = 10;
      this.position = position;
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
      fill(255, 0, 0);
      rect(this.position.x, this.position.y, this.width, this.height);
   }

   update() {

   }

   fire() {
      setTimeout(() => {
         super.fire();
      }, this.firing.delay);
   }
}