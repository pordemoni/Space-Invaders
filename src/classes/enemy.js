class Enemy {
    constructor(position) {
        this.position = position;
        this.width = 20;
        this.height = 20;
        this.firing;
        this.laser = {
           rate: 3000,
           speed: 4
        },
        this.type = "ENEMY";
    }

    render() {
        fill(255, 0, 0);
        rect(this.position.x, this.position.y, this.width, this.height);
    }
    
    update() {
        
    }

    fire() {
      this.firing = spawn_lasers(this);
    }
}