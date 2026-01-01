import { useEffect, useState } from "react"
import axios from "axios"

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY


function App() {
  const [weather, setWeather] = useState(null)
  const [city, setCity] = useState('')

  const myapifetch = () => {
    setWeather(null)
    axios.get("https://api.openweathermap.org/data/2.5/weather", {
      params: {
        q: city,
        units: "metric",
        appid: API_KEY,
      },
    })
     .then((res) => {
      setWeather(res.data)
    })

  }


  return (
    <>
    
    <h1>Weather App 🌩️</h1>
    <form>
      <label>enter city
        <input 
          // value={city}
          onChange={(e)=>setCity(e.target.value)}/>
      </label>
    </form>


    <button onClick={myapifetch}> CLICK ME</button>
    {weather && weather.main && weather.main.temp && <div>hi the weather is {weather.main.temp}
      
      </div>}
    

    </>
  )
}

export default App
