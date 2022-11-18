import "../assets/css/reset.css";
import "../assets/css/login-cadastro.css";

import logo_survey from "../assets/images/logo-survey.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../api";
import Toastify from "toastify-js";
import "toastify-js/src/toastify";

function Cadastro(){
    const navigate = useNavigate();
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarsenha, setConfirmarSenha] = useState("");
    const [telefone, setTelefone] = useState("");
    const [cep, setCep] = useState("");
    const [cnpj, setCnpj] = useState("");

    async function cadastrarEmpresa() {

        if(confirmarsenha === senha){
            try {
                const user = await api.post("/empresa", {
                nome,
                email,
                senha,
                telefone,
                cep,
                cnpj,
            });
    
            console.log(user.data);
            sessionStorage.clear();
            sessionStorage.setItem("survey-manager", JSON.stringify(user.data));
    
            Toastify({
                text: "Cadastro bem sucedido!",
                duration: 3000,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: { background: "linear-gradient(to right, #00b09b, #96c93d)" },
            }).showToast();
    
            navigate("/login");
            } catch (error) {
                console.log(error);
                Toastify({
                    text: "Ops! Algo deu errado...",
                    duration: 3000,
                    close: true,
                    gravity: "top", // `top` or `bottom`
                    position: "right", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    style: { background: "linear-gradient(to right, #a8323c, #e00d1f)" },
                }).showToast();
            }
        }       
    }

    
    return (
        <>
            <div className="img-logo">
                <img onClick={() => navigate("/")} src={logo_survey} alt="" />
            </div>

            <div className="container-cadastro">
                <form className="cadastroForm">
                    <div className="div-texto-cadastro">
                        <p>Crie sua conta</p>
                    </div>

                    <div className="input-container">
                        <div>
                            <label>Nome</label>
                            <div className="ui left icon input inputCurriculo">
                                <i aria-hidden="true" />
                                <input
                                onChange={(e) => setNome(e.target.value)}
                                type="text"
                                placeholder="Nome"
                                />
                            </div>
                        </div>

                        <div>
                            <label>E-mail</label>
                            <div className="ui left icon input inputCurriculo">
                                <i aria-hidden="true" />
                                <input
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                placeholder="E-mail"
                                />
                            </div>
                        </div>

                        <div>
                            <label>Senha</label>
                            <div className="ui left icon input inputCurriculo">                           
                                <i aria-hidden="true"/>
                                <input type="password"
                                onChange={(e) => setSenha(e.target.value)}
                                placeholder="Senha"
                                />                          
                            </div>
                        </div>

                        <div>
                            <label>Confirmar senha</label>
                            <div className="ui left icon input inputCurriculo">
                                <i aria-hidden="true"/>
                                <input 
                                onChange={(e) => setConfirmarSenha(e.target.value)}                               
                                placeholder="Confirme sua senha"
                                type="password"                           
                                />
                            </div>                        
                        </div>

                        <div>
                            <label>Telefone</label> 
                            <div className="ui left icon input inputCurriculo">                                                        
                                <i aria-hidden="true" />
                                <input type="text"
                                onChange={(e) => setTelefone(e.target.value)}
                                placeholder="Telefone"
                                />
                            </div>       
                        </div>

                        <div>
                            <label>Cep</label>                     
                            <div className="ui left icon input inputCurriculo">
                                <i aria-hidden="true" />                       
                                <input
                                onChange={(e) => setCep(e.target.value)}
                                placeholder="Cep"
                                type="text"
                                />
                            </div>
                        </div>

                        <div>
                            <label>CNPJ</label> 
                            <div className="ui left icon input inputCurriculo">                                                             
                                <i aria-hidden="true"/>
                                <input type="text"
                                onChange={(e) => setCnpj(e.target.value)}
                                placeholder="Cnpj"
                                />                      
                            </div>
                        </div>

                        <div>
                            <button
                                onClick={() => cadastrarEmpresa()}
                                className="botao-cadastro">
                                Cadastrar
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
};

export default Cadastro;
