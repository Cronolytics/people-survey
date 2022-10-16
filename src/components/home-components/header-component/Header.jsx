import './header-style.css'
import '../home-style.css'
import '../../../assets/css/reset.css';

import PeopleSurveyLogotipo from '../../../assets/images/home/peopleSurveyLogotipo.png'

function Header(){
    return(
        <>
            <nav className="navbar principal flex-centralization">
                <div className="container">
                    <div className="nav-content">
                        <img src={PeopleSurveyLogotipo} alt={"People Survey Logotipo"} style={{height: '40px'}}/>
                        <div className="nav-final-itens">
                            <button className="button-login">
                                Login
                            </button>
                            <button className="button-cadastro">
                                Testar grátis
                            </button>
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