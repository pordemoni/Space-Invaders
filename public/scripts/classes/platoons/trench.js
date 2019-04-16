const enemy_width = 20;

class Trench extends Platoon {
   constructor(starting_side, y) {
      super();
      this.autopilot = {
         duration: 3,
         deactivate: () => {
            this.autopilot.state = false;
         },
         state: true,
         velocity: createVector(),
      };
      this.max = 4;
      this.spaceships = [];
      this.spacing = {
         x: 80,
         y: 0
      };
      this.starting_side = starting_side;

      switch (this.starting_side) {
         case "LEFT":
            this.position = createVector(-(((this.max  - 1) * this.spacing.x) + settings.padding.x), y);
            this.velocity = createVector(2, 0);
            break;

         case "RIGHT":
            this.position = createVector(width + settings.padding.x, y);
            this.velocity = createVector(-2, 0);
      }
   }

   spawn() {
      for (let i = 0; i < this.max; i++) {
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

   check_entry() {
      switch (this.starting_side) {
         case "LEFT":
            if (this.spaceships[0].position.x >= 50) {
               // if (this.autopilot.state) console.log(this.starting_side, frameCount);
               this.autopilot.deactivate();
            }
            break;

         case "RIGHT":
            if (this.spaceships[this.spaceships.length - 1].position.x <= width - 50) {
               // if (this.autopilot.state) console.log(this.starting_side, frameCount);
               this.autopilot.deactivate();
            }
            break;
      }
   }
}