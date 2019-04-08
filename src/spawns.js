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
         lasers.push(new Laser(origin));

         return window.setInterval(() => {
            lasers.push(new Laser(origin));
         }, origin.firing.rate);

      case "MISSILE":
         missiles.push(new Missile(origin));

         return window.setInterval(() => {
            missiles.push(new Missile(origin));
         }, origin.firing.rate);
   }
}