class Player extends Spaceship {
   constructor(position) {
      super(position);
      this.width = 14;
      this.height = 14;
      this.type = "PLAYER";
      this.firing = {
         marker: 0,
         mode: {
            current: "LASER",
            modes: ["LASER", "MISSILE"],
         },
         rate: 0.25,
         state: false,
      };
      this.drag_multiplier = 0.6;
      this.turn_speed = 8;
      this.boost_directions = {
         left: {
            speed: {current: 0, max: this.turn_speed},
            drag: {current: 1, no_drag: 1, max: this.drag_multiplier}
         },
         right: {
            speed: {current: 0, max: this.turn_speed},
            drag: {current: 1, no_drag: 1, max: this.drag_multiplier}
         },
         forward: {
            speed: {current: 0, max: 6},
            drag: {current: 1, no_drag: 1, max: this.drag_multiplier}
         },
         backward: {
            speed: {current: 0, max: 6},
            drag: {current: 1, no_drag: 1, max: this.drag_multiplier}
         },
      };
   }

   render() {
      fill(50, 520, 255);
      rect(this.position.x, this.position.y, this.width, this.height);
   }

   update() {
      this.boosting();
      this.constrain_edges();
   }

   /*  
   * Firing
      - fire() method inherited from Spaceship

      > set_firing_state()
         - toggled on "space" key press/release
      
      > cycle_firing_mode() 
         - cycled on "shift" key press
   */
   set_firing_state(state) {
      this.firing.state = state;
   }

   cycle_firing_mode() {
      const modes = this.firing.mode.modes;
      const current = this.firing.mode.current;

      for (let i = 0; i < modes.length; i++) {
         if (current != modes[i]) {
            this.firing.mode.current = modes[i];
            break;
         }
      }
   }

   /* 
   * Boosting
      ? by default, the current speeds are set to 0, and
      ? the speeds are multiplied by the drag, which is currently set to 1 
   */
   boosting() {
      // ? Left & right turns
      this.position.x -= this.boost_directions.left.speed.current;
      this.position.x += this.boost_directions.right.speed.current;
      
      // ? Forward & backward thrusts
      this.position.y -= this.boost_directions.forward.speed.current;
      this.position.y += this.boost_directions.backward.speed.current;

      // ? Applies "drag"
      this.boost_directions.left.speed.current *= this.boost_directions.left.drag.current;
      this.boost_directions.right.speed.current *= this.boost_directions.right.drag.current;
      this.boost_directions.forward.speed.current *= this.boost_directions.forward.drag.current;
      this.boost_directions.backward.speed.current *= this.boost_directions.backward.drag.current;
   }
   
   /*  
   * boost_<direction>():
      ? are applied upon left, right, up & down arrows KEY PRESS,
      ? they set the current speed to the max speed, and
      ? temporarily remove the drag, which are then reapplied upon KEY RELEASE
   */
   boost_left() {
      this.boost_directions.left.speed.current = this.boost_directions.left.speed.max;
      
      // ? Removes "drag"
      this.boost_directions.left.drag.current = this.boost_directions.left.drag.no_drag;
   }

   boost_right() {
      this.boost_directions.right.speed.current = this.boost_directions.right.speed.max;
      this.boost_directions.right.drag.current = this.boost_directions.right.drag.no_drag;
   }

   boost_forward() {
      this.boost_directions.forward.speed.current = this.boost_directions.forward.speed.max;
      this.boost_directions.forward.drag.current = this.boost_directions.forward.drag.no_drag;
   }

   boost_backward() {
      this.boost_directions.backward.speed.current = this.boost_directions.backward.speed.max;
      this.boost_directions.backward.drag.current = this.boost_directions.backward.drag.no_drag;
   }

   /*  
   * apply_drag_<direction>():
      ? set the current drag to the max drag
   */
   apply_drag_left() {
      this.boost_directions.left.drag.current = this.boost_directions.left.drag.max;
   }

   apply_drag_right() {
      this.boost_directions.right.drag.current = this.boost_directions.right.drag.max;
   }

   apply_drag_forward() {
      this.boost_directions.forward.drag.current = this.boost_directions.forward.drag.max;
   }

   apply_drag_backward() {
      this.boost_directions.backward.drag.current = this.boost_directions.backward.drag.max;
   }

   constrain_edges() {
      this.position.x = constrain(this.position.x, this.width, width - this.width);
      this.position.y = constrain(this.position.y, this.height, height - this.height);
   }
}