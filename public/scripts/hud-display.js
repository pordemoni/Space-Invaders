const display_HUD = () => {
   push();
   rectMode(CORNER);

   //* Score
   const score = {
      position: {
         x:width / 16,
         y: height / 16,
      },
      size: 24,
      text: "Score: ",

      render: () => {
         textSize(score.size);
         textFont(Game.assets.fonts.minecraft_16px);
         textAlign(LEFT, LEFT);
         
         fill(255, 255, 0);
         text("Score: ", score.position.x, score.position.y);
         
         fill(255, 255);
         text(Game.score, score.position.x + textWidth(score.text), score.position.y);
      }
   };

   score.render();

   //* HP
   const HP = new HP_Bar(createVector((width / 16), (height / 8) * 7));
   HP.render();
   HP.update();





   pop();
}