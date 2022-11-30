
import './header-style.css'
import '../../../assets/css/home-style.css'
import '../../../assets/css/reset.css';

import PeopleSurveyLogotipo from '../../../assets/images/home/peopleSurveyLogotipo.png'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Header() {

    const navigate = useNavigate();
    const [pesquisaInput, setPesquisaInput] = useState()

    return (
        <div className='englobadora'>
            <nav className="navbar-principal flex-centralization">
                <div className="container">
                    <div className="nav-content">
                        <img src={PeopleSurveyLogotipo} alt={"People Survey Logotipo"} style={{ height: '40px' }} />
                        <div className="nav-final-itens-header">
                                <button onClick={() => navigate("/hotsite")} className="button-login"> Hotsite </button>
                                <button onClick={() => navigate("/login")} className="button-login"> Login </button>
                                <button onClick={() => navigate("/cadastro")} className="button-cadastro"> Testar grátis </button>
                        </div>
                    </div>
                </div>
            </nav>
            <nav className="navbar-secundaria">
                <div className="container-nav">
                    <div className='nav-secundaria-conteudo'>
                        <div className='pergunta-navbar'>
                            Que tal descobrir algo novo ?
                        </div>
                        <div className='search-pesquisa-area'>
                            
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;