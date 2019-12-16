const request = require('request')
const url = 'https://api.darksky.net/forecast/37e5df372f2e74b6cbb3c923555374c9/37.8267,-122.4233'
const mbURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZ3JhY2llbWNndWlyZSIsImEiOiJjazQ4d2IydnAxN2d4M2ptcjl6Z3M4Z2c3In0.cQ1pkEpdke-kwxC9AcEv8w&limit=1'

request({ url: url, json: true }, (error, response) => {
  const { temperature, precipProbability } = response.body.currently

  console.log(`${ response.body.daily.data[0].summary } it is currently ${ temperature } out,there is a ${ precipProbability }% chance of rain`);
})

request({ url: mbURL, json: true }, (error, response) => {
  console.log(response.body.features);
})
