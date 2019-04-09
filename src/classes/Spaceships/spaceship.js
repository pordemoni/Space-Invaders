class Spaceship {
   constructor(position) {
      this.position = position;
      this.width;
      this.height;
      this.type;
      this.firing = {
         marker: 0,
         mode: {
            current: "",
            modes: [],
         },
         rate: 0,
         state: false,
      }
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
      if (this.firing.state) {
         if (!this.firing.marker) {
            this.firing.marker = frameCount;
            spawn_projectile(this);
         }
         if ((frameCount - this.firing.marker) % (60 * this.firing.rate) == 0) spawn_projectile(this);
      } else {
         this.firing.marker = 0;
      }
   }
}