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

class PesquisaResumida{
    constructor(id, selecionado, nome, qtdPerguntas, qtdRespostas, qtdPessoas, ativa, interna, exploratoria){
        this.id           = id;
        this.selecionado  = selecionado;
        this.nome         = nome;
        this.qtdPerguntas = qtdPerguntas;
        this.qtdRespostas = qtdRespostas;
        this.qtdPessoas   = qtdPessoas;
        this.ativa        = ativa;
        this.interna      = interna;
        this.exploratoria = exploratoria;
    }
}

function Dashboard() {

    var userID = sessionStorage.getItem("id");

    const [isPesquisasVazia,   setIsPesquisaVazia]    = useState(false)
    const [pesquisasResumidas, setPesquisasResumidas] = useState(["", ""]);

    useEffect(function(){
        api.get(`/pesquisas/pesquisas-simples?idEmpresa=${userID}`
        ).then(function(pesquisasResumidasAPI){
        setPesquisasResumidas(pesquisasResumidasAPI.data);
        }).catch((error) => {
        console.log(error);
        })

        if(!pesquisasResumidas){
            setIsPesquisaVazia(true);
        }
        else{
            setIsPesquisaVazia(false);
        }
    }, [])

    console.log(JSON.stringify(pesquisasResumidas));  
    // const pesquisasResumidasAux = [
    //     {
    //         id: 1,
    //         isSelecionado: true,
    //         tipo: "Pesquisa interna",
    //         titulo: "Avaliação de liderança - Financeiro",
    //         qtdPerguntas: 3,
    //         qtdPessoas: 280,
    //         qtdRespostas: 840,
    //         status: "Em andamento"
    //     },
    //     {
    //         id: 2,
    //         isSelecionado: false,
    //         tipo: "Pesquisa interna",
    //         titulo: "Avaliação de liderança - Tecnologia da informação",
    //         qtdPerguntas: 2,
    //         qtdPessoas: 180,
    //         qtdRespostas: 360,
    //         status: "Em andamento"
    //     }
    // ]
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
                                    !isPesquisasVazia ? 
                                    pesquisasResumidas.map((pesquisa, index) => {
                                        return (
                                            <>                                           
                                                <div key={index}>
                                                    <CardPesquisa
                                                        isSelecionado={pesquisasResumidas[0] === pesquisa ? true : pesquisa.selecionado}
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
                                        ); 
                                    }) : (<><div></div></>)
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