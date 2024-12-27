import * as migration_20241226_150246 from './20241226_150246';
import * as migration_20241226_152333 from './20241226_152333';
import * as migration_20241227_091243 from './20241227_091243';
import * as migration_seed from './seed';

export const migrations = [
  {
    up: migration_20241226_150246.up,
    down: migration_20241226_150246.down,
    name: '20241226_150246',
  },
  {
    up: migration_20241226_152333.up,
    down: migration_20241226_152333.down,
    name: '20241226_152333',
  },
  {
    up: migration_20241227_091243.up,
    down: migration_20241227_091243.down,
    name: '20241227_091243',
  },
  {
    up: migration_seed.up,
    name: 'seed'
  },
];
