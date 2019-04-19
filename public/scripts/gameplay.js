function play_game() {
   background(29, 44, 66);

   //* Stars
   Game.stars.forEach(star => {
      star.render();
      star.update();
   });

   //* Bullets
   Game.projectiles.forEach(projectile => {
      projectile.render();
      projectile.set_direction();
      projectile.check_edges();
      projectile.check_collision();

      if (projectile.exploded) despawn(projectile, Game.projectiles);

      projectile.update();
   });

   //* Player
   Game.player.render();
   Game.player.update();

   //* Enemies
   Game.platoons.forEach(platoon => {
      platoon.check_entry();
      platoon.deploy();

      if (!platoon.spaceships.ships.length) despawn(platoon, Game.platoons);
   });

   //* Enemy auto-respawn
   if (!Game.platoons.length) {
      Game.difficulties[Game.difficulty].trench.count++;
      spawn_platoons("TRENCH", Game.difficulties[Game.difficulty].trench.count);
   }

   //* HUD
   display_HUD();
}