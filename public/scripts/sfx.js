/* 
 * play_sfx()
   @param <object> origin - object that caused the sfx
   @param <string> event - possible values: "FIRE", "CRASH"

   ? This checks the event that occured, then the origin of the event
   ? This also pans the stereo values (left & right audio output) based on the x-position of the origin
 */

function play_sfx(origin, event) {
   let stereo_pan = map(origin.position.x, 0, width, -1, 1);

   switch (event) {
      case "FIRE":
         switch (origin.type) {
            case "PLAYER":
               {
                  sfx.player.laser.pan(stereo_pan);
                  sfx.player.laser.play();
                  break;
               }

            case "ENEMY":
               {
                  sfx.enemy.missile.pan(stereo_pan);
                  sfx.enemy.missile.play();
                  break;
               }
         }
         break;

      case "CRASH":
         switch (origin.type) {
            case "PLAYER":
               {
                  sfx.player.crash.pan(stereo_pan);
                  sfx.player.crash.play();
                  break;
               }

            case "ENEMY":
               {
                  sfx.enemy.crash.pan(stereo_pan);
                  sfx.enemy.crash.play();
                  break;
               }
         }
         break;
   }
}

function loadedBGM() {
   if (bgm.state) {
      bgm.track.loop();
   }
}