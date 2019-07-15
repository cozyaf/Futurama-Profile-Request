const { Router } = require('express');
const futuramaTagline = require('../middleware/futurama-tagline');

const profiles = [];

module.exports = Router()
  .post('/profile', futuramaTagline, (req, res) => {
    const {
      name,
      favoriteCharacter
    } = req.body;

    const profile = {
      name, 
      favoriteCharacter,
      tagline: req.quote
    };
    
    profiles.push(profile);

    res.send(profile);
  })

  .get('/profile', (req, res) => {
    res.send(profiles);
  });

