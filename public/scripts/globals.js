let GAME_STATE = "START";
let bgm = {
   track: null,
   state: true,
};
let sfx = {
   player: {
      laser: null,
      missile: null,
      crash: null
   },
   enemy: {
      laser: null,
      missile: null,
      crash: null,
   },
};
let player;
let projectiles = [];
let trenches = [];

// Settings
p5.disableFriendlyErrors = true;
let trench_count = 1;