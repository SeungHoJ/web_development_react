import { useState } from "react";

export default function MyForm2 (){
  const [text, setText] = useState('');
  
  const handleSubmit = (event) => {
    alert(`${text}라고 입력하였습니다.`)
    event.preventDefault();
  }
  return(
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={(event) => setText(event.target.value)} value={text} placeholder="아무거나 입력하세요."/>
      <input type="submit" value="제출" />
    </form>
  )
}