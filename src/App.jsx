import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Detail from './pages/detail/Detail'

function App() {

  return (
    <>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/detail" element = {<Detail/>}/>
      </Routes>
    </>
  )
}

export default App
