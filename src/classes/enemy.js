class Enemy {
    constructor(position) {
        this.positionn = position;
        this.width = 20;
        this.height = 20;
        this.fire_rate = 4000;
        this.type = "ENEMY";
    }

    render() {
        fill(255, 0, 0);
        rect(this.position.x, this.position.y, this.width, this.height);
    }
    
    update() {
        
    }
}