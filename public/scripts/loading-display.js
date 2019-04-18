function display_loading() {
   background(29, 44, 66);

   Game.stars.forEach(star => {
      star.render();
      star.update();
   });   
   stroke(255);
   noFill();
   rect(width / 2, height * 3 / 4, 200, 20);

   noStroke();
   fill(255, 100);
   rect(width / 2, height * 3 / 4, 200 * Game.preload.progress / Game.preload.paths.length, 20);
}