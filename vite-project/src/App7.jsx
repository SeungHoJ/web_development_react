import { useState,useEffect } from "react";
import "./App.css";

// function Counter() {
//   const [count, setCount] = useState(0);

//   // useEffect 사용용
//   useEffect(() => {
//     console.log('useEffect가 실행되었습니다다')
//   },[]);

//   console.log('안녕')

//   return(
//     <>
//       <p>{count}</p>
//       <br/>
//       <button onClick={() => setCount(count => count+1)}>+1 수행</button>
//     </>

//   )
// }

// export default Counter;

// 이상의 코드대로 실행했을 경우 콜백 함수는 렌더링이 이루어질 때 마다 실행됨
// 즉, 버튼을 누를 때마다 useEffect가 실행되었습니다가 출력될겁니다.

// 이상의 문제를 해결하기 위한 방식으로 사용할 수 있는 방법이
// 두 번쨰 argument인 dependencies 배열을 이용하는 방법
// 이번에 작성할 코드는 count 상태 값이 변경되면(즉, 이전 값과 현재 값을 비교해서 달라졌다면) useEffect 콜백 함수가 호출되도록 정의하는 방식입니다.

// 두 번재 argument는 배열이므로 내부에 다양한 element가 들어갈 수 있고, 여러 상태 값 중 하나만 변경되더라도 useEffect 의 콜백 함수가 호출되도록 작성할 수도 있습니다.

// function Counter() {
//   const [count, setCount] = useState(0);

//   // useEffect 사용용
//   useEffect(() => {
//     console.log('useEffect가 실행되었습니다다')
//   },[]);

//   // console.log('안녕')

//   return(
//     <>
//       <p>{count}</p>
//       <br/>
//       <button onClick={() => setCount(count => count+1)}>+1 수행</button>
//     </>

//   )
// }

// export default Counter;

function Counter() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log('Hello from useEffect ')
    return () =>{
      console.log('Clean up Function')
    }
  },[count,count2]);

  return(
    <>
      <p>{count}</p>
      <p>{count2}</p>
      <br/>
      <button onClick={() => setCount(count => count+1)}>+1 수행</button>
      <br/>
      <button onClick={() => setCount2(count => count+1)}>+1 수행</button>
    </>

  )
}

export default Counter;

// 이상의 코드를 작성하고 처음 실행을 해보면
// Hello from useEffect
// Clean UP Function
// Hello from useEffect 까지만 콘솔에 찍히는 점을 확인할 수 있습니다
// 즉 useEffect의 두 번째 argument인 count값이 바뀌지 않았기 때문에 cleanup이 일어나지 않았습니다
// 이후 버튼을 눌러 count 값을 +1 시킬 때 마다 

