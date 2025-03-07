import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [weather,setWeather] = useState({
    temp : '',
    desc : '',
    icon : '',
    
  });

  useEffect(() => {
    let city = 'Busan'
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APIkey=2447db498537b6e2b23df7ca0f711f64`)
    .then(resp => resp.json())
    .then(result => {
      setWeather({
        temp : result.main.temp,
        desc : result.weather[0].description,
        icon: result.weather[0].icon
      })
    })
    .catch(err => console.log(err))
  },[])
  return (
    <>
      <p>온도 : {weather.temp}</p>
      <p>날씨 : {weather.desc}</p>
      <img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt="" />
    </>
  )
}3

export default App
