import React from "react";
import '../assets/css/reset.css'
import '../assets/css/dash-style.css'
import '../assets/css/style.css'
import CardPesquisa from "../components/dashboard-components/card-pesquisa-component/CardPesquisa";
import Menu from '../components/menu-conponents/Menu'
import api from '../api'
import PieChart from "../components/dashboard-components/pie-chart-component/PieChart";
import { useState } from "react";
import { useEffect } from "react";

function Dashboard() {

    const [isPesquisasVazia,    setIsPesquisaVazia    ] = useState(false)
    const [pesquisasResumidas,  setPesquisasResumidas ] = useState(["", ""]);
    const [pesquisaSelecionada, setPesquisaSelecionada] = useState(6)
    const [classSelecionado,    setClassSelecionado   ] = useState("outside");

    function selecionarPesquisa(){
        
    }

    useEffect(function(){
        var userID = sessionStorage.getItem("id");
        api.get(`/pesquisas/pesquisas-simples?idEmpresa=${userID}`
        ).then(function(pesquisasResumidasAPI){
        setPesquisasResumidas(pesquisasResumidasAPI.data);
        if(pesquisasResumidasAPI.status === 204){
            setIsPesquisaVazia(true);
            setPesquisaSelecionada(pesquisasResumidas[0].perguntas.id)
        }
        else{
            setIsPesquisaVazia(false);
        }
        }).catch((error) => {
        console.log(error);
        })
    }, [])

    //console.log(JSON.stringify(pesquisasResumidas));
    console.log(pesquisaSelecionada);

    function atualizarSelecionado(idPesquisa){
        setPesquisaSelecionada(idPesquisa);
    }
    
    return (
        <>
            <div className="tela-toda">
                <div className="menu">
                    <Menu />
                </div>
                <div className="conteudo gray-background">
                    <div className='navbar-menu'>
                    
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
                                            <>                                           
                                                <div onClick={() => selecionarPesquisa()} key={index.toString} className={classSelecionado}>
                                                    <CardPesquisa
                                                        atualizarSelecionado={atualizarSelecionado}
                                                        id={pesquisa.id}
                                                        tipo={pesquisa.interna === true ? "Pesquisa Interna" : "Pesquisa Externa"}
                                                        titulo={pesquisa.nome}
                                                        qtdPerguntas={pesquisa.qtdPerguntas}
                                                        qtdPessoas={pesquisa.qtdPessoas}
                                                        qtdRespostas={pesquisa.qtdRespostas}
                                                        status={pesquisa.ativa === true ? "Em andamento..." : "Encerrada."}
                                                    />
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                            <div className="card-responses-charts-area">
                                <div className="title">
                                    Resultados
                                </div>
                                <div className="card-responses-charts-box">
                                    <div className="responses-area">
                                        <div className="responses-box">
                                            <button className="square">
                                                <i aria-hidden="true" className="left arrow icon"></i>
                                            </button>
                                            <div className="title contador-pergunta">Pergunta 01</div>
                                            <button className="square">
                                                <i aria-hidden="true" className="right arrow icon"></i>
                                            </button>
                                        </div>
                                        <div>
                                            Pergunta 01 pipipi popopo
                                        </div>
                                        <div>
                                            <div>
                                                <b>A - </b>Primeira opção.
                                            </div>
                                            <div>
                                                <b>B - </b>Segunda opção.
                                            </div>
                                            <div>
                                                <b>C - </b>Terceira opção.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chart-box">
                                        <div>
                                            <PieChart />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;