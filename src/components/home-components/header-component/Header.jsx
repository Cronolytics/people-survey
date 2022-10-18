
import './header-style.css'
import '../../../assets/css/home-style.css'
import '../../../assets/css/reset.css';

import PeopleSurveyLogotipo from '../../../assets/images/home/peopleSurveyLogotipo.png'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>

            <nav className="navbar principal flex-centralization">
                <div className="container">
                    <div className="nav-content">
                        <img src={PeopleSurveyLogotipo} alt={"People Survey Logotipo"} style={{ height: '40px' }} />
                        <div className="nav-final-itens">
                            <Link to="/login">
                                <button className="button-login"> Login </button>
                            </Link>
                            <Link to="/cadastro">
                                <button className="button-cadastro"> Testar grátis </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            <nav class="navbar secundaria flex-centralization">
                <div class="container">
                    Que tal descobrir algo novo ?
                </div>
            </nav>
        </>
    )
}

export default Header;