import React from 'react';
import { useNavigate } from 'react-router-dom'
import './Menu.css';
import LogoSurvey from '../../assets/images/logo-survey-black-white.png'
import Toastify from 'toastify-js'

function Menu() {

  const navigate = useNavigate();

  function deslogar(){
    sessionStorage.clear();
    Toastify({
      text: "Sessão finalizada!",
      duration: 3000,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: { background: "linear-gradient(to right, #00b09b, #96c93d)" }
  }).showToast();
    navigate("/")
  }

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
        <div className='logoff-area' onClick={() => deslogar()}>
          <div className='logoff-box'>
            Sair
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
