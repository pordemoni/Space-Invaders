const SPACE = 32
      LEFT_SHIFT = 16
      Z = 90;

function keyPressed(event) {
   // console.log(keyCode);
	switch (keyCode) {
		case LEFT_ARROW:
			player.boost_left();
			break;
		case RIGHT_ARROW:
			player.boost_right();
			break;
		case UP_ARROW:
         player.boost_forward();
			break;
		case DOWN_ARROW:
         player.boost_backward();
         break;
      case SPACE:       
         player.set_firing_state(true);
         break;
      case LEFT_SHIFT:
         player.cycle_firing_mode();
         break;
      case Z:
         player.toggle_autopilot();
         break;
	}
}

function keyReleased(event) {
	switch (keyCode) {
		case LEFT_ARROW:
			player.apply_drag_left();
			break;
		case RIGHT_ARROW:
			player.apply_drag_right();
			break;
		case UP_ARROW:
         player.apply_drag_forward();
			break;
		case DOWN_ARROW:
         player.apply_drag_backward();
         break;
      case SPACE: 
         player.set_firing_state(false);
         break;
	}
}

function mouseClicked(event) {
   // console.log(mouseX);
}