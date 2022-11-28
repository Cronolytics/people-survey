import React, { useState } from "react";
import { useEffect } from "react";
import './card-pesquisa-style.css'

function CardPesquisa(props){

    function selecionarPesquisa(){
        props.atualizarSelecionado(props.id);
    }
    

    return(
        <>  
            <div onClick={() => {selecionarPesquisa()}}> 
                <div className="card">
                    <div className="card-survey-type-area">
                        <div className="card-survey-type-box">
                            {props.tipo}
                        </div>
                    </div>
                    <div className="card-survey-title-area">
                        <div className="card-survey-title-box">
                            <p>
                                {props.titulo}
                            </p>
                        </div>
                    </div>
                    <div className="card-survey-information-area">
                        <div className="card-survey-information-box">                       
                                <div className="card-info-line">
                                    <div className="info-key">
                                        Perguntas
                                    </div>
                                    <div className="info-value">
                                        {props.qtdPerguntas}
                                    </div>
                                </div>
                                <div className="card-info-line">
                                    <div className="info-key">
                                        Pessoas
                                    </div>
                                    <div className="info-value">
                                        {props.qtdPessoas}
                                    </div>
                                </div>
                                <div className="card-info-line">
                                    <div className="info-key">
                                        Respostas
                                    </div>
                                    <div className="info-value">
                                        <strong>{props.qtdRespostas}</strong>
                                    </div>
                                </div>                     
                        </div>
                    </div>
                    <div className="card-status-area">
                        <div className="card-status-box">
                            <p>
                                {props.status}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardPesquisa;