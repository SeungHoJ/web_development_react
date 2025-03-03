import { useRef } from "react";

export default function App(){

  const textInput = useRef(null);

  const clickBtn = () => {
    console.log('클릭!')
  }

  const handleClickBtn = () => {
    textInput.current.focus();
  }
  return (
    <div>
      <input type="text" />
      <input type="button" value="ref X" onClick={clickBtn} />
      <br />
      <input type="text" ref={textInput} />
      <input type="button" value='ref O' onClick={handleClickBtn} />
    </div>
  )
}