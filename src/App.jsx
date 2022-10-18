import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/css/reset.css';
import Home from './pages/Home.jsx'
import Cadastro from './pages/Cadastro'
import Login from './pages/Login'



function App() {
  
  return (
    <>
        <Router>
          <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cadastro' element={<Cadastro />} />
                <Route path='/login' element={<Login />} />
          </Routes>
        </Router>
    </>
  );
}

export default App;
