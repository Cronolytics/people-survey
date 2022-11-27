import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "../assets/css/responder-pesquisa-style.css";
import api from '../api'
import { useState } from 'react';
import LogoSurvey from '../assets/images/logo-survey.png'
import PerguntaResponder from '../components/responder-pesquisa-componets/PerguntaResponder';

function ResponderResquisa(){

    const {idPesquisa} = useParams();
    var idFormat = idPesquisa.replace(':', '');

    const [isConfigurada, setIsConfigurada] = useState(false);
    const [pesquisaDaVez, setPesquisaDaVez] = useState();
    const [perguntas,     setPerguntas    ] = useState([]);

    console.log(idFormat);

    useEffect(() => {buscarPesquisa()}, [])

    function buscarPesquisa(){
        api.get(`/pesquisas?idPesquisa=${idFormat}`
            ).then(function(pesquisaAPI){
                console.log("Requisição de pesquisa sendo feita...");
                if(pesquisaAPI.status === 404){
                    alert("Pesquisa não existe.")
                }
                else{
                    console.log(pesquisaAPI.status);
                    setPesquisaDaVez(pesquisaAPI.data);
                    console.log(JSON.stringify(pesquisaDaVez, null, 4));
                }
            }).catch((error) => {
                console.log(error);
            })
    }

    function setarPerguntas(){
        setPerguntas([...pesquisaDaVez.perguntas]);
        setIsConfigurada(true);
        console.log("isConfigurada: " + isConfigurada);
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
                                <div className='titulo-pesquisa'>
                                    {isConfigurada ? pesquisaDaVez.nome : "Título"}
                                </div>
                                <div className='nome-empresa'>
                                    {isConfigurada ? pesquisaDaVez.empresa.nome : "Empresa"}
                                </div>
                                
                                <div className='pesquisa-area'>
                                    {
                                        isConfigurada ? perguntas.map((pergunta, i) => {
                                            return(
                                                <>  
                                                    <form className="ui form" key={i}>
                                                        <PerguntaResponder pergunta={pergunta} respostas={perguntas[i].respostas}/>
                                                    </form>                   
                                                </>
                                            )
                                        }) : 
                                        <form class="ui form">
                                            <div class="field">Selected value: <b></b></div>
                                            <div class="field">
                                                <div class="ui radio checkbox">
                                                    <input type="radio" name="radioGroup"  tabindex="0" value="this"/>
                                                    <label>Choose this</label>
                                                </div>
                                            </div>
                                            <div class="field">
                                                <div class="ui radio checkbox">
                                                    <input type="radio" name="radioGroup"  tabindex="0" value="that"/>
                                                    <label>Or that</label>
                                                </div>
                                            </div>
                                        </form>
                                    }
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