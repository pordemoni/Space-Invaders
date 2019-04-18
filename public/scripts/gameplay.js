function play_game() {
   background(29, 44, 66);
   Game.stars.forEach(star => {
      star.render();
      star.update();
   });

   Game.projectiles.forEach(projectile => {
      projectile.render();
      projectile.set_direction();
      projectile.check_edges();
      projectile.check_collision();

      if (projectile.exploded) despawn(projectile, Game.projectiles);

      projectile.update();
   });

   Game.player.render();
   Game.player.update();

   Game.platoons.forEach(platoon => {
      platoon.check_entry();
      platoon.deploy();

      if (!platoon.spaceships.ships.length) despawn(platoon, Game.platoons);
   });

   if (!Game.platoons.length) {
      Game.difficulties[Game.difficulty].trench.count++;
      spawn_platoons("TRENCH", Game.difficulties[Game.difficulty].trench.count);
   }

   textSize(32);
   fill(0, 255, 0);
   text(Game.player.HP.current, 20, 40);

   fill(255, 255, 0);
   text(Game.score, 140, 40);
}