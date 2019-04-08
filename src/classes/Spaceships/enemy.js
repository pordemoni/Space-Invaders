class Enemy {
   constructor(position) {
      this.width = 10;
      this.height = 10;
      this.position = position;
      this.firing = {
         delay: random(0, 2000),
         fire: function() {},
         mode: {
            current: "MISSILE",
         },
         rate: 3000,
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
         this.firing.fire = spawn_projectile(this);
      }, this.firing.delay);
   }
}