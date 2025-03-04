import { useState } from "react";
import './App.css'

export default function MyForm3(){
  const [user,setUser] = useState({
    firstName : '',
    lastName : '',
    email : ''
  })
  const handleChange = (event ) =>{
    setUser({...user, [event.target.name] : event.target.value})
  }


  const handleSubmit = (event) =>{
    alert(`성 : ${user.firstName} 이름 : ${user.lastName}  이메일 : ${user.email}이 입력되었습니다.`)
    event.preventDefault();
  }
  return(
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" onChange={handleChange} value={user.firstName} placeholder="성"/><br />
        <input type="text" name="lastName" onChange={handleChange} value={user.lastName} placeholder="이름"/>
        <br />
        <input type="email" name="email" onChange={handleChange} value={user.email} placeholder="이메일"/>
        <br />
        <input type="submit" value="제출"/>
      </form>
    </>
  )
}