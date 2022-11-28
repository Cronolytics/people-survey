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

    class PayloadGabarito {
        constructor(convidado, respostasGabarito){
            this.convidado = convidado;
            this.pesquisa = idFormat;
            this.respostasGabarito = respostasGabarito;
        }
    }
    
    class Convidado {
        constructor(nome, email){
            this.nome = nome;
            this.email = email;
        }
    }
    
    class RespostaGabarito{
        constructor(pergunta, resposta){
            this.pergunta = {id: pergunta};
            this.resposta = {id: resposta};
        }
    }

    const [classCloseModal,   setClassCloseModal  ] = useState("")
    const [isConfigurada,     setIsConfigurada    ] = useState(false);
    
    const [nomeConvidado,     setNomeConvidado    ] = useState("");
    const [emailConvidado,    setEmailConvidado   ] = useState("");
    const [convidado,         setConvidado        ] = useState();
    const [isConvidadoValido, setIsConvidadoValido] = useState(false);

    const [pesquisaDaVez,     setPesquisaDaVez    ] = useState();
    const [perguntas,         setPerguntas        ] = useState([]);

    const [payloadGabarito,   setPayloadGabarito  ] = useState();
    const [respostasGabarito, setRespostasGabarito] = useState([]);
    const [isRespGabConfig,   setIsResGabConfig   ] = useState(false);

    var arrayGabaritosAux = [];

    console.log("CONVIDADO: ", convidado);

    useEffect(() => {buscarPesquisa()}, [])

    useEffect(function(){
        if(nomeConvidado.length > 5 && (emailConvidado.endsWith(".com") || emailConvidado.endsWith(".com.br"))){
            setIsConvidadoValido(true);
        }
        else{
            setIsConvidadoValido(false);
        }
    }, [nomeConvidado, emailConvidado])

    function verificarConvidado(){
        var novoConvidado = new Convidado(nomeConvidado, emailConvidado);
        setConvidado(novoConvidado);
        buscarPesquisa();
        setarPerguntas();
        setClassCloseModal("close");
        console.log("CONVIDADO: ", convidado);
    }

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
        setIsConfigurada(true)
        console.log(perguntas);
    }

    function atualizarGabarito(idResposta, idPergunta){
        if(isRespGabConfig){
            var gabaritoNovo = respostasGabarito;
            gabaritoNovo = gabaritoNovo.map((gabarito, i) => {
            if(idPergunta === gabarito.pergunta.id){
                gabarito.resposta.id = idResposta;
            }
            return gabarito;
            })
            setRespostasGabarito(gabaritoNovo);
            console.log(isRespGabConfig);
            console.log(respostasGabarito);
        }
        else{
            console.log(isRespGabConfig);
            setRespostasGabarito(arrayGabaritosAux);
            console.log("arrayAuxiliar: ", arrayGabaritosAux);
            setIsResGabConfig(true)
        }

        
    }
    
    return(
        <>
            <div>
                <div className={`${classCloseModal} shadow-background`}>
                    <div className='card-modal-responder-pesquisa'>
                        <div className='card-header'>
                            <h1>Bem Vindo!</h1>
                            <h2>Você foi convidado a responder uma pesquisa!</h2>
                        </div>
                        <div className='sub-titulo'>
                            <span><b>Identifique-se como convidado para respondê-la.</b></span>
                            <span>(As respostas são anônimas para o criador da pesquisa)</span> 
                        </div>
                        <div className='form-convidado'>
                            <div className='limiter'>
                                <div>Nome completo</div>
                                <label>Nome e sobrenome</label>
                                <div className='ui left icon input inputCurriculo'>
                                    <i aria-hidden="true" className='user plus icon'/>
                                    <input onChange={(e) => setNomeConvidado(e.target.value)} type="text" placeholder="Nome Completo"/>
                                </div>
                            </div>
                            <div className='limiter'>
                                <div>E-mail</div>
                                <label>exemplo@email.com</label>
                                <div className='ui left icon input inputCurriculo'>
                                    <i aria-hidden="true" className="at icon"/>
                                    <input onChange={(e) => setEmailConvidado(e.target.value)} type="text" placeholder="Email"/>
                                </div>
                                <div className='msg-valid'>
                                    <span>Nome deve conter no mínimo 5 caracteres.</span>
                                    <span>O e-mail deve ser válido.</span>
                                </div>
                            </div>
                            <div className='button-area'>
                                <button onClick={() => verificarConvidado()} size="big" className={`ui ${isConvidadoValido ? "teal" : "disabled"} animated button button-next`}>
                                    <div className="visible content">Next</div>
                                    <div className="hidden content"><i aria-hidden="true" className="arrow right icon"></i>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='tela-full'>
                    <div className='conteudo-pesquisa'>
                        <div className='container'>
                            <div className='header-pagina'>
                                <img src={LogoSurvey} alt=''/>                             
                            </div>
                            <div className='card-pesquisa'>
                                
                                <div>
                                    <div className='titulo-pesquisa'>
                                        {isConfigurada ? pesquisaDaVez.nome : "Título"}
                                    </div>
                                    <div className='nome-empresa'>
                                        {isConfigurada ? pesquisaDaVez.empresa.nome : "Empresa"}
                                    </div>
                                </div>
                                <div className='pesquisa-area'>
                                    {
                                        isConfigurada ? 
                                        perguntas.map((pergunta, i) => {
                                            arrayGabaritosAux.push(new RespostaGabarito(pergunta.id, ""));
                                            return(
                                                <>  
                                                    <form className="ui form" key={pergunta}>
                                                        <div className='pergunta-box-rp'>
                                                            <PerguntaResponder 
                                                                id={pergunta.id}  
                                                                contador={i}
                                                                pergunta={pergunta} 
                                                                respostas={perguntas[i].respostas}
                                                                atualizarGabarito={atualizarGabarito}
                                                            />
                                                        </div>
                                                    </form>                   
                                                </>
                                            ) 
                                        }) : 
                                        <div>
                                            <div>
                                            
                                            </div>
                                        </div>
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