const request = require('supertest');
const app = require('../lib/app');

describe('Routes', () => {
  it('creates a new profile', () => {
    return request(app)
      .post('/profile')
      .send({ name: 'Claire', favoriteCharacter: 'Fry' })
      .then(res => {
        expect(res.body).toEqual({
          name: 'Claire',
          favoriteCharacter: 'Fry',
          tagline: expect.any(String)
        });
      });
  });

  it('gets all profiles with GET', () => {
    return request(app)
      .get('/profile')
      .then(res => {
        expect(res.body).toEqual([{
          name: 'Claire',
          favoriteCharacter: 'Fry',
          tagline: expect.any(String)
        }]);
      });
  });

  it('gets profile by id with GET', () => {
    return request(app)
      .get('/profile/0')
      .then(res => {
        expect(res.body).toEqual({
          name: 'Claire',
          favoriteCharacter: 'Fry',
          tagline: expect.any(String)
        });
      });
  });

  it('can update an item with PATCH', () => {
    const updatedProfile = {
      favoriteCharacter: 'Bender'
    };
    
    return request(app)
      .patch('/profile/0')
      .send(updatedProfile)
      .then(res => {
        expect(res.body).toEqual({
          name: 'Claire',
          favoriteCharacter: 'Bender',
          tagline: expect.any(String)
        });
      });
  });

  it
});
