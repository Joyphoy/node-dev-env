import {expect} from 'chai';
import lib from './lib';

describe('First test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('lib.js', () => {
  it('adds two numbers', () => {
    const answer = lib.add(1, 2);

    expect(answer).to.equal(3);
  });
});
