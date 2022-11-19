import React from 'react'
import '../assets/css/reset.css'
import '../assets/css/minhas-pesquisas.css'
import Menu from '../components/menu-conponents/NavbarMenu'
import CardPesquisa from '../components/dashboard-components/card-pesquisa-component/CardPesquisa'

function MinhasPesquisas() {

  const minhasPesquisasResumidas = [
    {
      id: 1,
      isSelecionado: true,
      tipo: "Pesquisa interna",
      titulo: "Avaliação de liderança - Financeiro",
      qtdPerguntas: 3,
      qtdPessoas: 280,
      qtdRespostas: 840,
      status: "Em andamento"
    },
    {
      id: 2,
      isSelecionado: false,
      tipo: "Pesquisa interna",
      titulo: "Avaliação de liderança - Tecnologia da informação",
      qtdPerguntas: 2,
      qtdPessoas: 180,
      qtdRespostas: 360,
      status: "Em andamento"
    },
    {
      id: 3,
      isSelecionado: false,
      tipo: "Pesquisa interna",
      titulo: "Avaliação de Vendas - Telemarketing",
      qtdPerguntas: 2,
      qtdPessoas: 85,
      qtdRespostas: 170,
      status: "Em andamento"
    },
    {
      id: 4,
      isSelecionado: false,
      tipo: "Pesquisa interna",
      titulo: "Avaliação de liderança - Recursos Humanos",
      qtdPerguntas: 1,
      qtdPessoas: 180,
      qtdRespostas: 180,
      status: "Em andamento"
    },
    {
      id: 5,
      tipo: "Pesquisa Externa",
      isSelecionado: false,
      titulo: "Avaliação de Pagamentos - Setor de cobranças",
      qtdPerguntas: 2,
      qtdPessoas: 85,
      qtdRespostas: 170,
      status: "Em andamento"
    }
  ]

  return (
    <>
      <div className="navbar-menu">
        <Menu />
        <div className="titlle-nav">
          <h1>Minhas pesquisas</h1>
        </div>
      </div>
      <div className="box-pesquisas">
        {
          minhasPesquisasResumidas.map((pesquisa, index) => {
            return (
              <>
                
                  <CardPesquisa
                    key={pesquisa.id}
                    isSelecionado={minhasPesquisasResumidas[0] === pesquisa ? true : false}
                    id={pesquisa.id}
                    tipo={pesquisa.tipo}
                    titulo={pesquisa.titulo}
                    qtdPerguntas={pesquisa.qtdPerguntas}
                    qtdPessoas={pesquisa.qtdPessoas}
                    qtdRespostas={pesquisa.qtdRespostas}
                    status={pesquisa.status}
                  />
               
              </>
            );
          })
        }
      </div>
    </>

  )
}

export default MinhasPesquisas
