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

function spawn_line(position, count) {
   for (let i = 0; i < count; i++) {
      enemies.push(new Enemy)
   }
}