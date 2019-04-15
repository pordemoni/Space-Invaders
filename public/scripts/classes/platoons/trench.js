class Trench extends Platoon {
   constructor(position) {
      super(position);
      this.velocity = createVector(random([-2, 2]), 0);
      this.total = 4;
      this.spaceships = [];
      this.spacing = {
         x: 50,
         y: 0
      };
   }

   spawn() {
      for (let i = 0; i < this.total; i++) {
         const x = this.position.x + (this.spacing.x * i);
         const position = createVector(x, this.position.y);
         this.spaceships.push(new Enemy(position, this.velocity));
      }
   }

   deploy() {
      super.deploy();
   }
   
   check_edges() {
      if (this.spaceships[0].position.x <= this.spaceships[0].width ||
         this.spaceships[0].position.x >= width - this.spaceships[0].width ||
         this.spaceships[this.spaceships.length - 1].position.x <= this.spaceships[this.spaceships.length - 1].width ||
         this.spaceships[this.spaceships.length - 1].position.x >= width - this.spaceships[this.spaceships.length - 1].width) {
         this.velocity.x = -this.velocity.x;
      }
   }
}