import { describe, it } from 'mocha';
import { assert } from 'chai';
import jsonToYml from '../app/jsonToYml';

describe('jsonToYml.js', () => {
  it('Converts', () => jsonToYml('src/data.json', 'dest/data.yaml').then((result) => {
    assert(result, true);
  }));
});
