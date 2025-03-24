import { useState } from "react";

export default function LoginForm({state,dispatch}){
  
    const [id,setId] = useState('');
    const [password,setPassword] = useState('');

    const userInfo = {
        id : 'react',
        password : 'qwer1234'
      };
    

    const handleLoginForm = e => {
      e.preventDefault();
  
    if(id === userInfo.id && password === userInfo.password){
      dispatch({type:"LOGIN_SUCCESS",payload: userInfo})
    }else if(id !== userInfo.id && password ===userInfo.password ){
      dispatch({type:"MISS_ID",payload: userInfo})
    }else if(id === userInfo.id&& password!== userInfo.password){
      dispatch({type:"MISS_PASSWORD",payload: userInfo})
    }
  }

  return(
    <form onSubmit={handleLoginForm}>
          <label>아이디</label>
          <input type="text" placeholder='아이디를 입력하세요' onChange={e => setId(e.target.value)}/>
          <br /><br />
          <label>비밀번호</label>
          <input type="password" placeholder='비밀번호를 입력하세요' onChange={e => setPassword(e.target.value)} />
          <br /><br />
          <button>로그인 하기</button>
          <br />
          <p>{state.message}</p>
        </form>
  )
}