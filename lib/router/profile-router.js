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
  })

  .get('/profile/:id', (req, res) => {
    res.send(profiles[req.params.id]);
  })

  .patch('/profile/:id', futuramaTagline, (req, res) => {
    const {
      favoriteCharacter
    } = req.body;

    const profile = profiles[req.params.id];

    const updatedProfile = {
      ...profile,
      favoriteCharacter,
      tagline: req.quote
    };

    profiles[req.params.id] = updatedProfile;

    res.send(updatedProfile);
  })

  .delete('/profile/:id', (req, res) => {
    const deleted = profiles.splice(req.params.id, 1);
    res.send(deleted[0]);
  });
