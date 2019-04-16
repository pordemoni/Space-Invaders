class Space_Object {
   constructor(position) {
      this.type;
      this.position = position;
      this.velocity;
      this.width;
      this.height;
      this.exploded = false;
   }

   render() {
      
   }

   update() {
      this.position.add(this.velocity);
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
                  score++;
               }
            }
            break;


         case "PROJECTILE":
            switch (this.origin_type) {

               // ? Player's Projectile to Enemy collision

               case "PLAYER":
               trenches.forEach(trench => {
                  trench.spaceships.forEach(enemy => {
                     if (this.position.x <= (enemy.position.x + enemy.width) + this.width &&
                        this.position.x >= (enemy.position.x - enemy.width) - this.width &&
                        this.position.y <= (enemy.position.y + enemy.height) + this.height &&
                        this.position.y >= (enemy.position.y - enemy.height) - this.height
                     ) {
                        this.exploded = true;
                        enemy.exploded = true;
                        play_sfx(enemy, "CRASH");
                        score++;
                     }
                  })
               });
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
                        player.shield.activate();
                        player.HP.current--;
                        play_sfx(player, "CRASH");
                        // console.log(player.HP.current);
                     }
                  }
            }
      }
   }

   check_edges() {
      this.position.x = constrain(this.position.x, this.width, width - this.width);
      this.position.y = constrain(this.position.y, this.height, height - this.height);
   }
}