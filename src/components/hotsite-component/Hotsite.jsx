import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../../assets/css/reset.css'
import './hotsite-style.css'
import 'semantic-ui-css/semantic.min.css'
import PeopleSurveyLogotipo from '../../assets/images/hotsite/people-survey-white-logo.png'
import { useState } from 'react';

// {
//     "nome": "Majal",
//     "cpf": "583.927.483-29",
//     "email": "majal@gmail.com",
//     "dataNascimento": "1999-01-01",
//     "telefone": "(11) 94893-8291",
//     "cep": "05847382",
//     "estadoCivil": "CASADO",
//     "linkedin": "@majalzin",
//     "descricao": "so brocha"
// }

function HotsitePage(){

    const[nome ,           setNome          ] = useState();
    const[cpf ,            setCpf           ] = useState();
    const[email ,          setEmail         ] = useState();
    const[dataNascimento , setDataNascimento] = useState();
    const[telefone ,       setTelefone      ] = useState();
    const[cep ,            setCep           ] = useState();
    const[estadoCivil ,    setEstadoCivil   ] = useState();
    const[linkedin ,       setLinkedin      ] = useState();
    const[descricao ,      setDescricao     ] = useState();

    const navigate = useNavigate();

    function salvarGerarTXT(){
        let payload = {
            nome,
            cpf,
            email,
            dataNascimento,
            telefone,
            cep,
            estadoCivil,
            linkedin,
            descricao
        }
        alert(payload)
    }

    return(
        <div className="background">

            <div className="centralization header">
                <div className="container">
                    <div className="centralization vertical">
                        <div className="centralization">
                            <img onClick={() => navigate("/")} src={PeopleSurveyLogotipo} className="logo" alt=''/>
                        </div>
                        <div className="centralization">
                            Venha trabalhar conosco!
                        </div> 
                    </div>                    
                </div>
            </div>

            <div className="centralization">
                <div className="container">
                    <div className="centralization vertical vagas">
                        <div className="vagasDescricao centralization">
                            People Survey é o melhor site para criar pesquisas de mercado.
                            <br />                       
                            Se você é movido por excelência e propósito, confira nossas vagas! 
                        </div>
                    </div>
                </div>          
            </div>

            <div className="centralization">
                <div className="container curriculo">
                    <div className="centralization vertical">
                        <div className="centralization curriculoTitulo">
                            Cadastre um novo talento
                        </div>
                        <form className="ui form">
                            <div className='curriculoForms'>
                                <label>Nome Completo</label>
                                <div className="ui left icon input inputCurriculo">
                                    <i aria-hidden="true" className="user plus icon"/>
                                    <input onChange={(e) => setNome(e.target.value)} type="text" placeholder="Nome Completo"/>
                                </div>

                                <label>CPF</label>
                                <div className="ui left icon input inputCurriculo">
                                    <i aria-hidden="true" className="file outline icon"/>
                                    <input onChange={(e) => setCpf(e.target.value)} type="text" placeholder="CPF"/>
                                </div>

                                <label>E-mail</label>
                                <div className="ui left icon input inputCurriculo">
                                    <i aria-hidden="true" className="at icon"/>
                                    <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email"/>
                                </div>

                                <label>Data de nascimento</label>
                                <div className="ui left icon input inputCurriculo">
                                    <i aria-hidden="true" className="birthday cake icon"/>
                                    <input onChange={(e) => setDataNascimento(e.target.value)} type="text" placeholder="Data de nascimento"/>
                                </div>

                                <label>Celular</label>
                                <div className="ui left icon input inputCurriculo">
                                    <i aria-hidden="true" className="text telephone icon"/>
                                    <input onChange={(e) => setTelefone(e.target.value)} type="text" placeholder="Celular"/>
                                </div>

                                <label>CEP</label>
                                <div className="ui left icon input inputCurriculo">
                                    <i aria-hidden="true" className="location arrow icon"/>
                                    <input onChange={(e) => setCep(e.target.value)} type="text" placeholder="Endereço"/>
                                </div>

                                <label>Estado Civil</label>
                                <div className="ui left icon input inputCurriculo">
                                    <i aria-hidden="true" className="user plus icon"/>
                                    <input onChange={(e) => setEstadoCivil(e.target.value)} type="text" placeholder="Estado civil"/>
                                </div>

                                <label>Perfil do Linkedin</label>
                                <div className="ui left icon input inputCurriculo">
                                    <i aria-hidden="true" className="user plus icon"/>
                                    <input onChange={(e) => setLinkedin(e.target.value)} type="text" placeholder="linkedin.com/seu-perfil"/>
                                </div>

                                <label>Breve descrição</label>
                                <div className="ui left icon input inputCurriculo">
                                    <i aria-hidden="true" className="text cursor icon"/>
                                    <input onChange={(e) => setDescricao(e.target.value)} type="text" placeholder="Breve descrição"/>
                                </div>

                                <div className="buttonArea">
                                    <button type='submit' onClick={() => salvarGerarTXT()} className="ui button">Salvar e gerar relatório CSV.</button>
                                    <button type='submit' className="ui button">Salvar e gerar relatório TXT.</button>
                                </div>
                            </div>                              
                        </form>

                        <div className="centralization curriculoTitulo">
                            Importação
                        </div>
                        <div className="importacao">
                            <div className="boxImportacao centralization vertical">
                                <div className="importacaoTitulo">
                                    Selecione um arquivo
                                </div>
                                <div className="inputFileBox">
                                    <div className="ui left icon input inputCurriculo"><i aria-hidden="true" className="file outline icon"/><input type="file" placeholder="Arquivo de importação"/></div>
                                </div>   
                                <div className="buttonBoxImportação">
                                    <button className="ui button">Salvar</button>
                                </div>                                                   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <div className="Emptyfooter">
            
        </div>
    </div>
    )
}

export default HotsitePage;