const request = require('superagent');

function getTagline(name) {
  return request
    .get(`http://futuramaapi.herokuapp.com/api/characters/${name}/1`)
    .then(res => res.body);
}
module.exports = getTagline;
