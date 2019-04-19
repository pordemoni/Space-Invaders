const ESC = 27,
   LEFT_SHIFT = 16,
   SPACE = 32,
   Z = 90;


function keyPressed(event) {
   // console.log(keyCode);

   // * Movement
   switch (keyCode) {
      case LEFT_ARROW:
         Game.player.boost_left();
         break;
      case RIGHT_ARROW:
         Game.player.boost_right();
         break;
      case UP_ARROW:
         Game.player.boost_forward();
         break;
      case DOWN_ARROW:
         Game.player.boost_backward();
         break;
      case SPACE:
         Game.player.set_firing_state(true);
         break;

      // case LEFT_SHIFT:
      //    Game.player.cycle_firing_mode();
      //    break;
      case Z:
         Game.player.toggle_autopilot();
         break;
      case LEFT_SHIFT:
         if (Game.state == "PLAYING") {
            Game.set_state("PAUSED");
            frameRate(0);
         }
         else if (Game.state == "PAUSED") {
            Game.set_state("PLAYING");
            frameRate(60);

         }
         console.log('Game.state:', Game.state)
         break;
   }

   // switch (keyCode) {
   //    case SPACE:
   //       Game.player.set_firing_state(true);
   //       break;

   //    case LEFT_SHIFT:
   //       Game.player.cycle_firing_mode();
   //       break;
   //    case Z:
   //       Game.player.toggle_autopilot();
   //       break;

   //    case ESC:
   //       if (Game.state == "PLAYING") {
   //          Game.set_state = "PAUSED";
   //          frameRate(0);
   //       }
   //       else if (Game.state == "PAUSED") {
   //          Game.set_state = "PLAYING";
   //          frameRate(60);
   //       }
   //       break;
   // }
}

function keyReleased(event) {
   switch (keyCode) {
      case LEFT_ARROW:
         Game.player.apply_drag_left();
         break;
      case RIGHT_ARROW:
         Game.player.apply_drag_right();
         break;
      case UP_ARROW:
         Game.player.apply_drag_forward();
         break;
      case DOWN_ARROW:
         Game.player.apply_drag_backward();
         break;
      case SPACE:
         Game.player.set_firing_state(false);
         break;
   }
}

function mouseClicked(event) {
   //  console.log(mouseX);
}