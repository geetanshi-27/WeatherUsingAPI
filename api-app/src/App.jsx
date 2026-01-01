import { useEffect, useState } from "react"
import axios from "axios"
import { FaCloudRain } from "react-icons/fa"


const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY


function App() {
  const [weather, setWeather] = useState(null)
  const [city, setCity] = useState('')

  const myapifetch = (e) => {
    e.preventDefault()
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
    <div className="flex flex-col items-center h-screen justify-center bg-[#d5e3ed]">
    <h1 className="text-3xl font-bold text-[#404f59] italic my-6">Weather App 🌩️</h1>
    <form onSubmit={myapifetch} className="text-center">
      <label className="italic text-[#28333b]">enter city
        <br></br>
        <input className="text-black border border-gray-400 rounded-md px-2"
          value={city}
          onChange={(e)=>setCity(e.target.value)}/>
      </label>
      <br></br>
    <button className="my-6 bg-black text-white font-bold py-2 px-4 rounded"> FIND WEATHER </button>
    </form>
    {weather && weather.main && weather.main.temp && <div className="italic">the temperature is {weather.main.temp} in {weather.name}
      
      </div>}
   
    {weather && weather.main && weather.main.humidity && <div style={{ display:'flex'}} className="italic"> 
       <FaCloudRain className="text-sky-300 text-2xl mx-2" />
       humidity is {weather.main.humidity}% </div>}





      </div>
    

    </>
  )
}

export default App
