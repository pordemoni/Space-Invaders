/*  
* Spawn projectile:
   ? origin.firing.mode determines which Projectile to spawn

   ? Each case would then:
      ? shoot a projectile immediately, then
      ? after the set <origin>.firing.rate
*/
function spawn_projectile(origin) {
   switch (origin.firing.mode.current) {
      case "LASER":
         play_sfx(origin);
         projectiles.push(new Laser(origin));
         break;

      case "MISSILE":
         projectiles.push(new Missile(origin));
         break;
   }
}

function spawn_line(position, count) {
   for (let i = 0; i < count; i++) {
      enemies.push(new Enemy)
   }
}