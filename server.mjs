import express from 'express'
import cors from 'cors'
const app = express()
app.use(cors())

e
app.get('/', (req, res) => {
    console.log('Hello World!', new Date());
  res.send('Hello World!'+ new Date())
})

app.get('/weather:/cityName', (req, res) => {
  console.log('Hello World!', new Date());

  let weatherdata = {
    karachi:{
      city: "karachi",
      tempInC: 30,
      high:45,
      low:20
    },
    london:{
      city: "london",
      tempInC: 15,
      high:35,
      low:2
    },

  }
   let userInputCityName= req.params.cityName.toLowerCase() ;
   let weatherDataToSend= weatherdata[userInputCityName]

   if(weatherDataToSend){
    res.send(weatherDataToSend)
   }else{res.status(404).send(`not available for ${req.params.cityName}`)}

})
const port = 3000
app.listen(port, () => {
  console.log(`Example server listening on port ${port}`)
})