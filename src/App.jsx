import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import "./assets/css/reset.css";
import Home from "./pages/Home.jsx";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Hotsite from "./components/hotsite-component/Hotsite";
import Inicio from "./pages/Inicio";
import MinhasPesquisas from "./pages/MinhasPesquisas";
import CriarPesquisa from "./pages/CriarPesquisa";
import ResponderResquisa from "./pages/ResponderPesquisa";
import AgradecimentoResposta from "./pages/AgradecimentoResposta";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/login" element={<Login />} />
            <Route path="/hotsite" element={<Hotsite />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/dashboard/id=:idPesquisa" element={<Dashboard />} />
            <Route path="/relatorios" element={<MinhasPesquisas />} />
            <Route path="/criar-pesquisa" element={<CriarPesquisa />} />
            <Route
              path="/responder-pesquisa/id=:idPesquisa"
              element={<ResponderResquisa />}
            />
            <Route
              path="/finalizacao-responder-pesquisa"
              element={<AgradecimentoResposta />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </BrowserRouter>
    </>
  );
}

export default App;
