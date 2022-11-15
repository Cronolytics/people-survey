import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../../assets/css/reset.css'
import './hotsite-style.css'
import 'semantic-ui-css/semantic.min.css'
import PeopleSurveyLogotipo from '../../assets/images/hotsite/people-survey-white-logo.png'

function HotsitePage(){

    const navigate = useNavigate();

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
                        <div className=" centralization vertical vagasConteudo">
                            <div className="tituloVagas">
                                <strong>Vagas disponíveis</strong>
                            </div>
                            <div className="labelsVagas">
                                <div className="boxVaga">DevOps</div>
                                <div className="boxVaga">Governança de dados</div>
                                <div className="boxVaga">SAC Suporte</div>
                                <div className="boxVaga">Consultor de vendas</div>
                            </div>
                        </div>
                    </div>
                </div>          
            </div>

            <div className="centralization">
                <div className="container curriculo">
                    <div className="centralization vertical">
                        <div className="centralization curriculoTitulo">
                            Currículo
                        </div>
                        <form className="ui form">
                            <div className='curriculoForms'>
                            <label>Nome Completo</label>
                                <div className="ui left icon input inputCurriculo"><i aria-hidden="true" className="user plus icon"/><input type="text" placeholder="Nome Completo"/></div>

                                <label>CPF</label>
                                <div className="ui left icon input inputCurriculo"><i aria-hidden="true" className="file outline icon"/><input type="text" placeholder="CPF"/></div>

                                <label>Data de nascimento</label>
                                <div className="ui left icon input inputCurriculo"><i aria-hidden="true" className="birthday cake icon"/><input type="text" placeholder="Data de nascimento"/></div>

                                <label>Celular</label>
                                <div className="ui left icon input inputCurriculo"><i aria-hidden="true" className="text telephone icon"/><input type="text" placeholder="Celular"/></div>

                                <label>E-mail</label>
                                <div className="ui left icon input inputCurriculo"><i aria-hidden="true" className="at icon"/><input type="text" placeholder="Email"/></div>

                                <label>Endereço</label>
                                <div className="ui left icon input inputCurriculo"><i aria-hidden="true" className="location arrow icon"/><input type="text" placeholder="Endereço"/></div>

                                <label>Vaga</label>
                                <div className="ui left icon input inputCurriculo"><i aria-hidden="true" className="add icon"/><input type="text" list="vagas" placeholder="Vaga escolhida"/></div>
                                <datalist id="vagas">
                                    <option value="English">English</option>
                                    <option value="Chinese">Chinese</option>
                                    <option value="Dutch">Dutch</option>
                                </datalist>

                                <label>Estado Civil</label>
                                <div className="ui left icon input inputCurriculo"><i aria-hidden="true" className="user plus icon"/><input type="text" placeholder="Estado civil"/></div>

                                <label>Perfil do Linkedin</label>
                                <div className="ui left icon input inputCurriculo"><i aria-hidden="true" className="user plus icon"/><input type="text" placeholder="linkedin.com/seu-perfil"/></div>

                                <label>Breve descrição</label>
                                <div className="ui left icon input inputCurriculo"><i aria-hidden="true" className="text cursor icon"/><input type="text" placeholder="Breve descrição"/></div>

                                <div className="buttonArea">
                                    <button className="ui button">Gerar CSV</button>
                                    <button className="ui button">Gerar TXT</button>
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
                                    <div class="ui left icon input inputCurriculo"><i aria-hidden="true" class="file outline icon"/><input type="file" placeholder="Arquivo de importação"/></div>
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