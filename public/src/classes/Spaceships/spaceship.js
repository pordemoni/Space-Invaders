class Spaceship {
   constructor(position) {
      this.width;
      this.height;
      this.position = position;
      this.velocity;
      this.exploded = false;
      this.firing = {
         marker: 0,
         mode: {
            current: "",
            modes: [],
         },
         rate: 0,
         state: false,
      };
      this.type;
   }
   /*  
   * Firing
      ? Checks if the spaceship is firing (Player: toggled on spacebar key press/release)
      ? Marks the current frameCount (only if it hasn't already been marked yet)
      ? Immediately spawn a projectile (If the above statements are true)

      ? Then, starting from the marked frameCount (current frameCount - marked frameCount), 
      ? spawn a projectile everytime the frameCount is a multiple of 60 (fps) divided by the fire rate
   */
   fire() {
      if (this.firing.state && !this.exploded) {
         if (!this.firing.marker) {
            this.firing.marker = frameCount;
            spawn_projectile(this);
         }
         if ((frameCount - this.firing.marker) % (60 * this.firing.rate) == 0) spawn_projectile(this);
      } else {
         this.firing.marker = 0;
      }
   }
   
   constrain_edges() {
      this.position.x = constrain(this.position.x, this.width, width - this.width);
      this.position.y = constrain(this.position.y, this.height, height - this.height);
   }
}