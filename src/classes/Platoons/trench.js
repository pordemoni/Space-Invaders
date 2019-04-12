class Trench extends Platoon {
   constructor(x, y) {
      super(x, y);
      this.velocity = createVector(random([-1, 1]), 0);
      this.total = 4;
      this.ships = [];
   }

   spawn() {
      for (let i = 0; i < this.total; i++) {
         this.ships.push()
      }
   }
}