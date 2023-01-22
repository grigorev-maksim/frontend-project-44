#!/usr/bin/env node
import game from "../src/games/evenGame.js";
import runGame from "../src/index.js";

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
runGame(description, game);
