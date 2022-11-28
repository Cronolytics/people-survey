import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './assets/css/reset.css';
import Home from './pages/Home.jsx'
import Cadastro from './pages/Cadastro'
import Login from './pages/Login'
import Hotsite from './components/hotsite-component/Hotsite';
import Dashboard from './pages/Dashboard';
import MinhasPesquisas from './pages/MinhasPesquisas';
import CriarPesquisa from './pages/CriarPesquisa';
import ResponderResquisa from './pages/ResponderPesquisa';
import AgradecimentoResposta from './pages/AgradecimentoResposta';



function App() {
  
  return (
    <>
        <Router>
          <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/cadastro' element={<Cadastro />}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/hotsite' element={<Hotsite />}/>
                <Route path='/dashboard' element={<Dashboard />}/>
                <Route path='/minhas-pesquisas' element={<MinhasPesquisas />}/>
                <Route path='/criar-pesquisa' element={<CriarPesquisa />}/>
                <Route path='/responder-pesquisa/id=:idPesquisa' element={<ResponderResquisa />}/>
                <Route path='/finalizacao-responder-pesquisa' element={<AgradecimentoResposta />}/>
          </Routes>
        </Router>
    </>
  );
}

export default App;
