import { useState } from 'react'
import axios from 'axios'

const App = () => {

  const [cityName, setCityName] = useState(null)
  const [whetherData, sethetherData] = useState(null)
  
  // this is api which provides coordinates according to our city
  let getCoordinates = async (city) => {
    let res = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`);
    console.log(res.data.results[0])
  }


  // this api is dependent on coordinates
  let fetchWhetherData = async() => {
    let res = await axios.get("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m")
    console.log(res)
  }

  let handleTemperature = () => {
    getCoordinates(cityName)
  }


  return (
    <div>
      <h1>Hello</h1>
      <input onChange={(e) => setCityName(e.target.value)} type="text" placeholder='Enter city name' />
      <button onClick={handleTemperature}>Temperature</button>

      {
        whetherData && <h1>Temperature is 30.7</h1>
      }
      
    </div>
  )
}

export default App