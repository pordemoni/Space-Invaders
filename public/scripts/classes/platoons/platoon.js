class Platoon {
   constructor(position) {
      this.position = position;
      this.velocity;
      this.total;
      this.spaceships = [];
      this.autopilot = {
         duration: 3,
         off: () => {
            setTimeout(() => {
               this.autopilot.state = false
            }, 1000 * this.autopilot.duration);
         },
         state: true,
      };
   }

   spawn() {

   }

   deploy() {
      this.spaceships.forEach(spaceship => {
         spaceship.render();
         spaceship.fire();
         spaceship.check_collision();

         const index = this.spaceships.indexOf(spaceship);
         if (spaceship.exploded) this.spaceships.splice(index, 1);
         
         spaceship.update();
      });
   }

   check_edges() {

   }
}