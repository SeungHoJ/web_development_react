import { useState,useRef } from "react";
import './App.css'

function App(){

  const [count,setStateCount] = useState(0);
  const refCount = useRef(0);
  return(
    <div className="App">
      <button onClick={() => setStateCount(count => count+1)}>
      State버튼
      </button>
      <br /><br />
      <button onClick={() => refCount.current+=1}>
      Ref버튼
      </button>
      <div>StateCount : {count}</div>
      <br /><br />
      <div>RefCount : {refCount.current}</div>
    </div> 

  );
}

export default App;