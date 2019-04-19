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
                  Game.assets.audio.player_laser.pan(stereo_pan);
                  Game.assets.audio.player_laser.play();
                  break;
               }

            case "ENEMY":
               {
                  Game.assets.audio.enemy_missile.pan(stereo_pan);
                  Game.assets.audio.enemy_missile.play();
                  break;
               }
         }
         break;

      case "CRASH":
         switch (origin.type) {
            case "PLAYER":
               {
                  Game.assets.audio.player_crash.pan(stereo_pan);
                  Game.assets.audio.player_crash.setVolume(2);
                  Game.assets.audio.player_crash.play();
                  break;
               }

            case "ENEMY":
               {
                  Game.assets.audio.enemy_crash.pan(stereo_pan);
                  Game.assets.audio.enemy_crash.play();
                  break;
               }
         }
         break;
   }
}