import { useState } from 'react'
import './App.css'

function App() {
  const [ toDo, setToDo] = useState('');
  const [ toDos, setToDos] = useState([]);


  const onSubmit = e => {
    e.preventDefault();
    if(toDo === '')return;
    setToDos((arr) => [toDo,...arr])
    console.log(toDos)
    setToDo('');
    

  }
  

  return (
    <>
      <h1>My To Dos</h1>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={(e) => setToDo(e.target.value)} value={toDo}/>
        <button>Add To Do</button>  
      </form>
      <hr />
      <ul>
        {toDos.map((todo,index) => <li key={index}>{todo}</li>)}
      </ul>
    </>
  )
}

export default App
