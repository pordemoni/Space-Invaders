class Platoon {
   constructor(position) {
      this.position = position;
      this.velocity;
      this.total;
      this.ships = [];
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
      this.ships.forEach(ship => {
         ship.render();
         ship.fire();

         const index = this.ships.indexOf(ship);
         if (ship.exploded) this.ships.splice(index, 1);
         
         ship.update();
      });
   }

   check_edges() {

   }
}