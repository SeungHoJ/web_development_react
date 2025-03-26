
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [loading,setLoading] = useState(true); 
  const [coins,setCoins] = useState([]);

  useEffect(() =>{
    fetch('https://api.coinpaprika.com/v1/tickers')
    .then(resp => resp.json())
    .then(json => {
      setCoins(json)
      setLoading(!loading)
    })
  }
   ,[])
 
  return (
    <div>
      <h1>Coin Price Tracker</h1>
      <strong>{loading ? "Loading..." : ''}</strong>
    </div>
  )
}

export default App
