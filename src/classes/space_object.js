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
      switch (this.type) {
         case "ENEMY": 
            if (this.position.x <= (player.position.x + player.width) + this.width && 
            this.position.x >= (player.position.x - player.width) - this.width &&
            this.position.y <= (player.position.y + player.height) + this.height &&
            this.position.y >= (player.position.y - player.height) - this.height &&
            !player.shield.state 
            ) {
               this.exploded = true;
               if (player.HP.current > 0) {
                  sfx.player.hit.play();
                  player.HP.current--;
                  player.shield.activate();
               }
            }
            break;
         

         case "PROJECTILE": 
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
                        sfx.enemy.hit.play();
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
                     if (!player.shield.state && player.HP.current > 0) {
                        sfx.player.hit.play();
                        player.HP.current--;
                        player.shield.activate();
                        // console.log(player.HP.current);
                     }
                  }
         }
      }
   }
}