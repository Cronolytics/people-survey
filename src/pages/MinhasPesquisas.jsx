import React from 'react'
import '../assets/css/reset.css'
import '../assets/css/minhas-pesquisas.css'
import CardPesquisa from '../components/dashboard-components/card-pesquisa-component/CardPesquisa'
import api from '../api'
import Menu from '../components/menu-conponents/Menu'
import Modal from '../components/modal-components/Modal'
import { useState } from 'react'
import { useEffect } from "react"

function MinhasPesquisas() {

  const [show,                     setShow                    ] = useState(false)

  const [isPesquisasVazia,         setIsPesquisaVazia         ] = useState(false)
  const [pesquisasResumidas,       setPesquisasResumidas      ] = useState(["", ""]);

  const [idPesquisaSelecionada,    setIdPesquisaSelecionada   ] = useState();
  const [tituloSelecionado,        setTituloSelecionado       ] = useState();
  const [respondentesSelecionados, setRespondentesSelecionados] = useState();

  console.log(idPesquisaSelecionada);

  useEffect(function () {
    var userID = sessionStorage.getItem("id");
    api.get(`/pesquisas/pesquisas-simples?idEmpresa=${userID}`
    ).then(function (pesquisasResumidasAPI) {
      setPesquisasResumidas(pesquisasResumidasAPI.data);
      if (pesquisasResumidasAPI.status === 204) {
        setIsPesquisaVazia(true);
      }
      else {
        setIsPesquisaVazia(false);
      }
    }).catch((error) => {
      console.log(error);
    })
  }, [])

  function abrirModal(id, titulo, totalRespondentes){
    setShow(true);
    setIdPesquisaSelecionada(id);
    setTituloSelecionado(titulo);
    setRespondentesSelecionados(totalRespondentes);
  }

  return (
    <>
      <div className='tela-toda'>
        <div className="menu">
          <Menu />
        </div>
        <div className="background-gray">
          <div className='conteudo'>
            <div className='navbar-menu'>
              <div className="titlle-nav">
                <h1>Relatórios</h1>
              </div>
              <div className="input-box">
                <div>
                  <i aria-hidden="true" />
                </div>
              </div>
            </div>
            <div className="container-minhas-pesquisas">
              <div className="pesquisas-box">
                {
                  isPesquisasVazia ? <><div></div></> :
                    pesquisasResumidas.map((pesquisa, index) => {
                      return (
                        <div key={index} className="card-minhas-pesquisas" onClick={() => abrirModal(pesquisa.id, pesquisa.nome, pesquisa.qtdPessoas) }>
                          <CardPesquisa
                            isSelecionado={[0] === pesquisa ? true : false}
                            id={pesquisa.id}
                            tipo={pesquisa.interna ? "Pesquisa Interna" : "Pesquisa Externa"}
                            titulo={pesquisa.nome}
                            qtdPerguntas={pesquisa.qtdPerguntas}
                            qtdPessoas={pesquisa.qtdPessoas}
                            qtdRespostas={pesquisa.qtdRespostas}
                            status={pesquisa.ativa ? "Em andamento..." : "Encerrada"}
                          />
                        </div>
                      );
                    })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal qtdRespondentes={respondentesSelecionados} titulo={tituloSelecionado} idPesquisa={idPesquisaSelecionada} onClose={() => setShow(false)} show={show} />
    </>
  )
}


export default MinhasPesquisas