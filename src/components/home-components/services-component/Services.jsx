import './services-style.css'
import '../../../assets/css/home-style.css'
import '../../../assets/css/reset.css';

import PeopleSurveyIcon from '../../../assets/images/home/people-survey-icon.png'
import FunilDeVendas from '../../../assets/images/home/funil-de-vendas-icon.png'
import UserIcon from '../../../assets/images/home/user-icon.png'

function Services(){
    return(
        <>
            <div className="services flex-centralization">
                <div className="container">
                    <div className="services-title">
                        <h2>Nossos principais serviços</h2>
                    </div>           

                    <div className="box-service">
                        <img className="service-icon" src={PeopleSurveyIcon} alt="People Survey icon"/>
                        <div className="service-content">
                            <div className="box-service-title">
                                <h3>Pesquisas personalizáveis</h3>
                            </div>
                            <ul className="service-list">
                                <li>Explore o público.</li>
                                <li>Exponha ideias e produtos.</li>
                                <li>Net Promoter Score para seus colaboradores.</li>
                                <li>Diversos tipos de respostas para suas perguntas</li>
                            </ul>
                        </div>   
                    </div>

                    <div className="box-service">
                        <img className="service-icon" src={FunilDeVendas} alt="Funil de vendas icon"/>
                        <div className="service-content">
                            <div className="box-service-title">
                                <h3>Funil de vendas</h3>
                            </div>
                            <ul className="service-list">
                                <li>Apareça para diversas pessoas</li>
                                <li>Nós te ajudamos em causar uma boa impressão.</li>
                                <li>Respondentes recebem cupons para conhecer seus produtos.</li>
                                <li>Fidelize clientes e aumente seu faturamento.</li>
                            </ul>
                        </div>               
                    </div> 

                    <div className="box-service">
                        <img className="service-icon" src={UserIcon} alt="Usuário icon"/>
                        <div className="service-content">
                            <div className="box-service-title">
                                <h3>Gerenciamento de público</h3>
                            </div>
                            <ul className="service-list">
                                <li>Seus respondentes fieis estão ao seu alcance.</li>
                                <li>Faça uma trilha de pesquisas para as pessoas certas.</li>
                                <li>Aprofunde-se em quem é o alvo de seus negócios.</li>
                                <li>Se torne uma marca que atenda necessidades reais.</li>
                            </ul>
                        </div>
                    </div> 
                </div>
            </div>
        </>
    )
}

export default Services;