
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {Routes,Route} from'react-router-dom'
import './App.css'
import Header from './pages/Header'
import Home from './pages/Home'

import Favorites from './pages/Favorites'
function App() {
 

  return (
    <div>
    <Header/>
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/Favorites' element={<Favorites/>}/>
    </Routes>
   
 </div>
  )
}

export default App
