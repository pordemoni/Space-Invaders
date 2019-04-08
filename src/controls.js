let player_fire;
function keyPressed(event) {
   console.log(keyCode);
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
      
      // ? Space key
      case 32:       
         player.fire();
         break;

      // ? (left) Shift key
      case 16:
         player.cycle_firing_mode();
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
         
      case 32: 
         player.cease_fire();
         break;
	}
}

function mouseClicked(event) {
   // console.log(mouseX);
}