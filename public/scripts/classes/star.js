class Star {
   constructor() {
      this.x = random(width);
      this.y = random(height);
      this.z = random(6);
      this.radius = map(this.z, 0, 6, 2, 0.5);
      this.speed = map(this.z, 0, 6, 2, 0.8);
   }

   render() {
      fill(255);
      ellipse(this.x, this.y, this.radius, this.radius);
   }

   update() {
      this.y += this.speed;

      if (this.y >= height + this.radius) this.realign();
   }

   realign() {
      this.x = random(width);
      this.y = random(-height, -this.radius);
   }
}