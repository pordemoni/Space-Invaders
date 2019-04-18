function despawn(space_object, list) {
   const index = list.indexOf(space_object);
   list.splice(index, 1);
}

/*  
* spawn_projectile(origin):
   @param {object} origin - used to check the type of projectile to spawn
   ? the origin is also used by the Projectiles, which determine where they will spawn
   ? origin.firing.mode determines which Projectile to spawn

   ? Each case would then:
      ? spawn a projectile, then
      ? play the according SFX
*/
function spawn_projectile(origin) {
   switch (origin.firing.mode.current) {
      case "LASER":
         Game.projectiles.push(new Laser(origin));
         play_SFX(origin, "FIRE");
         break;

      case "MISSILE":
         Game.projectiles.push(new Missile(origin));
         play_SFX(origin, "FIRE");
         break;
   }
}

function spawn_platoons(type, amount) {
   switch (type) {
      case "TRENCH":
         for (let i = 0; i < amount; i++) {
            const starting_side = random(["LEFT", "RIGHT"]);
            const y = (i * settings.trench.spacing.y) + settings.padding.y;

            trench = new Trench(starting_side, y);
            Game.platoons.push(trench);

            trench.spawn();
            trench.assign_shooters();
         }

   }
}

function spawn_stars(amount) {
   for (let i = 0; i < amount; i++) Game.stars.push(new Star());
}

function spawn_initiate() {
   Game.player = new Player(createVector(width / 2, height + 20));
   spawn_platoons("TRENCH", settings.trench.count);
   // spawn_stars(50);
}