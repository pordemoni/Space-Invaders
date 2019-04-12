class Platoon {
   constructor(x, y) {
      this.position = createVector(x, y);
      this.velocity;
      this.total;
      this.ships = [];
   }

   spawn() {

   }

   deploy() {
      this.ships.forEach(ship => {
         ship.render();
         ship.update();
      });
   }
}