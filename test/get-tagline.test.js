const getTagline = require('../lib/services/get-tagline');

describe('get random tagline', () => {
  it('returns random tagline from api', () => {
    const name = 'Fry';
    const tagline = getTagline(name);
    expect(tagline).toEqual(expect.any(String));
  });
});
