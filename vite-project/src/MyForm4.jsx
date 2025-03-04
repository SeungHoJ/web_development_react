import { useState } from "react";
import './App.css'

function MyForm() {
  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const [email,setEmailName] = useState('');

  const handleSubmit = (event) => {
    alert(`${firstName} ${lastName}님 안녕하세요`)
    event.preventDefault();
  }
  return(
    <form onSubmit={handleSubmit}>
       <input type="text" onChange={(event) =>setFirstName(event.target.value)} value={firstName} placeholder="성"/><br />
        <input type="text" onChange={(event) => setLastName(event.target.value)} value={lastName} placeholder="이름"/>
        <br />
        <input type="email" onChange={(event) => setEmailName(event.target.value)} value={email} placeholder="이메일"/>
        <br />
        <input type="submit" value="제출"/>
    </form>
  )
}

export default MyForm;