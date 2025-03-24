import { useMemo } from "react";

export default function ShowState({number, text}){
  const consolNumber = (number) =>{
    console.log('숫자자가 변경되었습니다');
    return text
  }

  const consolText = (text) =>{
    console.log('문자가 변경되었습니다');
    return text
  }

  const showNum = useMemo(() => consolNumber(number),[number])
  const showText = useMemo(() => consolText(text),[text])


  return(
    <div>
      <p> 숫자 : {number} </p>
      <p> 문자 : {text} </p>
    </div>
  )
}