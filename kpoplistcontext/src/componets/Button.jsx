import { useContext } from "react";
import { KpopContext } from "../context/Context";

function Button({children}){
  const {data,setPalylist} = useContext(KpopContext);

  let result = [...data];

  if(children === '레드벨벳 노래 찾기'){
    result = data.filter((song) => song.artist === 'Red Velvet')
  }
  if(children === '남자 아티스트 노래 찾기'){
    result = data.filter((song) => song.gender === 'male')
  }
  if(children === '여자 아티스트 노래 찾기기'){
    result = data.filter((song) => song.gender === 'Red female')
  }

  const handleClick = () => {
    setPalylist(result);
  }


  return <button onClick={handleClick}>{children}</button>
}

export default Button;