const ESC = 27,
      LEFT_SHIFT = 16,
      SPACE = 32,
      Z = 90;

function keyPressed(event) {
  //  console.log(keyCode);
   switch (keyCode) {
      case LEFT_ARROW:
         GAME.player.boost_left();
         break;
      case RIGHT_ARROW:
         GAME.player.boost_right();
         break;
      case UP_ARROW:
         GAME.player.boost_forward();
         break;
      case DOWN_ARROW:
         GAME.player.boost_backward();
         break;
      case SPACE:
         GAME.player.set_firing_state(true);
         break;

      case LEFT_SHIFT:
         GAME.player.cycle_firing_mode();
         break;
      case Z:
         GAME.player.toggle_autopilot();
         break;

      case ESC:
         if (GAME.state == "PLAYING")  {
            GAME.set_state = "PAUSED";
            frameRate(0);
         }
         else if (GAME.state == "PAUSED")  {
            GAME.set_state = "PLAYING";
            frameRate(60);
         }
         break;
   }
}

function keyReleased(event) {
   switch (keyCode) {
      case LEFT_ARROW:
         GAME.player.apply_drag_left();
         break;
      case RIGHT_ARROW:
         GAME.player.apply_drag_right();
         break;
      case UP_ARROW:
         GAME.player.apply_drag_forward();
         break;
      case DOWN_ARROW:
         GAME.player.apply_drag_backward();
         break;
      case SPACE:
         GAME.player.set_firing_state(false);
         break;
   }
}

function mouseClicked(event) {
  //  console.log(mouseX);
}