import { Route, Routes } from 'react-router-dom'
import './App.css'
import Admindash from './components/Admindash'
import Homepage from './components/Homepage'
import Login from './components/Login'
import Moddash from './components/Moddash'
import Userdash from './components/Userdash'
import Forms from './components/Forms'




function App() {


  return (
    // <><Homepage /></>
    <div>
     <Login />
   <Routes>
    
    <Route path='user' element={<Userdash/>}/>
    <Route path='admin' element={<Admindash/>}/>
    <Route path='mod' element={<Moddash/>}/>
    <Route path='modlogin' element={<Forms/>}/>
    <Route path='adminlogin' element={<Forms/>}/>
   </Routes>
   </div>
  )
}

export default App
