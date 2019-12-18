const request = require('request')


request({ url: url, json: true }, (error, response) => {
  const { temperature, precipProbability } = response.body.currently

  console.log(`${ response.body.daily.data[0].summary } it is currently ${ temperature } out,there is a ${ precipProbability }% chance of rain`);
})

request({ url: geoCodeURL, json: true }, (error, response) => {
  const longitude = response.body.features[0].center[0]
  const latitude = response.body.features[0].center[1]
  console.log('lat:', latitude, 'long:', longitude);
})
