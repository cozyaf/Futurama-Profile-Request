const getTagline = require('../services/get-tagline');

const futuramaTagline = (req, res, next) => {
  const favoriteCharacter = req.body.favoriteCharacter;
  getTagline(favoriteCharacter)
    .then(tagline => {
      req.quote = tagline[0].quote;
      next();
    });
};

module.exports = futuramaTagline;
