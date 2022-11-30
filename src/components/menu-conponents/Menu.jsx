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
                  <div className="txt-opt" onClick={() => navigate('/inicio')}>
                    <div className='opt-menu'>Inicio</div> 
                  </div>
    
                  <div className="txt-opt" onClick={() => navigate('/criar-pesquisa')}>
                    <div className='opt-menu'>Criar pesquisa</div> 
                  </div>
    
                  <div className="txt-opt" onClick={() => navigate('/relatorios')}>
                    <div className='opt-menu'>Relatórios</div>
                  </div>
              </div>
            </ul>
          </div>
    </>
  );
}

export default Menu;
