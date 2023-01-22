#!/usr/bin/env node
import game from "../src/games/primeGame.js";
import runGame from "../src/index.js";

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
runGame(description, game);
