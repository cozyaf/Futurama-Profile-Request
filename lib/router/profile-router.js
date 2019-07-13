const { Router } = require('express');
const futuramaTagline = require('../middleware/futurama-tagline');

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
    
    res.send(profile);
  });
