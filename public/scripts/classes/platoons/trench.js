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
      this.spaceships = {
         max: 4,
         ships: [],
         shooters: GAME.difficulties[GAME.difficulty].trench.shooters,
      };
      this.spacing = {
         x: 80,
         y: 0
      };
      this.starting_side = starting_side;

      switch (this.starting_side) {
         case "LEFT":
            this.position = createVector(-(((this.spaceships.max - 1) * this.spacing.x) + settings.padding.x), y);
            this.velocity = createVector(2, 0);
            break;

         case "RIGHT":
            this.position = createVector(width + settings.padding.x, y);
            this.velocity = createVector(-2, 0);
      }
   }

   spawn() {
      for (let i = 0; i < this.spaceships.max; i++) {
         const x = this.position.x + (this.spacing.x * i);
         const position = createVector(x, this.position.y);
         this.spaceships.ships.push(new Enemy(position, this.velocity));
      }
   }

   deploy() {
      super.deploy();
   }

   assign_shooters() {
      super.assign_shooters();
   }

   check_edges() {
      if (this.spaceships.ships[0].position.x <= this.spaceships.ships[0].width ||
         this.spaceships.ships[0].position.x >= width - this.spaceships.ships[0].width ||
         this.spaceships.ships[this.spaceships.ships.length - 1].position.x <= this.spaceships.ships[this.spaceships.ships.length - 1].width ||
         this.spaceships.ships[this.spaceships.ships.length - 1].position.x >= width - this.spaceships.ships[this.spaceships.ships.length - 1].width) {
         this.velocity.x = -this.velocity.x;
      }
   }

   check_entry() {
      if (this.autopilot.state) {
         switch (this.starting_side) {
            case "LEFT":
               if (this.spaceships.ships[0].position.x >= 50) {
                  // if (this.autopilot.state) console.log(this.starting_side, frameCount);
                  this.autopilot.deactivate();
               }
               break;

            case "RIGHT":
               if (this.spaceships.ships[this.spaceships.ships.length - 1].position.x <= width - 50) {
                  // if (this.autopilot.state) console.log(this.starting_side, frameCount);
                  this.autopilot.deactivate();
               }
               break;
         }
      }
   }
}