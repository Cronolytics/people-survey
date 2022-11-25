import React, { useEffect } from 'react'
import { useState } from 'react';
import { Form } from 'semantic-ui-react'
import './nova-pergunta-style.css'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

function NovaPergunta(props){

    //=====================================================================
    // === ESTADOS ========================================================
    //=====================================================================
    const [descricao,    setDescricao]    = useState("");
    const [respostas,    setRespostas]    = useState(["", ""]);
    const [qtdRespostas, setQtdRespostas] = useState(2);

    //=====================================================================
    //=== USE EFFECT'S ====================================================
    //=====================================================================
    useEffect(() => {
        var objPerguntaAuxiliar = {
            descricao,
            respostas
        }
        props.atualizar(objPerguntaAuxiliar, props.id);
    }, [descricao, respostas])

    //=====================================================================
    //=== FUNCTIONS =======================================================
    //=====================================================================
    function incrementarResposta(){
        if(respostas.length === 10){
            Toastify({
                text: "Não é possível ultrapassar o limite de 10 respostas por pergunta!",
                duration: 3000,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: { background: "linear-gradient(to right, #a8323c, #e00d1f)" }
            }).showToast(); 
        }
        else{
            var arrayRespostasAtualizadoAuxiliar = [...respostas];
            arrayRespostasAtualizadoAuxiliar.push("");
            setRespostas(arrayRespostasAtualizadoAuxiliar);
            setQtdRespostas(qtdRespostas + 1)
        }
        
    }

    function decrementarResposta(){
        if(qtdRespostas === 2){
            Toastify({
                text: "Não é possível ter menos de 2 respostas por pergunta!",
                duration: 3000,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: { background: "linear-gradient(to right, #a8323c, #e00d1f)" }
            }).showToast();
        }
        else{
            var arrayRespostasAtualizadoAuxiliar = [...respostas];
            arrayRespostasAtualizadoAuxiliar.pop();
            setRespostas(arrayRespostasAtualizadoAuxiliar);
            setQtdRespostas(qtdRespostas - 1);
        }
    }

    function atualizarDesc (param) {
        setDescricao(param);
    }

    function atualizarResp (param, key) {
        var arrayRespostasAtualizadoAuxiliar = [...respostas];
        arrayRespostasAtualizadoAuxiliar[key] = param;
        setRespostas(arrayRespostasAtualizadoAuxiliar);
    }

    return(
        <>
        <div className="card-pergunta">
            <div className="card-box">
                <div className='titulo-textarea'>{props.id + 1}° - Pergunta</div>     
                <Form.Field onInput={(e) => atualizarDesc(e.target.value)} control='textarea' />
            </div>
            <div className="card-box">            
                <div className="ui form">                   
                    <div className='respostas-area'>
                        <div className="field-resposta">Respostas:</div>
                        <div className="respostas-area">
                            <button onClick={decrementarResposta} className="ui icon button button-limiter"><i aria-hidden="true" className="minus icon"></i></button>
                            <div className='contador'>{qtdRespostas}</div>
                            <button onClick={incrementarResposta} className="ui icon button button-limiter"><i aria-hidden="true" className="add center icon"></i></button>
                        </div>                        
                    </div>
                    <div className="field w-100">   
                        {
                            respostas.map((resposta, index) => {
                                return (
                                    <>
                                        <div key={index} className='resposta-box'>
                                            <div className='contador-box'>
                                                {index + 1}
                                            </div>
                                            <div className="ui fluid icon input">
                                                <div className="ui transparent input">
                                                    <input onChange={(e) => atualizarResp(e.target.value, index)} type="text" placeholder="Digite uma opção de resposta."/>
                                                </div>
                                            </div>                           
                                        </div>
                                    </>
                                );
                            })
                        }                                        
                    </div>                                       
                </div>               
            </div>
        </div>
        </>
    )
}

export default NovaPergunta;