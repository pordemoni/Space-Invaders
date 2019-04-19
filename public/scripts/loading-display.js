function display_loading() {
   background(29, 44, 66);

   Game.stars.forEach(star => {
      star.render();
      star.update();
   });   

   stroke(255);
   noFill();
   rect(width / 2, height / 8 * 7, 200, 20);

   noStroke();
   fill(255, 100);
   rect(width / 2, height / 8 * 7, 200 * Game.preload.progress / Game.preload.paths.length, 20);

   fill(255, 200);
   textSize(30);
   // textFont(Game.assets.fonts.baby_blocks);
   text("LOADING", width / 2, height / 8 * 7);
}