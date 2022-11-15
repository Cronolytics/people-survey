
import './header-style.css'
import '../../../assets/css/home-style.css'
import '../../../assets/css/reset.css';

import PeopleSurveyLogotipo from '../../../assets/images/home/peopleSurveyLogotipo.png'
import { useNavigate } from 'react-router-dom';

function Header() {

    const navigate = useNavigate();

    return (
        <>

            <nav className="navbar principal flex-centralization">
                <div className="container">
                    <div className="nav-content">
                        <img src={PeopleSurveyLogotipo} alt={"People Survey Logotipo"} style={{ height: '40px' }} />
                        <div className="nav-final-itens">
                                <button onClick={() => navigate("/hotsite")} className="button-login"> Hotsite </button>
                                <button onClick={() => navigate("/login")} className="button-login"> Login </button>
                                <button onClick={() => navigate("/cadastro")} className="button-cadastro"> Testar grátis </button>
                        </div>
                    </div>
                </div>
            </nav>

            <nav className="navbar secundaria flex-centralization">
                <div className="container">
                    Que tal descobrir algo novo ?
                </div>
            </nav>
        </>
    )
}

export default Header;