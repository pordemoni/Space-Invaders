class Trench extends Platoon {
   constructor(position) {
      super(position);
      this.velocity = createVector(random([-2, 2]), 0);
      this.total = 4;
      this.ships = [];
      this.spacing = {
         x: 150,
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

   check_edges() {
      if (this.ships[0].position.x <= this.ships[0].width ||this.ships[0].position.x >= width - this.ships[0].width ||
         this.ships[this.ships.length - 1].position.x <= this.ships[this.ships.length - 1].width ||this.ships[this.ships.length - 1].position.x >= width - this.ships[this.ships.length - 1].width)
         this.velocity.x = -this.velocity.x;
   }
}