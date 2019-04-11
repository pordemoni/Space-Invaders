class Projectile {
   constructor(origin) {
      this.position = createVector(origin.position.x, origin.position.y);
      this.origin_type = origin.type;
      this.exploded = false;
      this.width; 
      this.height;
      this.velocity;
      this.target_acquired;
      this.type;
   }

   check_edges() {
      if (
         this.position.x <= -this.width * 2 ||
         this.position.x >= this.width * 2 + width ||
         this.position.y <= -this.height * 2 ||
         this.position.y >= this.height * 2 + height
      ) this.exploded = true;
   }

   check_collision() {
      switch (this.origin_type) {
         case "PLAYER":
            enemies.forEach(enemy => {
               if (this.position.x <= (enemy.position.x + enemy.width) + this.width && 
                  this.position.x >= (enemy.position.x - enemy.width) - this.width &&
                  this.position.y <= (enemy.position.y + enemy.height) + this.height &&
                  this.position.y >= (enemy.position.y - enemy.height) - this.height
               ) {
                  this.exploded = true;
                  enemy.exploded = true;
               }
            })
            break;

         case "ENEMY":
            if (this.position.x <= (player.position.x + player.width) + this.width && 
               this.position.x >= (player.position.x - player.width) - this.width &&
               this.position.y <= (player.position.y + player.height) + this.height &&
               this.position.y >= (player.position.y - player.height) - this.height
            ) {
               this.exploded = true;
               if (!player.shield.state) {
                  sfx.player.hit.play();
                  player.HP.current--;
                  player.shield.activate();
                  console.log(player.HP.current);
               }
            }
            break;
      }
   }

   set_direction() {

   }
}