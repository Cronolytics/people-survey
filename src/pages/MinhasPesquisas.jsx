import React from 'react'
import '../assets/css/reset.css'
import '../assets/css/minhas-pesquisas.css'
import CardPesquisa from '../components/dashboard-components/card-pesquisa-component/CardPesquisa'
import Menu from '../components/menu-conponents/Menu'
import Modal from '../components/modal-components/Modal'
import api from '../api'
import { Form } from 'semantic-ui-react'
import { useState } from 'react'
import { useEffect } from "react";



function MinhasPesquisas() {

  const [show, setShow] = useState(false)

  const [isPesquisasVazia, setIsPesquisaVazia] = useState(false)
  const [pesquisasResumidas, setPesquisasResumidas] = useState(["", ""]);

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

  console.log(JSON.stringify(pesquisasResumidas));

  return (
    <>
      <div className='tela-toda-pesuqisas'>

        <div className="menu">
          <Menu />
        </div>

        <div className="gray-background-minhas-pesquisas">

          <div className='conteudo'>
            <div className='navbar-menu'>
              <div className="titlle-nav">
                <h1>Minhas pesquisas</h1>
              </div>
              <div className="input-box">
                <div className="border"></div>
                <div>
                  <i aria-hidden="true" />
                  <Form>
                    <Form.Group widths='equal'>
                      <Form.Field className='from-fied' label='Tipo:' control='select'>
                        <option value=''>Todos</option>
                        <option value='peTodos-interna'>Pesquisa Interna</option>
                        <option value='pesquisa-externa'>Pesquisa Externa</option>
                      </Form.Field>
                      <Form.Field label='Período:' control='input' type="date" />
                      <Form.Field label='Pesquisar:' control='input' placeholder="Pesquisar..." />
                    </Form.Group>
                  </Form>
                </div>
              </div>
            </div>
            <div className="container-minhas-pesquisas" onClick={() => setShow(true)}>
              <div className="pesquisas-box">
                {
                  pesquisasResumidas.map((pesquisa, index) => {
                    return (
                      <>
                        <div key={pesquisa.id}>
                          <CardPesquisa
                            isSelecionado={pesquisasResumidas[0] === pesquisa ? true : false}
                            id={pesquisa.id}
                            tipo={pesquisa.tipo}
                            titulo={pesquisa.titulo}
                            qtdPerguntas={pesquisa.qtdPerguntas}
                            qtdPessoas={pesquisa.qtdPessoas}
                            qtdRespostas={pesquisa.qtdRespostas}
                            status={pesquisa.status}
                          />
                        </div>
                      </>
                    );
                  })
                }
              </div>
            </div>
            <Modal onClose={() => setShow(false)} show={show} />
          </div>
        </div>
      </div>
    </>

  )
}

export default MinhasPesquisas