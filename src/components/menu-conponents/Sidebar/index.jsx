import { Container, Content, ImagemLogo } from './styles'
import { FaTimes } from 'react-icons/fa'


import React from 'react'
import SurveyLogo from "../../../assets/images/logo-survey-black-white.png"
import SidebarItem from '../SidebarItem'

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <Content>
      <ImagemLogo>
       <img src={SurveyLogo} className="logo-menu" alt="" />
      </ImagemLogo>
        <SidebarItem Text="Criar pesquisa" />
        <SidebarItem Text="Minhas pesquisas" />
      </Content>
    </Container>
  )
}

export default Sidebar