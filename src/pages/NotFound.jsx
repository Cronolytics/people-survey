import React from "react";
import { useNavigate } from "react-router-dom";
import '../assets/css/NotFound.css'
import peopleSurveyWhiteLogo from '../assets/images/simbolo.png'

function NotFound() {

    const navigate = useNavigate()

    return (
        <>
            <div className="tela-toda-agradecimento">
                <div className="header-tela">
                    Error 404 Not Found - Clique no centro para voltar
                </div>
                <div className="gradient-circle-not-found">
                    <div className="black-circle">
                        <img onClick={() => navigate("/")} className="logo-img" src={peopleSurveyWhiteLogo} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotFound;