import React from 'react'
import { Form } from 'semantic-ui-react'
import './nova-pergunta-style.css'

function NovaPergunta(){

    function novaResposta(){
        alert("teste")
    }

    return(
        <>
        <div className="card-pergunta">
            <div className="card-box">         
                <Form.Field label='Pergunta' control='textarea' />
            </div>
            <div className="card-box">            
                <form className="ui form">
                    <div className="field"><b>Respostas:</b></div>
                    <div className="field w-100">                    
                        <div className='resposta-box'>
                            <div className='contador-box'>
                                1
                            </div>
                            <div className="ui fluid icon input">
                                <div className="ui transparent input">
                                    <input onDragEnter={novaResposta} type="text" placeholder="Digite uma opção de resposta."/>
                                </div>
                                <button className="ui icon button button-limiter">
                                    <i aria-hidden="true" className="delete icon button-limiter"></i>
                                </button>
                            </div>                           
                        </div>
                    </div>                  
                </form>
            </div>
        </div>
        </>
    )
}

export default NovaPergunta;