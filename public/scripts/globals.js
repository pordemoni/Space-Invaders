let GAME_STATE = "START";
let bgm = {
   track: null,
   state: true,
};

let images = {
   player: null,
   enemy: {
      black: null,
      red: null,
   },
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

const settings = {
   padding: {
      x: 40,
      y: 40,
   },
   trench: {
      count: 1,
      spacing: {
         x: null,
         y: 40
      },
   },
};
