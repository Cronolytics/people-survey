import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "../assets/css/responder-pesquisa-style.css";
import api from '../api'
import { useState } from 'react';
import LogoSurvey from '../assets/images/logo-survey.png'

function ResponderResquisa(){

    const {idPesquisa} = useParams();
    var idFormat = idPesquisa.replace(':', '');

    const [isConfigurada, setIsConfigurada] = useState(false);
    const [pesquisaDaVez, setPesquisaDaVez] = useState();

    var perguntas = [];
    console.log(idFormat);

    // useEffect(() => {
    //     buscarPesquisa();
    // }, [])

    // useEffect(() => {
    //     setarPerguntas();
    // }, [pesquisaDaVez])

    function buscarPesquisa(){
        api.get(`/pesquisas?idPesquisa=${idFormat}`
            ).then(function(pesquisaAPI){
                console.log("Requisição de pesquisa sendo feita...");
                if(pesquisaAPI.status === 200){
                    setPesquisaDaVez(pesquisaAPI.data);
                    console.log(JSON.stringify(pesquisaDaVez, null, 4));
                }
            }).catch((error) => {
                console.log(error);
            })
    }

    function setarPerguntas(){
        perguntas = [...pesquisaDaVez.perguntas];
        setIsConfigurada(true);
        console.log(perguntas);
    }

    return(
        <>
            <div>
                <div className='tela-full'>
                    <div className='conteudo-pesquisa'>
                        <div className='container'>
                            <div className='header-pagina'>
                                <img src={LogoSurvey} alt=''/> 
                                <div>
                                <button onClick={buscarPesquisa}>buscarPesquisa</button>
                                <button onClick={setarPerguntas}>carregarQuestionario</button>
                                </div>                              
                            </div>
                            <div className='card-pesquisa'>
                                {isConfigurada ? pesquisaDaVez.nome : "Título"}
                                <div className='pesquisa-area'>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResponderResquisa;