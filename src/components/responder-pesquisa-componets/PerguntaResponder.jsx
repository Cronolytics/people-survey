/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function PerguntaResponder(props){

    const [selecionado, setSelecionado] = useState();

    useEffect(function(){
        //console.log("Pergunta " + (props.contador + 1) + " (ID : " + props.id + ") " + " - Resposta selecionada: " + selecionado);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        props.atualizarGabarito(selecionado, props.id);
    }, [selecionado])

    return(
        <>
            <div className="field">
                <b>{props.contador+1} - {props.pergunta.desc}</b>
            </div>
            {props.respostas.map((resposta, j) => {
                return(
                    <div className="field" key={j}>
                        <div className="ui radio checkbox">
                            <input  onChange={() => {console.log("Fui chamado ", resposta); setSelecionado(resposta.id); console.log("Fui chamado 2", selecionado)} }
                                    type="radio" 
                                    name="radioGroup" 
                                    tabIndex="0" 
                                    value="this"/>
                            <label>{resposta.desc}</label>
                        </div>
                    </div>
                )                                                       
            })}
        </>
    )
}

export default PerguntaResponder;