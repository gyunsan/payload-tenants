import * as migration_20241226_150246 from './20241226_150246';
import * as migration_20241226_152333 from './20241226_152333';
import * as migration_20241227_091243 from './20241227_091243';
import * as migration_20241228_151601 from './20241228_151601';
import * as migration_20241228_152119 from './20241228_152119';
import * as migration_20241231_101258 from './20241231_101258';
import * as migration_20241231_111306 from './20241231_111306';
import * as migration_20250104_100952 from './20250104_100952';
import * as migration_20250104_163459 from './20250104_163459';
import * as migration_20250107_192851 from './20250107_192851';
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
    up: migration_20241228_151601.up,
    down: migration_20241228_151601.down,
    name: '20241228_151601',
  },
  {
    up: migration_20241228_152119.up,
    down: migration_20241228_152119.down,
    name: '20241228_152119',
  },
  {
    up: migration_20241231_101258.up,
    down: migration_20241231_101258.down,
    name: '20241231_101258',
  },
  {
    up: migration_20241231_111306.up,
    down: migration_20241231_111306.down,
    name: '20241231_111306',
  },
  {
    up: migration_20250104_100952.up,
    down: migration_20250104_100952.down,
    name: '20250104_100952',
  },
  {
    up: migration_20250104_163459.up,
    down: migration_20250104_163459.down,
    name: '20250104_163459',
  },
  {
    up: migration_20250107_192851.up,
    down: migration_20250107_192851.down,
    name: '20250107_192851',
  },
  {
    up: migration_seed.up,
    down: migration_seed.down,
    name: 'seed'
  },
];
