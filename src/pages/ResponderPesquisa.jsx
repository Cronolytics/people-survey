import React from 'react'
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "../assets/css/responder-pesquisa-style.css";
import api from '../api'
import Toastify from 'toastify-js'
import LogoSurvey from '../assets/images/logo-survey.png'
import PerguntaResponder from '../components/responder-pesquisa-componets/PerguntaResponder';

function ResponderResquisa(){

    const navigate = useNavigate();

    const {idPesquisa} = useParams();
    var idFormat = idPesquisa.replace(':', '');

    class PayloadGabarito {
        constructor(convidado, respostasGabarito){
            this.convidado = convidado;
            this.pesquisa = { "id" : parseInt(idFormat)};
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

    const [classCloseModal,        setClassCloseModal       ] = useState("")
    const [isConfigurada,          setIsConfigurada         ] = useState(false);

    const [nomeConvidado,          setNomeConvidado         ] = useState("");
    const [emailConvidado,         setEmailConvidado        ] = useState("");
    const [convidado,              setConvidado             ] = useState();
    const [isConvidadoValido,      setIsConvidadoValido     ] = useState(false);

    const [pesquisaDaVez,          setPesquisaDaVez         ] = useState();
    const [perguntas,              setPerguntas             ] = useState([]);

    const [payloadGabarito,        setPayloadGabarito       ] = useState(new PayloadGabarito());
    const [respostasGabarito,      setRespostasGabarito     ] = useState([new RespostaGabarito()]);
    const [isRespGabConfig,        setIsResGabConfig        ] = useState(false);
    const [isRespostasRespondidas, setIsRespostasRespondidas] = useState(false);

    var arrayGabaritosAux = [];

    console.log("CONVIDADO: ", convidado);
    console.log("PAYLOAD: ", payloadGabarito);

    useEffect(() => {buscarPesquisa()}, [])

    useEffect(function(){
        if(nomeConvidado.length > 5 && (emailConvidado.endsWith(".com") || emailConvidado.endsWith(".com.br"))){
            setIsConvidadoValido(true);
        }
        else{
            setIsConvidadoValido(false);
        }
    }, [nomeConvidado, emailConvidado])

    useEffect(function(){
        var copiaPayload = {...payloadGabarito};
        copiaPayload.convidado = convidado;
        copiaPayload.respostasGabarito = respostasGabarito;
        setPayloadGabarito(copiaPayload);
    }, [convidado, respostasGabarito])

    useEffect(function(){
        for (let i = 0; i < respostasGabarito.length; i++) {
            var isValidAux = false
            if(respostasGabarito[i].resposta.id === ''){
                isValidAux = false
                break;
            }
            else{
                isValidAux = true
            }
        }
        setIsRespostasRespondidas(isValidAux);
    },[respostasGabarito])

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

    function responderPesquisa(){
        if(isRespostasRespondidas){
            api.post("/pesquisas/responder", payloadGabarito
            ).then(function(){
                console.log("Pesquisa respondida com sucesso!")
                Toastify({
                    text: "Pesquisa respondida com sucesso!",
                    duration: 3000,
                    close: true,
                    gravity: "top", // `top` or `bottom`
                    position: "right", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    style: { background: "linear-gradient(to right, #00b09b, #96c93d)" }
                }).showToast();
                navigate('/finalizacao-responder-pesquisa');         
            }).catch((error) => {
                console.log(error)
                Toastify({
                    text: "Erro ao tentar responder pesquisa.",
                    duration: 3000,
                    close: true,
                    gravity: "top", // `top` or `bottom`
                    position: "right", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    style: { background: "linear-gradient(to right, #a8323c, #e00d1f)" }
                }).showToast();
            }
            );
        }       
        else{
            Toastify({
                text: "Responda todas as perguntas!",
                duration: 3000,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: { background: "linear-gradient(to right, #a8323c, #e00d1f)" }
            }).showToast();
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
                                                <form key={i} className="ui form">
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
                        <div className={isConfigurada ? "save-bar" : "save-bar-hiden"}>
                            <div className='container'>
                                <div className='save-button-area'>
                                    <button onClick={() => responderPesquisa()} size="big" className={`ui ${isRespostasRespondidas ? "teal" : "disabled"} animated button button-save`}>
                                            <div className="visible content">Responder pesquisa</div>
                                            <div className="hidden content"><i aria-hidden="true" className="arrow right icon"></i>
                                            </div>
                                    </button>
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