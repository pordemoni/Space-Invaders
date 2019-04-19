class HP_Bar {
   constructor(position, width, height) {
      this.position = position;
      this.width = width || 300;
      this.height = height || 38;
      this.color = `rgba(45, 155, 45, 1)`;
      this.font = Game.assets.fonts.minecraft_16px;
      this.span = this.width * Game.player.HP.current / Game.player.HP.default;
      
      this.text = {
         position: {
            x: this.position.x + this.width / 2,
            y: this.position.y + this.height / 2,
         },
         value: `${Game.player.HP.current} / ${Game.player.HP.default}`,
      };
   }

   render() {
      //* Bar
      stroke(255, 140);
      noFill();
      rect(this.position.x, this.position.y, this.width, this.height);

      noStroke();
      fill(this.color);
      rect(this.position.x, this.position.y, this.span, this.height);

      //* Text
      fill(255, 255);
      textSize(16);
      textAlign(CENTER, CENTER);
      textFont(this.font);
      text(this.text.value, this.text.position.x, this.text.position.y);
   }

   update() {
      this.span = this.width * Game.player.HP.current / Game.player.HP.default;
      this.text.value = `${Game.player.HP.current} / ${Game.player.HP.default}`;
   }
};
