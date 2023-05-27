import { Route, Routes } from 'react-router-dom'
import './App.css'
import Admindash from './components/Admindash'
import Homepage from './components/Homepage'
import Login from './components/Login'
import Moddash from './components/Moddash'
import Userdash from './components/Userdash'
import Forms from './components/Forms'
import Pollcard from './components/Pollcard'




function App() {


  return (
    // <><Homepage /></>
    <div>
     <Login />
     <Pollcard/>
   <Routes>
    
    <Route path='user' element={<Userdash/>}/>
    <Route path='admin' element={<Admindash/>}/>
    <Route path='mod' element={<Moddash/>}/>
    <Route path='modlogin' element={<Forms/>}/>
    <Route path='adminlogin' element={<Forms/>}/>
    <Route path='card' element={<Pollcard/>}/>
   </Routes>
   </div>
  )
}

export default App
