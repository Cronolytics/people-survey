import React, { useEffect } from 'react'
import { useState } from 'react';
import { Form } from 'semantic-ui-react'
import './nova-pergunta-style.css'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

function NovaPergunta(props){

    
    const [contador, setContador] = useState(2);
    const [qtdRespostas, setQtdRespostas] = useState([1, 2]);

    useEffect(() => {
        var novoArray = [];
        for (let index = 1; index <= contador; index++) {
            novoArray.push(index);       
        }
        setQtdRespostas(novoArray);
    }, [contador])

    function listarQtdRespostas(){
        var novoArray = [];
        for (let index = 1; index <= contador; index++) {
            novoArray.push(index);       
        }
        setQtdRespostas(novoArray);
    }

    function incrementarResposta(){
        var aux = contador + 1;
        setContador(aux);
        listarQtdRespostas();
    }

    function decrementarResposta(){
        if(contador === 2){
            Toastify({
                text: "Não é possível ter menos de 2 respostas!",
                duration: 3000,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: { background: "linear-gradient(to right, #a8323c, #e00d1f)" }
            }).showToast();
        }
        else{
            var aux = contador - 1;
            setContador(aux);
            listarQtdRespostas();
        }
    }

    function atualizarDesc (param) {
        var valor = {
            descricao: param,
            ...props.pergunta
        }

        props.atualizar(valor, props.id)
    }
    function atualizarResp (param) {

        //var old = ...props.value;
        //old[1] = {}

        var valor = {
            ...props.pergunta,
            respostas: [
                
                ...props.pergunta.respostas
            ]
        }

        props.atualizar(valor, props.id)
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
                        <div className="contador-area">
                            <button onClick={decrementarResposta} className="ui icon button button-limiter"><i aria-hidden="true" className="minus icon"></i></button>
                            <div className='contador'>{qtdRespostas[qtdRespostas.length - 1]}</div>
                            <button onClick={incrementarResposta} className="ui icon button button-limiter"><i aria-hidden="true" className="add center icon"></i></button>
                        </div>                        
                    </div>
                    <div className="field w-100">   
                        {
                            qtdRespostas.map((resposta, index) => {
                                return (
                                    <>
                                        <div id={resposta} key={resposta} className='resposta-box'>
                                            <div className='contador-box'>
                                                {resposta}
                                            </div>
                                            <div className="ui fluid icon input">
                                                <div className="ui transparent input">
                                                    <input type="text"  placeholder="Digite uma opção de resposta."/>
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