function play_sfx(origin) {
   let stereo_pan = map(origin.position.x, 0, width, -1, 1);

   switch (origin.type) {
      case "PLAYER": {
         sfx.player.laser.pan(stereo_pan);
         sfx.player.laser.play();
         break;
      }

      case "ENEMY": {
         sfx.enemy.missile.pan(stereo_pan);
         sfx.enemy.missile.play();
      }
   }
}