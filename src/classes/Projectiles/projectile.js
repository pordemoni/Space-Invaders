class Projectile {
   constructor(origin) {
      this.position = createVector(origin.position.x, origin.position.y);
      this.type = origin.type;
      this.exploded = false;
      this.width; 
      this.height;
      this.velocity;
      this.target_acquired;
   }

   check_edges() {
      return (
         this.position.x <= -this.width * 2 ||
         this.position.x >= this.width * 2 + width ||
         this.position.y <= -this.height * 2 ||
         this.position.y >= this.height * 2 + height
      )
   }

   check_collision() {
      switch (this.type) {
         case "PLAYER":
            enemies.forEach(enemy => {
               if (
                  this.position.x <= (enemy.position.x + enemy.width) + this.width && 
                  this.position.x >= (enemy.position.x - enemy.width) - this.width &&
                  this.position.y <= (enemy.position.y + enemy.height) + this.height &&
                  this.position.y >= (enemy.position.y - enemy.height) - this.height
               ) this.exploded = true;
            })
            break;

         case "ENEMY":
            if (
               this.position.x <= (player.position.x + player.width) + this.width && 
               this.position.x >= (player.position.x - player.width) - this.width &&
               this.position.y <= (player.position.y + player.height) + this.height &&
               this.position.y >= (player.position.y - player.height) - this.height
            ) this.exploded = true;
            break;
      }
   }
}