import React from "react";
import { useNavigate } from "react-router-dom";
import '../assets/css/agradecimento-resposta-style.css'
import peopleSurveyWhiteLogo from '../assets/images/simbolo.png'

function AgradecimentoResposta(){

    const navigate = useNavigate()

    return(
        <>
        <div className="tela-toda-agradecimento">
            <div className="header-tela">
                Obrigado por contribuir!
            </div>
            <div className="gradient-circle">
                <div className="black-circle">
                    <img onClick={() => navigate("/")} className="logo-img" src={peopleSurveyWhiteLogo} alt="" />
                </div>
            </div>
        </div>
        </>
    )
}

export default AgradecimentoResposta;