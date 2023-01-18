#!/usr/bin/env node
import game from "../src/games/calcGame.js";
import runGame from "../src/index.js";

const description = 'What is the result of the expression?';
runGame(description, game);
