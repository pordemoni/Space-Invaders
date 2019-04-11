class Space_Object {
   constructor(x, y) {
      this.position = createVector(x, y);
      this.velocity;
      this.width;
      this.height;
      this.type;
      this.exploded = false;
   }

   check_collision() {

      // ? Handles collision to Player

      if (this.type == "ENEMY" || this.origin_type == "ENEMY") {
         if (!player.shield.state &&
            this.position.x <= (player.position.x + player.width) + this.width &&
            this.position.x >= (player.position.x - player.width) - this.width &&
            this.position.y <= (player.position.y + player.height) + this.height &&
            this.position.y >= (player.position.y - player.height) - this.height) {
            this.exploded = true;
            if (player.HP.current > 0) {
               sfx.player.hit.play();
               player.HP.current--;
               player.shield.activate();
            }
         }
      }
      
      // ? Handles Player's Projectile collision

      else if (this.type == "PROJECTILE" && this.origin_type == "PLAYER") {
         enemies.forEach(enemy => {
            if (this.position.x <= (enemy.position.x + enemy.width) + this.width &&
               this.position.x >= (enemy.position.x - enemy.width) - this.width &&
               this.position.y <= (enemy.position.y + enemy.height) + this.height &&
               this.position.y >= (enemy.position.y - enemy.height) - this.height) {
               this.exploded = true;
               enemy.exploded = true;
            }
         })
      }
   }
}