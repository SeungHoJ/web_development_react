import './App.css'  

import { useState } from "react";

function App(){
  const [drink,setDrink] = useState(0);

  const drinkWater = () => {
    setDrink(drink+1)
    console.log(`버튼 클릭 횟수 : ${drink}번`)
  };

  return(
    <>
    <p>
      오늘은 물을 <strong> {drink}</strong> 잔을 충전했습니다!!
    </p>
    
    <button onClick ={drinkWater}>충전</button>
    </>
  )
}

export default App;

