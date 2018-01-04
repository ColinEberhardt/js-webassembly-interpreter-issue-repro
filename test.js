const chai = require('chai');
const assert = chai.assert;
const RuntimeError = require('./lib/error.js').RuntimeError;

const MESSAGE = 'foo'

describe('RuntimeError', () => {
  it('should throw stuff', () => {
    assert.throws(() => {
      throw new RuntimeError(MESSAGE);
    }, MESSAGE);
  });
});
