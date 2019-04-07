class Laser {
    constructor(origin) {
        this.position = createVector(origin.position.x, origin.position.y);
        this.velocity = createVector();
        this.type = origin.type;

        switch (this.type) {
            case "PLAYER":
                this.velocity = createVector(0, -1);
                this.width = 4;
                this.height = 10;
                this.speed = 12;
                break;

            case "ENEMY":
                this.velocity = createVector();
                this.radius = 6;
                this.targetAcquired = false;
                break;
        }
    }

    update() {
       switch (this.type) {
         case "PLAYER":
            this.position.y -= this.speed;
            break;

         case "ENEMY":

       }
    }

    render() {
        switch (this.type) {
            case "PLAYER":
                fill(0, 255, 255);
                rect(this.position.x, this.position.y, this.width, this.height);
                break;

            case "ENEMY":
                fill(0, 0, 255);
                ellipse(this.position.x, this.position.y, this.radius);
                break;
        }
    }

    setDirection(target) {
        if (this.type == "ENEMY" && !this.targetAcquired) {
            let difference = p5.Vector.sub(target.position, this.position);
            let direction = difference.normalize();

            this.velocity = direction.copy();
            this.targetAcquired = true;
        }
    }
}