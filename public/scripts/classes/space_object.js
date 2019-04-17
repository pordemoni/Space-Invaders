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
        if (this.position.x <= (GAME.player.position.x + GAME.player.width) + this.width &&
          this.position.x >= (GAME.player.position.x - GAME.player.width) - this.width &&
          this.position.y <= (GAME.player.position.y + GAME.player.height) + this.height &&
          this.position.y >= (GAME.player.position.y - GAME.player.height) - this.height &&
          !GAME.player.shield.state
        ) {
          this.exploded = true;
          if (GAME.player.HP.current > 0) {
            play_SFX(this, "CRASH");
            play_SFX(GAME.player, "CRASH");
            GAME.player.HP.current--;
            GAME.player.shield.activate();
            GAME.score++;
          }
        }
        break;


      case "PROJECTILE":
        switch (this.origin_type) {

          // ? Player's Projectile to Enemy collision

          case "PLAYER":
            GAME.platoons.forEach(platoon => {
              platoon.spaceships.ships.forEach(ship => {
                if (this.position.x <= (ship.position.x + ship.width) + this.width &&
                  this.position.x >= (ship.position.x - ship.width) - this.width &&
                  this.position.y <= (ship.position.y + ship.height) + this.height &&
                  this.position.y >= (ship.position.y - ship.height) - this.height
                ) {
                  this.exploded = true;
                  ship.exploded = true;
                  play_SFX(ship, "CRASH");
                  GAME.score++;
                }
              })
            });
            break;

          // ? Enemy's Projectile to GAME.player collision

          case "ENEMY":
            if (this.position.x <= (GAME.player.position.x + GAME.player.width) + this.width &&
              this.position.x >= (GAME.player.position.x - GAME.player.width) - this.width &&
              this.position.y <= (GAME.player.position.y + GAME.player.height) + this.height &&
              this.position.y >= (GAME.player.position.y - GAME.player.height) - this.height
            ) {
              this.exploded = true;
              if (!GAME.player.shield.state && GAME.player.HP.current > 0) {
                GAME.player.shield.activate();
                GAME.player.HP.current--;
                play_SFX(GAME.player, "CRASH");
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