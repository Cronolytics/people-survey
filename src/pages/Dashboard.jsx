import React from "react";
import '../assets/css/reset.css'
import '../assets/css/dash-style.css'
import CardPesquisa from "../components/dashboard-components/card-pesquisa-component/CardPesquisa";
import { Pie } from 'react-chartjs-2';

function Dashboard(){

    const pesquisasResumidas = [
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
            tipo: "Pesquisa interna",
            isSelecionado: false,
            titulo: "Avaliação de Pagamentos - Setor de cobranças",
            qtdPerguntas: 2,
            qtdPessoas: 85,
            qtdRespostas: 170,
            status: "Em andamento"
        }
    ]

    //var respostasPesquisas = [
    //    {
    //        id: 1,
    //        perguntas: [
    //            {
    //                id: 1,
    //                titulo: "Qual a capital de São Paulo ?",
    //                componente: {
    //                    nomeComponente: "alternativa",
    //                    multiEsc: false
    //                },
    //                respostas:[
    //                    {
    //                        label: "São Paulo",
    //                        qtdRespostas: 200
    //                    },
    //                    {
    //                        label: "Diadema",
    //                        qtdRespostas: 80
    //                    }
    //                ]
    //            },
    //            {
    //                id: 2,
    //                titulo: "Você compra criptomoedas ?",
    //                componente: {
    //                    nomeComponente: "alternativa",
    //                    multiEsc: false
    //                },
    //                respostas:[
    //                    {
    //                        label: "Sim",
    //                        qtdRespostas: 80
    //                    },
    //                    {
    //                        label: "Não",
    //                        qtdRespostas: 200
    //                    }
    //                ]
    //            },
    //            {
    //                id: 3,
    //                titulo: "Você está desempregado ?",
    //                componente: {
    //                    nomeComponente: "alternativa",
    //                    multiEsc: false
    //                },
    //                respostas:[
    //                    {
    //                        label: "Sim",
    //                        qtdRespostas: 95
    //                    },
    //                    {
    //                        label: "Não",
    //                        qtdRespostas: 95
    //                    }
    //                ]
    //            },
    //        ]
    //    }
    //];

    return (
        <>
            <div className="sup-navbar">
                <div className="avatar"></div>
            </div>

            <div className="dash-background">
                <div className="container">
                    <div className="card-content">
                        <div className="title">
                            Pesquisas em andamento
                        </div>
                        <div className="scroll-card-box">              
                            {
                                pesquisasResumidas.map((pesquisa, index) => {
                                    return (  
                                        <>
                                        <div>
                                            <CardPesquisa
                                                key={pesquisa.id}
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

                        <div className="card-responses-charts-area">
                            <div className="title">
                                Resultados
                            </div>
                            <div className="card-responses-charts-box">
                                <div className="responses-box">
                                    <button className="square ui icon button"><i aria-hidden="true" className="left arrow icon"></i></button>
                                        <span className="title contador-pergunta">Pergunta 01</span>
                                    <button className="square ui icon button"><i aria-hidden="true" className="right arrow icon"></i></button>
                                </div>

                                <div className="chart-box">
                                    <div>
                                    <Pie    data={{
                                                labels: ['Red', 'Blue', 'Yellow'],
                                                datasets: [{ 
                                                    label: '# of votes',                             
                                                    data: [300, 50, 100],
                                                    backgroundColor: [
                                                        'rgb(255, 99, 132)',
                                                        'rgb(54, 162, 235)',
                                                        'rgb(255, 205, 86)'
                                                    ],
                                                    borderColor: [
                                                        'rgb(255, 99, 132)',
                                                        'rgb(54, 162, 235)',
                                                        'rgb(255, 205, 86)'
                                                    ],
                                                    hoverOffset: 4
                                                }]
                                            }}
                                            height={300}
                                            width={300}
                                            options={{
                                                maintainAspectRatio: false,
                                            }}
                                        />
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