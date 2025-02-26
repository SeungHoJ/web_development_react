import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import App2 from './App2.jsx'
// import Hello from './Hello.jsx'
// import Hello3 from './Hello.jsx'
// import Hello4 from './Hello.jsx'
// import App3 from './App3.jsx'
// import HeaderText from './App4'
import Counter from './App5'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <App2 />  */}
    {/* <Hello3 firstName="로버트" lastName="패틴슨"/>  */}
    {/* <Hello4 firstName="로버트" lastName="패틴슨"/>  */}
    {/* <App3 /> */}
    {/* <HeaderText text ='리액트 학습중'/> */}
    <Counter />
  </React.StrictMode>,
)
