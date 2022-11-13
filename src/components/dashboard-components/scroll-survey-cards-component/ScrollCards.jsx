import React from "react";
import { useState, useEffect } from "react";
import CardPesquisa from "../card-pesquisa-component/CardPesquisa";
import './scroll-cards-style.css'

function ScrollCards(props){

    //const [pesquisas, setPesquisas] = useState( [] );
    //useEffect(() => {listarPesquisas()},[])

    const pesquisas = [
        {
            id: 1,
            tipo: "Pesquisa interna",
            titulo: "Avaliação de liderança - Financeiro",
            qtdPerguntas: 10,
            qtdPessoas: 280,
            qtdRespostas: 2880,
            status: "Em andamento"
        },
        {
            id: 2,
            tipo: "Pesquisa interna",
            titulo: "Avaliação de liderança - Tecnologia da informação",
            qtdPerguntas: 8,
            qtdPessoas: 180,
            qtdRespostas: 1800,
            status: "Em andamento"
        },
        {
            id: 3,
            tipo: "Pesquisa interna",
            titulo: "Avaliação de Vendas - Telemarketing",
            qtdPerguntas: 15,
            qtdPessoas: 85,
            qtdRespostas: 1275,
            status: "Em andamento"
        },
        {
            id: 2,
            tipo: "Pesquisa interna",
            titulo: "Avaliação de liderança - Tecnologia da informação",
            qtdPerguntas: 8,
            qtdPessoas: 180,
            qtdRespostas: 1800,
            status: "Em andamento"
        },
        {
            id: 3,
            tipo: "Pesquisa interna",
            titulo: "Avaliação de Vendas - Telemarketing",
            qtdPerguntas: 15,
            qtdPessoas: 85,
            qtdRespostas: 1275,
            status: "Em andamento"
        }
    ]

//    function listarPesquisas(){
//        setPesquisas(
//        {
//            id: 1,
//            titulo: "Pesquisa interna",
//            titulo: "Avaliação de liderança - Financeiro",
//            qtdPerguntas: 10,
//            qtdPessoas: 280,
//            qtdRespostas: 2880,
//            status: "Em andamento"
//        },
//        {
//            id: 2,
//            titulo: "Pesquisa interna",
//            titulo: "Avaliação de liderança - Tecnologia da informação",
//            qtdPerguntas: 8,
//            qtdPessoas: 180,
//            qtdRespostas: 1800,
//            status: "Em andamento"
//        },
//        {
//            id: 3,
//            titulo: "Pesquisa interna",
//            titulo: "Avaliação de Vendas - Telemarketing",
//            qtdPerguntas: 15,
//            qtdPessoas: 85,
//            qtdRespostas: 1275,
//            status: "Em andamento"
//        },
//        );
//
//        console.log(pesquisas);
//    }

    return(
        <>
            <div className="scroll-card-box">              
                {
                    pesquisas.map((pesquisa, index) => {
                        return (    
                            <CardPesquisa 
                                key={pesquisa.id} 
                                id={pesquisa.id}
                                tipo={pesquisa.tipo}
                                titulo={pesquisa.titulo}
                                qtdPerguntas={pesquisa.qtdPerguntas}
                                qtdPessoas={pesquisa.qtdPessoas}
                                qtdRespostas={pesquisa.qtdRespostas}
                                status={pesquisa.status}
                            />
                        );
                    })
                }
            </div>
        </>
    )
}

export default ScrollCards;