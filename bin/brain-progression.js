#!/usr/bin/env node
import game from "../src/games/progressionGame.js";
import runGame from "../src/index.js";

const description = 'What number is missing in the progression?';
runGame(description, game);
