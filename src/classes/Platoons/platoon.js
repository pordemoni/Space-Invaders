class Platoon {
   constructor(position) {
      this.position = position;
      this.velocity;
      this.total;
      this.ships = [];
   }

   spawn() {

   }

   deploy() {
      this.ships.forEach(ship => {
         ship.render();
         ship.fire();
         ship.check_collision();

         const index = this.ships.indexOf(ship);
         if (ship.exploded) this.ships.splice(index, 1);
         
         ship.update();
      });
   }
}