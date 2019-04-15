class Platoon {
   constructor(position) {
      this.position = position;
      this.velocity;
      this.autopilot = {
         duration: 3,
         deactivate: () => {
            setTimeout(() => {
               this.autopilot.state = false
            }, 1000 * this.autopilot.duration);
         },
         state: false,
      };
      this.total;
      this.spaceships = [];
   }

   spawn() {

   }

   deploy() {
      this.spaceships.forEach(spaceship => {
         spaceship.render()
         spaceship.update();
      });

      switch (this.autopilot.state) {
         case true:
            this.position.add(this.velocity);
            break;

         default:
            this.check_edges();
            this.spaceships.forEach(spaceship => {
               spaceship.fire();
               spaceship.check_collision();

               const index = this.spaceships.indexOf(spaceship);
               if (spaceship.exploded) this.spaceships.splice(index, 1);

            });


      }
   }

   check_edges() {

   }
}