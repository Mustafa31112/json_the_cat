const request = require('request');
const fetchBreedDescription = function(breedName, callback) {
  const catApiUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`

  request(catApiUrl, (error, response, body) => {
    if (error) {
      return callback(error, null)
    }
  
    const data = JSON.parse(body)
    const breed = data[0];
    if (breed) {
       callback(null, breed.description);
    } else {
      callback("breed not found");
    }
  
    return (breed.description);
    
  });
  
};

module.exports = { fetchBreedDescription }


// console.error('error:', error); // Print the error if one occurred
// console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
// console.log('body:', JSON.parse(body)); // Print the HTML for the Google homepage.
