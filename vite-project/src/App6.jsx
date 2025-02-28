import { useState } from 'react';

function App6(){
  const[count1, setCount1] = useState(0);
  const[count2, setCount2] = useState(0);

  const increment = () =>{
    setCount1(count1 + 1);
    setCount2(count2 + 1);
  }
  return(
  <>
    <p>카운트 넘버1 : {count1}</p>
    <p>카운트 넘버2 : {count2}</p>
    <button onClick ={increment}>증가</button>
  </>

  );
}

export default App6;