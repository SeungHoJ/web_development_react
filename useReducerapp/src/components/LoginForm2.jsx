import { useState } from "react";

export default function LoginForm({setIsLogin}){
  const [id,setId] = useState('');
  const [password,setPassword] = useState('');
  const [message,setMessage] = useState('');

  const handleLoginForm = (event) => {
    event.preventDefault();
    if(id==='react' && password==='qwer1234'){
      setIsLogin(true);
      setMessage('로그인 성공')

    }else{
      setMessage('로그인 실패')
    }
  }

  return(
    <form onSubmit={handleLoginForm}>
      <label>ID </label>
      <input type="text" placeholder="아이디를 입력하세요" onChange={(event) => setId(event.target.value)} />
      <br /><br />
      <label>Password </label>
      <input type="password" placeholder="비밀번호를 입력하세요" onChange={(event) => setPassword(event.target.value)} />
      <br /><br />
      <button>로그인</button>
      <br />
      <p>{message}</p>

    </form>
  )
}