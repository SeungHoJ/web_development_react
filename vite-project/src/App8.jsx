import { useRef } from 'react';
import './App.css';

function App8(){
  const inputRef = useRef(null);

  return(
    <>
      <input ref ={inputRef} />
      <button onClick={() => inputRef.current.focus()}>
      Focus Input
      </button>
    </>
  )
}

export default App8;