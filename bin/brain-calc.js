#!/usr/bin/env node
import { game, description } from '../src/games/calcGame.js';
import runGame from '../src/index.js';

runGame(description, game);
