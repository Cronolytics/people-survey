import React from 'react'
import '../assets/css/reset.css'
import '../assets/css/minhas-pesquisas.css'
import Menu from '../components/menu-conponents/NavbarMenu'

function MinhasPesquisas() {

  return (
  
    <div>
      <div className="navbar-menu">
        <Menu />
        <div className="titlle-nav">
            <h1>Minhas pesquisas</h1>
        </div>
      </div>

    </div>
  )
}

export default MinhasPesquisas
