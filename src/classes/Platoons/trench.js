class Trench extends Platoon {
   constructor(position) {
      super(position);
      this.velocity = createVector(random([-2, 2]), 0);
      this.total = 4;
      this.ships = [];
      this.spacing = {
         x: 50,
         y: 0
      };
   }

   spawn() {
      for (let i = 0; i < this.total; i++) {
         const x = this.position.x + (this.spacing.x * i);
         const position = createVector(x, this.position.y);
         this.ships.push(new Enemy(position, this.velocity));
      }
   }
}