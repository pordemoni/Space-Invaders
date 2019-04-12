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

         // ?  Player to Enemy collision
         
         case "ENEMY": 
            if (this.position.x <= (player.position.x + player.width) + this.width && 
            this.position.x >= (player.position.x - player.width) - this.width &&
            this.position.y <= (player.position.y + player.height) + this.height &&
            this.position.y >= (player.position.y - player.height) - this.height &&
            !player.shield.state 
            ) {
               this.exploded = true;
               if (player.HP.current > 0) {
                  play_sfx(this, "CRASH");
                  play_sfx(player, "CRASH");
                  player.HP.current--;
                  player.shield.activate();
               }
            }
            break;
         

         case "PROJECTILE": 
            switch (this.origin_type) {

               // ? Player's Projectile to Enemy collision
               
               case "PLAYER": 
                  enemies.forEach(enemy => {
                     if (this.position.x <= (enemy.position.x + enemy.width) + this.width && 
                        this.position.x >= (enemy.position.x - enemy.width) - this.width &&
                        this.position.y <= (enemy.position.y + enemy.height) + this.height &&
                        this.position.y >= (enemy.position.y - enemy.height) - this.height
                     ) {
                        this.exploded = true;
                        enemy.exploded = true;
                        play_sfx(enemy, "CRASH");
                     }
                  })
                  break;
               
               // ? Enemy's Projectile to Player collision

               case "ENEMY": 
                  if (this.position.x <= (player.position.x + player.width) + this.width && 
                     this.position.x >= (player.position.x - player.width) - this.width &&
                     this.position.y <= (player.position.y + player.height) + this.height &&
                     this.position.y >= (player.position.y - player.height) - this.height
                  ) {
                     this.exploded = true;
                     if (!player.shield.state && player.HP.current > 0) {
                        player.HP.current--;
                        player.shield.activate();
                        play_sfx(player, "CRASH");
                        // console.log(player.HP.current);
                     }
                  }
         }
      }
   }
}