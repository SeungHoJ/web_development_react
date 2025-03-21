import { useState } from 'react'
import LoginForm from './components/LoginForm';
import './App.css'


function App() {
  const [isLogin, setIsLogin] = useState(false);

  
  return (
    <div>
      {isLogin ? (
        <div>
            <strong>환영합니다~!</strong>
            <br /><br />
            <button onClick={() => setIsLogin(!isLogin)}>로그아웃</button>
        </div>
      ) : (
        <LoginForm setIsLogin={setIsLogin}/>
      )}
    </div>
  )
}

export default App
