import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Techniques from './pages/Techniques'
import Technique from './pages/Technique'
import Register from './pages/Register'
//import Login from './pages/Login'
//import Profile from './pages/Profile'

export default function App() {
  return (
    <>
      <nav style={{ background: '#121212', color: 'white', padding: '10px' }}>
        <Link to="/" style={{ marginRight: 10 }}>Início</Link>
        <Link to="/techniques" style={{ marginRight: 10 }}>Técnicas</Link>
        <Link to="/profile">Perfil</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/techniques" element={<Techniques />} />
        <Route path="/techniques/:id" element={<Technique />} />
      </Routes>
    </>
  )
}