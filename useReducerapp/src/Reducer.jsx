import { useReducer } from "react";

function reducer(prevCount, action){
  if(action === 'up'){
    return prevCount + 1;
  }else if(action === 'down'){
    return prevCount - 1;
  }else{
    return prevCount * 0;
  }
}

export default function ReducerUse(){
  const [state , dispatch] = useReducer(reducer,0);

  function down(){
    dispatch("down");
  }
  function up(){
    dispatch("up");
  }
  function reset(){
    dispatch("reset");
  }

  return (
      <div>
        <p>현재 내가 가지고 있는 사과 개수는{state
          }개</p>
        <input type="button" value="사과 1개 먹음" onClick={down} />
        <input type="button" value="사과 1개 구매매" onClick={up} />
        <input type="button" value="사과 모두 먹음" onClick={reset} />
      </div>
  )
}

