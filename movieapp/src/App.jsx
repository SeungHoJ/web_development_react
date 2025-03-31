import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css'
import Home from './routes/Home';
import Detail from './routes/Detail2';

function App() {

  return (
   <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/movie/:id' element={<Detail />} />
    </Routes>
   </Router>
  )
}

export default App;
