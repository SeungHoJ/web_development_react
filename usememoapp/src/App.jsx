import { useMemo, useState,useEffect } from 'react'

import './App.css'

function App() {
  const [ number,setNumber] = useState(0);
  const [ isTrue,setIsTrue] = useState(true);

  // const answer = isTrue ? "true" : "false"

  // const answer = {bool:isTrue ? "true" : "false" }
  // 객체 주소값이 렌더링 될 때 마다 리렌더링이 발생
  const answer = useMemo(() => {
    return { bool : isTrue ? "true" : "false"}
  },[isTrue])


  useEffect(() => {
    console.log('answer값이 변경되었습니다')
  },[answer])
 
  return (
    <div>
      <p>number</p>
      <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
      <hr />
      <p>answer</p>
      <p>True or False ? : {answer.bool}</p>
      <button onClick={e => setIsTrue(!isTrue)}>Reverse</button>
    </div>
  )
}

export default App
