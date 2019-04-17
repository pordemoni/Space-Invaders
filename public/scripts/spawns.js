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
         projectiles.push(new Laser(origin));
         play_sfx(origin, "FIRE");
         break;

      case "MISSILE":
         projectiles.push(new Missile(origin));
         play_sfx(origin, "FIRE");
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
            trenches.push(trench);
            trench.spawn();
         }
      
   }
}

function spawn_stars(amount) {
   for (let i = 0; i < amount; i++) stars.push(new Star());
}