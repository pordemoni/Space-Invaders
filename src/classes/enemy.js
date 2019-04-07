class Enemy {
   constructor(position) {
      this.fire_delay = random(0, 2000);
      this.fire_rate = 3000;
      this.firing;
      this.height = 10;
      this.position = position;
      this.type = "ENEMY";
      this.width = 10;
   }

   render() {
      fill(255, 0, 0);
      rect(this.position.x, this.position.y, this.width, this.height);
   }

   update() {

   }

   fire() {
      setTimeout(() => {
         this.firing = spawn_missile(this);
      }, this.fire_delay);
   }
}