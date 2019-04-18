class Space_Object {
  constructor(position) {
    this.type;
    this.position = position;
    this.velocity;
    this.width;
    this.height;
    this.exploded = false;
  }

  render() {

  }

  update() {
    this.position.add(this.velocity);
  }

  check_collision() {
    switch (this.type) {

      // ?  Player to Enemy collision

      case "ENEMY":
        if (this.position.x <= (Game.player.position.x + Game.player.width) + this.width &&
          this.position.x >= (Game.player.position.x - Game.player.width) - this.width &&
          this.position.y <= (Game.player.position.y + Game.player.height) + this.height &&
          this.position.y >= (Game.player.position.y - Game.player.height) - this.height &&
          !Game.player.shield.state
        ) {
          this.exploded = true;
          if (Game.player.HP.current > 0) {
            play_SFX(this, "CRASH");
            play_SFX(Game.player, "CRASH");
            Game.player.HP.current--;
            Game.player.shield.activate();
            Game.score++;
          }
        }
        break;


      case "PROJECTILE":
        switch (this.origin_type) {

          // ? Player's Projectile to Enemy collision

          case "PLAYER":
            Game.platoons.forEach(platoon => {
              platoon.spaceships.ships.forEach(ship => {
                if (this.position.x <= (ship.position.x + ship.width) + this.width &&
                  this.position.x >= (ship.position.x - ship.width) - this.width &&
                  this.position.y <= (ship.position.y + ship.height) + this.height &&
                  this.position.y >= (ship.position.y - ship.height) - this.height
                ) {
                  this.exploded = true;
                  ship.exploded = true;
                  play_SFX(ship, "CRASH");
                  Game.score++;
                }
              })
            });
            break;

          // ? Enemy's Projectile to GAME.player collision

          case "ENEMY":
            if (this.position.x <= (Game.player.position.x + Game.player.width) + this.width &&
              this.position.x >= (Game.player.position.x - Game.player.width) - this.width &&
              this.position.y <= (Game.player.position.y + Game.player.height) + this.height &&
              this.position.y >= (Game.player.position.y - Game.player.height) - this.height
            ) {
              this.exploded = true;
              if (!Game.player.shield.state && Game.player.HP.current > 0) {
                Game.player.shield.activate();
                Game.player.HP.current--;
                play_SFX(Game.player, "CRASH");
              }
            }
        }
    }
  }

  check_edges() {
    this.position.x = constrain(this.position.x, this.width, width - this.width);
    this.position.y = constrain(this.position.y, this.height, height - this.height);
  }
}