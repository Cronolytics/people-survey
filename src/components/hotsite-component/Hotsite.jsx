import React from 'react'
import { Form, Link } from 'react-router-dom';
import { Input, Icon } from 'semantic-ui-react'
import '../../assets/css/reset.css'
import './hotsite-style.css'
import 'semantic-ui-css/semantic.min.css'
import PeopleSurveyLogotipo from '../../assets/images/hotsite/people-survey-white-logo.png'

function HotsitePage(){
    return(
        <div className="background">

            <div className="centralization header">
                <div className="container">
                    <div className="centralization vertical">
                        <div className="centralization">
                            <Link to="/">
                                <img src={PeopleSurveyLogotipo} className="logo" />
                            </Link>
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
                                <div class="ui left icon input inputCurriculo"><i aria-hidden="true" class="user plus icon"/><input type="text" placeholder="Nome Completo"/></div>

                                <label>CPF</label>
                                <div class="ui left icon input inputCurriculo"><i aria-hidden="true" class="file outline icon"/><input type="text" placeholder="CPF"/></div>

                                <label>Data de nascimento</label>
                                <div class="ui left icon input inputCurriculo"><i aria-hidden="true" class="birthday cake icon"/><input type="text" placeholder="Data de nascimento"/></div>

                                <label>Celular</label>
                                <div class="ui left icon input inputCurriculo"><i aria-hidden="true" class="text telephone icon"/><input type="text" placeholder="Celular"/></div>

                                <label>E-mail</label>
                                <div class="ui left icon input inputCurriculo"><i aria-hidden="true" class="at icon"/><input type="text" placeholder="Email"/></div>

                                <label>Endereço</label>
                                <div class="ui left icon input inputCurriculo"><i aria-hidden="true" class="location arrow icon"/><input type="text" placeholder="Endereço"/></div>

                                <label>Vaga</label>
                                <div class="ui left icon input inputCurriculo"><i aria-hidden="true" class="add icon"/><input type="text" list="vagas" placeholder="Vaga escolhida"/></div>
                                <datalist id="vagas">
                                    <option value="English">English</option>
                                    <option value="Chinese">Chinese</option>
                                    <option value="Dutch">Dutch</option>
                                </datalist>

                                <label>Estado Civil</label>
                                <div class="ui left icon input inputCurriculo"><i aria-hidden="true" class="user plus icon"/><input type="text" placeholder="Estado civil"/></div>

                                <label>Perfil do Linkedin</label>
                                <div class="ui left icon input inputCurriculo"><i aria-hidden="true" class="user plus icon"/><input type="text" placeholder="linkedin.com/seu-perfil"/></div>

                                <label>Breve descrição</label>
                                <div class="ui left icon input inputCurriculo"><i aria-hidden="true" class="text cursor icon"/><input type="text" placeholder="Breve descrição"/></div>

                                <div>
                                    <button>Gerar CSV</button>
                                    <button>Gerar TXT</button>
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
                                    <input type="file" />
                                </div>                                                      
                            </div>
                            <div className="buttonBoxImportação">
                                <button>Salvar</button>
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