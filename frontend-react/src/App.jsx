import { useState } from 'react'
import './assets/css/style.css'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'
import Register from './components/Register.jsx'
import {BrowserRouter,Routes, Route} from 'react-router-dom' 
import AuthProvider from './AuthProvider.jsx'
import Login from './components/Login.jsx'
import Dashboard from './components/dashboard/Dashboard.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AuthProvider>
      <BrowserRouter>
    <Header />
     <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
     <Footer/>
     </BrowserRouter>
    </AuthProvider>
    </>
  )
}

export default App
