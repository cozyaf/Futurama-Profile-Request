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
    let profileFromDb = profiles[req.params.id];
    const updatedProfile = {
      ...profileFromDb,
      favoriteCharacter,
      tagline: req.quote
    };
    console.log(updatedProfile);

    profileFromDb = updatedProfile;

    res.send(profileFromDb);
  })
