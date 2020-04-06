const request = require('request')
const url = 'https://api.darksky.net/forecast/37e5df372f2e74b6cbb3c923555374c9/37.8267,-122.4233'

request({ url: url, json: true }, (error, response) => {
  const { temperature, precipProbability } = response.body.currently

  if (error){
    console.log('unable to connect');
  } else {
    console.log(`${ response.body.daily.data[0].summary } it is currently ${ temperature } out,there is a ${ precipProbability }% chance of rain`);
  }
})

// request({ url: geoCodeURL, json: true }, (error, response) => {
//   const longitude = response.body.features[0].center[0]
//   const latitude = response.body.features[0].center[1]
//   console.log('lat:', latitude, 'long:', longitude);
// })
