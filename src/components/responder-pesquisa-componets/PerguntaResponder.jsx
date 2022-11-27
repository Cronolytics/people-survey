import React from 'react'
import { useState } from 'react';

function PerguntaResponder(props){

    const [selecionado, setSelecionado] = useState();

    return(
        <>
            <div className="field">
                {props.pergunta.desc}
            </div>
            {props.respostas.map((resposta, j) => {
                return(
                    <>
                        <div className="field" key={resposta.id}>
                            <div className="ui radio checkbox">
                                <input type="radio" name="radioGroup" tabIndex="0" value="this"/>
                                <label>{resposta.desc}</label>
                            </div>
                        </div>
                    </>
                )                                                       
            })}
        </>
    )
}

export default PerguntaResponder;