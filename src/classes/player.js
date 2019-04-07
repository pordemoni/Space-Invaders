class Player {
   constructor(position) {
      this.position = position;
      this.width = 50;
      this.height = 50;
      this.boosts = {
         left: {
            speed: {current: 0, max: 8},
            drag: {current: 1, no_drag: 1, max: 0.9}
         },
         right: {
            speed: {current: 0, max: 8},
            drag: {current: 1, no_drag: 1, max: 0.9}
         },
         forward: {
            speed: {current: 0, max: 6},
            drag: {current: 1, no_drag: 1, max: 0.9}
         },
         backward: {
            speed: {current: 0, max: 6},
            drag: {current: 1, no_drag: 1, max: 0.9}
         },
      };
      this.type = "PLAYER";
      this.fire_rate = 500;
   }

   render() {
      fill(0, 255, 0);
      rect(this.position.x, this.position.y, this.width, this.height);
   }

   update() {
      this.boosting();
      this.constrain_edges();
   }

   /*  
   * Firing
   */
   fire() {
      shoot_lasers = spawn_lasers(this);
   }
   cease_fire() {
      window.clearInterval(shoot_lasers);
   }

   /* 
   * Boosting
      ? by default, the current speeds are set to 0, and
      ? the speeds are multiplied by the drag, which is currently set to 1 
   */
   boosting() {
      // ? Left & right turns
      this.position.x -= this.boosts.left.speed.current;
      this.position.x += this.boosts.right.speed.current;
      
      // ? Forward & backward thrusts
      this.position.y -= this.boosts.forward.speed.current;
      this.position.y += this.boosts.backward.speed.current;

      // ? Applies "drag"
      this.boosts.left.speed.current *= this.boosts.left.drag.current;
      this.boosts.right.speed.current *= this.boosts.right.drag.current;
      this.boosts.forward.speed.current *= this.boosts.forward.drag.current;
      this.boosts.backward.speed.current *= this.boosts.backward.drag.current;
   }
   
   /*  
   * boost_<direction>():
      ? are applied upon left, right, up & down arrows KEY PRESS,
      ? they set the current speed to the max speed, and
      ? temporarily remove the drag, which are then reapplied upon KEY RELEASE
   */
   boost_left() {
      this.boosts.left.speed.current = this.boosts.left.speed.max;
      
      // ? Removes "drag"
      this.boosts.left.drag.current = this.boosts.left.drag.no_drag;
   }

   boost_right() {
      this.boosts.right.speed.current = this.boosts.right.speed.max;
      this.boosts.right.drag.current = this.boosts.right.drag.no_drag;
   }

   boost_forward() {
      this.boosts.forward.speed.current = this.boosts.forward.speed.max;
      this.boosts.forward.drag.current = this.boosts.forward.drag.no_drag;
   }

   boost_backward() {
      this.boosts.backward.speed.current = this.boosts.backward.speed.max;
      this.boosts.backward.drag.current = this.boosts.backward.drag.no_drag;
   }

   /*  
   * apply_drag_<direction>():
      ? set the current drag to the max drag
   */
   apply_drag_left() {
      this.boosts.left.drag.current = this.boosts.left.drag.max;
   }

   apply_drag_right() {
      this.boosts.right.drag.current = this.boosts.right.drag.max;
   }

   apply_drag_forward() {
      this.boosts.forward.drag.current = this.boosts.forward.drag.max;
   }

   apply_drag_backward() {
      this.boosts.backward.drag.current = this.boosts.backward.drag.max;
   }

   constrain_edges() {
      this.position.x = constrain(this.position.x, this.width / 2, width - this.width / 2);
      this.position.y = constrain(this.position.y, this.height / 2, height - this.height / 2);
   }
}