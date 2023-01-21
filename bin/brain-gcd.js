#!/usr/bin/env node
import game from "../src/games/gcdGame.js";
import runGame from "../src/index.js";

const description = 'Find the greatest common divisor of given numbers.';
runGame(description, game);
