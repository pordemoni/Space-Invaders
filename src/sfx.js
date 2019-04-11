

function play_sfx(origin) {
   let stereo_pan = map(origin.position.x, 0, width, -1, 1);

   switch (origin.type) {
      case "PLAYER": {
         laser01.pan(stereo_pan);
         laser01.play();
      }
   }
}