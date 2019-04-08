class Enemy {
   constructor(position) {
      this.fire_delay = random(0, 2000);
      this.fire_rate = 3000;
      this.firing = {
         delay: random(0, 2000),
         fire: function() {},
         mode: "MISSILE",
         rate: 3000,
      };
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
         this.firing.fire = spawn_projectile(this);
      }, this.firing.delay);
   }
}