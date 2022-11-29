import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import api from '../api'
import PerguntaAnalytics from "../components/dashboard-components/pergunta-analytics-component/PerguntaAnalytics";
import Menu from "../components/menu-conponents/Menu";

function Dashboard(){

    const [respostasCompletas,    setRespostasCompletas   ] = useState({});
    const [isRespostasConfigured, setIsRespostasConfigured] = useState(false);

    const {idPesquisa} = useParams();
    const idFormat = idPesquisa.replace(':', '');

    console.log(respostasCompletas);

    useEffect(function(){
        api.get(`/pesquisas/media-pesquisa?idPesquisa=${idFormat}`
        ).then(function(respostasAPI){
            setRespostasCompletas(respostasAPI.data);
            setIsRespostasConfigured(true)
        }).catch((error) => {
            console.log(error);
        })
    }, [idFormat])

    return(
        <div className="tela-toda">
            <div className="menu">
                <Menu />
            </div>
            <div className="conteudo gray-background">
                <div className='navbar-menu'>
                    <div className="titlle-nav">
                        <h1>Dashboard</h1>
                    </div>
                </div>
                <div className="container">
                    <div className="card-content">
                        <div className="title">
                            <b>Resultados</b>
                        </div>
                        {
                            isRespostasConfigured ? 
                            respostasCompletas.perguntas.map((pergunta, index) => {
                                return(
                                    <div key={index}>
                                        <PerguntaAnalytics 
                                            pergunta={pergunta}
                                            index={index}
                                        />
                                    </div>
                                )
                            })
                            : <div></div>
                                
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;