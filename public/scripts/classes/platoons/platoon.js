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
      this.spaceships = {
         max: null,
         ships: [],
         shooters: null,
      };
   }

   spawn() {

   }

   deploy() {
      switch (this.autopilot.state) {
         case true:
            this.position.add(this.velocity);
            break;

         default:
            this.check_edges();
            this.spaceships.ships.forEach(ship => {
               ship.fire();
            });
      }

      assign_shooters() {
         let i = 0;
   
         while (i < this.spaceships.shooters) {
            let shooter_index = Math.floor(random(this.spaceships.ships.length));
            console.log(shooter_index);
            if (!this.spaceships.ships[shooter_index].firing.state) {
               this.spaceships.ships[shooter_index].firing.state = true;
               i++;
            }
         }
      }

      this.spaceships.ships.forEach(ship => {
         ship.render()
         ship.update();
         ship.check_collision();

         if (ship.exploded) despawn(ship, this.spaceships.ships);
      });
   }

   check_edges() {

   }
}