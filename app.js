<<<<<<< HEAD
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]
=======
const request = require('request')
const url = 'https://api.darksky.net/forecast/37e5df372f2e74b6cbb3c923555374c9/37.8267,-122.4233'
>>>>>>> 286213d9e61e002a86e0a1069c0bb92877c352cf

if (!address) {
    console.log('Please provide an address')
} else {
    geocode(address, (error, { latitude, longitude, location }) => {
        if (error) {
            return console.log(error)
        }

<<<<<<< HEAD
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }

            console.log(location)
            console.log(forecastData)
        })
    })
}
=======
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
>>>>>>> 286213d9e61e002a86e0a1069c0bb92877c352cf
