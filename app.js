const request = require('request')


request({ url: url, json: true }, (error, response) => {
  const { temperature, precipProbability } = response.body.currently

  console.log(`${ response.body.daily.data[0].summary } it is currently ${ temperature } out,there is a ${ precipProbability }% chance of rain`);
})
//get lat/long
request({ url: geoCodeURL, json: true }, (error, response) => {
  console.log(response.body.features[0].place_name);
  console.log(response.body.features[0].center);
  const latitude = response.body.features[0].center[1]
  const longitude = response.body.features[0].center[0]
  console.log(latitude);
  console.log(longitude);
})
