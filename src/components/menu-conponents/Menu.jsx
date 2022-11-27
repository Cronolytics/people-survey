import React from 'react';
import { useNavigate } from 'react-router-dom'
import './Menu.css';
import LogoSurvey from '../../assets/images/logo-survey-black-white.png'

function Menu() {

  const navigate = useNavigate();

  return (
    <>
          <div className='menu-items'>
            <ul>
              <div className='logo-menu'>
                <img src={LogoSurvey} onClick={() => navigate('/')} alt=''/>
              </div>
            <div className="opt-box">
                <div className="txt-opt" onClick={() => navigate('/dashboard')}>
                  <div className='opt-menu'>Dashboard</div> 
                </div>

                <div className="txt-opt" onClick={() => navigate('/criar-pesquisa')}>
                  <div className='opt-menu'>Criar pesquisa</div> 
                </div>

                <div className="txt-opt" onClick={() => navigate('/minhas-pesquisas')}>
                  <div className='opt-menu'>Minhas Pesquisas</div>
                </div>

                <div className="txt-opt" onClick={() => navigate('/responder-pesquisa/id=:16')}>
                  <div className='opt-menu'>Responder Pesquisa</div>
                </div>
            </div>
            </ul>
          </div>
    </>
  );
}

export default Menu;
