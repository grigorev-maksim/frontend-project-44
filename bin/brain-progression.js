#!/usr/bin/env node
import runGame from '../src/index.js';
import { description, game } from '../src/games/progressionGame.js';

runGame(description, game);
