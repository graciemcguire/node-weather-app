const request = require('request')
const url = 


request({ url: url, json:true }, (error, response) => {
  console.log(response.body.currently);
  const { temperature, precipProbability } = response.body.currently
  console.log(`${ response.body.daily.data[0].summary } it is currently ${ temperature } out,there is a ${ precipProbability }% chance of rain`);
})
