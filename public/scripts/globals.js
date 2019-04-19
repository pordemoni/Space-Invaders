let Game = {
   player: null,
   platoons: [],
   projectiles: [],
   stars: [],

   // * Settings
   score: 0,
   difficulty: "EASY",
   mode: "SURVIVAL",
   state: "PLAYING",
   difficulties: {
      EASY: {
         trench: {
            count: 1,
            shooters: 2,
         },
      },
   },

   assets: {
       audio: {
          BGM: null,
          enemy_missile: null,
          enemy_crash: null,
          player_laser: null,
          player_crash: null,
       },
       fonts: {
         baby_blocks: null,
         blox: null,
         minecraft_8px: null,
         minecraft_16px: null,
       },
       images: {
          enemy: null,
          player: null,
       },
    },

   preloaded: false,
   preload: {
      get percent() {
         return (this.progress / this.paths.length) * 100;
      },
      progress: 0,
      paths: [
         "../assets/audio/BGM.mp3",
         "../assets/audio/player_laser.wav",
         "../assets/audio/player_crash.wav",
         "../assets/audio/enemy_missile.wav",
         "../assets/audio/enemy_crash.wav",
         // "../assets/fonts/baby_blocks.ttf",
         "../assets/fonts/blox.ttf",
         "../assets/fonts/minecraft_8px.ttf",
         "../assets/fonts/minecraft_16px.ttf",
         "../assets/images/player.png",
         "../assets/images/enemy.png",
      ],
   },

   set_difficulty: (difficulty) => Game.difficulty = difficulty,
   set_mode: (mode) => Game.mode = mode,
   set_state: (state) => Game.state = state,
};

// Settings
p5.disableFriendlyErrors = true;

const settings = {
   padding: {
      x: 40,
      y: 80,
   },
   trench: {
      count: 1,
      spacing: {
         x: null,
         y: 40
      },
   },
};
