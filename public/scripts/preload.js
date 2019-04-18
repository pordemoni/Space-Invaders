function preload_assets() {

   Game.preload.paths.forEach(path => {
      load_asset(path);
   });
   
   /*  
   * load_asset(path)
      @param {string} path - file path

      - parses the file type and the file name from the given path
      ! loaded paths match the structure of their corresponding variables, which are used in the game to reference their loaded data
      ? see: Game.assets in globals.js
   */
   function load_asset(path) {
      const parts = path.match(/.*\/assets\/(?<filetype>\w*)\/(?<filename>.*)(?<extension>\.\w*)/).groups;
      const filetype = parts.filetype;
      const filename = parts.filename;

      switch (filetype) {
         case "audio":
            loadSound(path, loaded_asset);
            break;

         case "images":
            loadImage(path, loaded_asset);
            break;
      }

      /*  
      * loaded_asset(asset)
         @param {p5.Image || p5.SoundFile} - returned from calling loadImage() or loadSound()
            - saves the loaded asset to a variable in Game.assets
            - counts the progress of the loaded assets
            - once the progress is complete, 
               - initialize the BGM & the initial spawns
      */
      function loaded_asset(asset) {
         Game.assets[filetype][filename] = asset;
         Game.preload.progress++;

         if (Game.preload.progress == Game.preload.paths.length) {
            Game.preloaded = true;
            
            Game.assets.audio.BGM.loop();
            spawn_initiate();
         }
      }
   }
}
