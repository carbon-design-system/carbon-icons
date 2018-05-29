'use strict';

const carbonIconsJs = require('../dist/carbon-icons.js');

describe('carbon-icons.js', () => {
  it('should be an object', () => {
    expect(typeof carbonIconsJs).toBe('object');
  });

  it('should have length greater than 0', () => {
    expect(carbonIconsJs.length).toBeGreaterThan(0);
  });
});
