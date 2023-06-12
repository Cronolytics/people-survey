import React from "react";
import '../assets/css/reset.css'
import '../assets/css/inicio-style.css'
import '../assets/css/style.css'
import CardPesquisa from "../components/dashboard-components/card-pesquisa-component/CardPesquisa";
import Menu from '../components/menu-conponents/Menu'
import api from '../api'
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Inicio() {

    const [isModalOpen,           setIsModalOpen          ] = useState(false)

    const [isPesquisasVazia,      setIsPesquisaVazia      ] = useState(false);
    const [pesquisasResumidas,    setPesquisasResumidas   ] = useState([]);

    const [pesquisaSelecionada,   setPesquisaSelecionada  ] = useState();

    const navigate = useNavigate()

    useEffect(() => {
        var userID = sessionStorage.getItem("id");
        api.get(`/pesquisas/pesquisas-simples?idEmpresa=${userID}`

        ).then(function(pesquisasResumidasAPI){
            setPesquisasResumidas(pesquisasResumidasAPI.data);
            console.log("Entrei na primeira requisição");
            if(pesquisasResumidasAPI.status === 204){
                setIsPesquisaVazia(true);
            }
            else{
                setPesquisaSelecionada(pesquisasResumidasAPI.data[0].id)
                setIsPesquisaVazia(false);
            }
            }).catch((error) => {
                console.log(error);
            })
    },[])
    
    //console.log(JSON.stringify(pesquisasResumidas));
    console.log(pesquisaSelecionada);
    
    return (
        <div className="tela-toda">
            <div className="menu">
                <Menu />
            </div>
            <div className="conteudo gray-background">
                <div className='navbar-menu'>
                    <div className="titlle-nav">
                        <h1>Menu Inicial</h1>
                    </div>
                </div>
                <div className={isModalOpen ? "shadow-background-inicio" : "hide"}>
                    <div className='card-modal-inicio'>
                        <div className='card-header-inicio'>
                            <div className="fecharModal">
                                <button onClick={() => setIsModalOpen(false)} className="button-circle">
                                    X
                                </button>
                            </div>
                        </div>
                        <div className='sub-titulo'>
                            <span><b>Compartilhe este link para obter respostas.</b></span> 
                        </div>
                        <div className="box-link-pesquisa">
                            <div className="modal-input-limiter">
                                <div className="ui fluid labeled input">
                                    <div className="ui label label">http://</div>
                                    <input readOnly type="text" value={`http://3.92.171.109:8081/responder-pesquisa/id=:${pesquisaSelecionada}`}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="card-content">
                        <div className="title">
                            Pesquisas em andamento
                        </div>
                        <div className="scroll-card-box">
                            {
                                isPesquisasVazia ? <><div></div></> : 
                                pesquisasResumidas.map((pesquisa, index) => {
                                    return (                                          
                                        <div key={index} onClick={()=> setPesquisaSelecionada(pesquisa.id)} className={pesquisa.id === pesquisaSelecionada ? "selecionado" : "outside"}>
                                            <CardPesquisa
                                                id={pesquisa.id}
                                                tipo={pesquisa.interna === true ? "Pesquisa Interna" : "Pesquisa Externa"}
                                                titulo={pesquisa.nome}
                                                qtdPerguntas={pesquisa.qtdPerguntas}
                                                qtdPessoas={pesquisa.qtdPessoas}
                                                qtdRespostas={pesquisa.qtdRespostas}
                                                status={pesquisa.ativa === true ? "Em andamento..." : "Encerrada."}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </div>

                        <div className={isModalOpen ? "hide" : "options-area"}>
                            <div className="button-box-inicio">
                                <button className="ui animated button button-limiter-inicio">
                                    <div onClick={() => navigate(`/dashboard/id=:${pesquisaSelecionada}`)} className="hidden content">Dashboard</div>
                                    <div className="visible content">
                                        <i aria-hidden="true" className="chart pie icon"></i>
                                    </div>
                                </button>
                            </div>
                            <div className="button-box-inicio">
                                <button onClick={() => setIsModalOpen(true)} className="button-limiter-inicio ui animated button">
                                    <div className="hidden content">Gerar Link</div>
                                    <div className="visible content">
                                        <i aria-hidden="true" className="share alternate icon"></i>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Inicio;