const request = require('request');

const breedNameInput = process.argv[2]
const catApiUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breedNameInput}`







request.get(catApiUrl, function (error, response, body) {
  if (error) {
    return console.log('failed to request breed', error)
  }

  const data = JSON.parse(body)
  const breed = data[0];
  if (!breed) {
    return console.log('failed to find breed', breedNameInput)
  }

  return console.log(breed.description);
  
  // console.error('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', JSON.parse(body)); // Print the HTML for the Google homepage.
});
