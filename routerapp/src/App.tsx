import { BrowserRouter,Route, Routes,Link } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Contact from './components/Contact'
import PageNotFound from './components/PageNotFound'
import ContactLondon from './components/ContactLondon'
import ContactSeoul from './components/ContactSeoul'


function App() {

  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>{' | '}
          <Link to="/contact">Contact</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/contact' element={<Contact />}>
            <Route path='seoul' element={<ContactLondon />}></Route>
            <Route path='london' element={<ContactSeoul />}></Route>
          </Route>
          <Route path='/*' element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
