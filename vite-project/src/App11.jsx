import { useState } from "react";
import './App.css';

function App(){
  const [count, setCount] = useState(0);
  console.log('렌더링되었습니다');
  console.log(`현재 카운트 : ${count}`);

  return(
    <div>
        <p>버튼을 눌러주세요</p>
        <button onClick={() => {
          console.log('---------')
          console.log('버튼을 클릭했습니다')
          setCount(count => count+1);
          console.log(`렌더링 전의 count : ${count}`);
        }}>
        버튼
        </button>
        <br>
        </br>
        현재{count}
    </div>
  )
}

export default App;