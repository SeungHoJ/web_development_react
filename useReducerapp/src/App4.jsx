import Reducer from './reducer/Reducer';
import { useReducer } from 'react';
import LoginForm from './components/LoginForm';
import './App.css'




function App() {
  const [state,dispatch] = useReducer(Reducer,{isLogin:false, message:''});
  
  return (
    <div>
      {state.isLogin ? (
        <>
          <strong>welcome</strong>
          <button onClick={() => dispatch({type:"LOGOUT"})}>로그아웃</button>
        </>
      ) : (
        <LoginForm state={state} dispatch={dispatch} />
      )}
    </div>
  )
}

export default App
