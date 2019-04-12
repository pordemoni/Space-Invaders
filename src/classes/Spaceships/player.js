class Player extends Spaceship {
   constructor(position) {
      super(position);
      this.type = "PLAYER";
      this.velocity = createVector(6, 6);
      this.width = 14;
      this.height = 14;
      this.firing = {
         marker: 0,
         mode: {
            current: "LASER",
            modes: ["LASER"],
         },
         rate: 0.25,
         state: false,
      };

      this.autopilot = {
         velocity: createVector(1, 1),
         state: false,
      };
      // ! Keep this.easing on top of this.dir
      this.easing = 0.8;
      this.dir = {
         left: {
            speed: {
               current: 0,
               max: this.velocity.x
            },
            easing: {
               current: 1,
               default: 1,
               max: this.easing
            }
         },
         right: {
            speed: {
               current: 0,
               max: this.velocity.x
            },
            easing: {
               current: 1,
               default: 1,
               max: this.easing
            }
         },
         forward: {
            speed: {
               current: 0,
               max: this.velocity.y
            },
            easing: {
               current: 1,
               default: 1,
               max: this.easing
            }
         },
         backward: {
            speed: {
               current: 0,
               max: this.velocity.y
            },
            easing: {
               current: 1,
               default: 1,
               max: this.easing
            }
         },
      };
      this.HP = {
         current: 3,
         default: 3,
         max: 5,
      };
      this.opacity = 1;
      this.shield = {
         activate: () => {
            this.shield.state = true;
            this.opacity = 0.25;

            setTimeout(() => {
               this.shield.state = false;
               this.opacity = 1;
            }, 1000 * this.shield.duration);
         },
         duration: 3,
         state: false,
      };
   }

   render() {
      fill(`rgba(50, 255, 255, ${this.opacity})`);
      rect(this.position.x, this.position.y, this.width, this.height);

   }

   update() {
      this.boosting();
      this.check_edges();
      this.fire();
   }

   /* 
   * Boosting
      ? by default, the current speeds are set to 0, and
      ? the speeds are multiplied by the drag, which is currently set to 1 
   */
   boosting() {
      // ? Left & right turns
      this.position.x -= this.dir.left.speed.current;
      this.position.x += this.dir.right.speed.current;

      // ? Forward & backward thrusts
      this.position.y -= this.dir.forward.speed.current;
      this.position.y += this.dir.backward.speed.current;

      // ? Applies "drag"
      this.dir.left.speed.current *= this.dir.left.easing.current;
      this.dir.right.speed.current *= this.dir.right.easing.current;
      this.dir.forward.speed.current *= this.dir.forward.easing.current;
      this.dir.backward.speed.current *= this.dir.backward.easing.current;
   }

   /*  
   * boost_<direction>():
      ? are applied upon left, right, up & down arrows KEY PRESS,
      ? they set the current speed to the max speed, and
      ? temporarily remove the drag, which are then reapplied upon KEY RELEASE
   */
   boost_left() {
      this.dir.left.speed.current = this.dir.left.speed.max;

      // ? Removes "drag"
      this.dir.left.easing.current = this.dir.left.easing.default;
   }

   boost_right() {
      this.dir.right.speed.current = this.dir.right.speed.max;
      this.dir.right.easing.current = this.dir.right.easing.default;
   }

   boost_forward() {
      this.dir.forward.speed.current = this.dir.forward.speed.max;
      this.dir.forward.easing.current = this.dir.forward.easing.default;
   }

   boost_backward() {
      this.dir.backward.speed.current = this.dir.backward.speed.max;
      this.dir.backward.easing.current = this.dir.backward.easing.default;
   }

   /*  
   * apply_drag_<direction>():
      ? set the current drag to the max drag
   */
   apply_drag_left() {
      this.dir.left.easing.current = this.dir.left.easing.max;
   }

   apply_drag_right() {
      this.dir.right.easing.current = this.dir.right.easing.max;
   }

   apply_drag_forward() {
      this.dir.forward.easing.current = this.dir.forward.easing.max;
   }

   apply_drag_backward() {
      this.dir.backward.easing.current = this.dir.backward.easing.max;
   }

   check_collision() {
      super.check_collision();
   }

   check_edges() {
      super.check_edges();
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



   toggle_autopilot() {
      this.autopilot.state = this.autopilot.state ? false : true;
   }
}