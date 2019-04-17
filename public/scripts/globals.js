let GAME = {
  player: null,
  platoons: [],
  projectiles: [],
  stars: [],
  
  score: 0,
  difficulties: {
    EASY: {
      trench: {
        count: 1,
        shooters: 2,
      },
    },
  },
  difficulty: "EASY",
  mode: "SURVIVAL",
  state: "PLAYING",

  audio: {
    BGM: {
      muted: false,
      track: null,
      volume: 1
    },
    SFX: {
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
    },
  },

  images: {
    player: null,
    enemy: {
      black: null,
      red: null,
    },
  },

  set_difficulty: (difficulty) => GAME.difficulty = difficulty,
  set_mode: (mode) => GAME.mode = mode,
  set_state: (state) => GAME.state = state,
};

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
