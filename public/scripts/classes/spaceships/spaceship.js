class Spaceship extends Space_Object {
   constructor(position) {
      super(position);
      this.type;
      this.velocity;
      this.width;
      this.height;
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
   }

   render() {
      super.render();
   }
   
   update() {
      super.update();
   }
   
   check_collision() {
      super.check_collision();
   }

   check_edges() {
      super.check_edges();
   }

   /*  
   * fire()
      ? Checks if the spaceship is firing (Player: toggled on spacebar key press/release)
         > if so: 
            ? Check if the firing marker has been set
               > if so:
                     ? starting from the marked frameCount (current frameCount - firing marker), 
                     ? spawn a projectile everytime the frameCount is a multiple of 60 (fps) multiplied by the fire rate
               > if not: set the marker & immediately spawn a projectile
                  
         > if not: 
            ? reset the firing marker
            ? exit fire()
   */
   fire() {
      if (this.firing.state && !this.exploded) {
         if (this.firing.marker) {
            if ((frameCount - this.firing.marker) % (60 * this.firing.rate) == 0) {
               spawn_projectile(this);
            }
         } else {
            this.firing.marker = frameCount;
            spawn_projectile(this);
         }
      } else this.firing.marker = 0;
   }
}