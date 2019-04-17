/* 
 * play_sfx()
   @param <object> origin - object that caused the sfx
   @param <string> event - possible values: "FIRE", "CRASH"

   ? This checks the event that occured, then the origin of the event
   ? This also pans the stereo values (left & right audio output) based on the x-position of the origin
 */

function play_SFX(origin, event) {
   const stereo_pan = map(origin.position.x, 0, width, -1, 1);

   switch (event) {
      case "FIRE":
         switch (origin.type) {
            case "PLAYER":
               {
                  GAME.audio.SFX.player.laser.pan(stereo_pan);
                  GAME.audio.SFX.player.laser.play();
                  break;
               }

            case "ENEMY":
               {
                  GAME.audio.SFX.enemy.missile.pan(stereo_pan);
                  GAME.audio.SFX.enemy.missile.play();
                  break;
               }
         }
         break;

      case "CRASH":
         switch (origin.type) {
            case "PLAYER":
               {
                  GAME.audio.SFX.player.crash.pan(stereo_pan);
                  GAME.audio.SFX.player.crash.play();
                  break;
               }

            case "ENEMY":
               {
                  GAME.audio.SFX.enemy.crash.pan(stereo_pan);
                  GAME.audio.SFX.enemy.crash.play();
                  break;
               }
         }
         break;
   }
}