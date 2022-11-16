import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { IconContext } from 'react-icons';
import './NavbarMenu.css';
import LogoSurvey from '../../assets/images/logo-survey-black-white.png'

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const navigate = useNavigate();

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar-menu'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
              <img src={LogoSurvey} onClick={() => navigate('/')} className='logo-menu' />
            <div className="opt-box">
                <div className="txt-opt" onClick={() => navigate('/criarpesquisa')}> <a> Criar pesquisa</a> </div>
                <div className="txt-opt" onClick={() => navigate('/minhaspesquisas')}><a>Minhas Pesquisas</a> </div>
            </div>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
