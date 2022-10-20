import '../assets/css/reset.css'
import '../assets/css/login-cadastro.css'

import logo_survey from '../assets/images/logo-survey.png'
import CampoTexto from '../components/component-login-cadastro/input-cadastro-component/input-register';
import BotaoCadastro from '../components/component-login-cadastro/cadastro-button-component/button-register'
import { Link } from 'react-router-dom';


const Cadastro = () => {

    return (
        <>
           <div className="img-logo">
                <Link to="/">
                    <img src={logo_survey} />
                </Link>
            </div>
            
            <div className='container-cadastro'>
                <form >
                    <div className="div-texto-cadastro">
                        <p>Crie sua conta</p>
                    </div>


                    <CampoTexto label="Nome" placeholder="Nome" />
                    <CampoTexto label="Email" placeholder="Email" />
                    <CampoTexto label="Cep" placeholder="13165-000" />
                    <CampoTexto label="Senha" placeholder="*****" />
                    <CampoTexto label="Confirme sua senha" placeholder="*****" />
                    <CampoTexto label="Conta Bâncaria" placeholder="123456-78" />
                    <CampoTexto label="Agência" placeholder="11" />
                    <CampoTexto label="CNPJ*" placeholder="XX.XXX.XXX/0001-XX" />


                    <BotaoCadastro>
                        Cadastrar
                    </BotaoCadastro>

                </form>
            </div>


            <div className='div-cadastro'>
                Ja sou cadastrado. <Link to="/login"><u>Fazer login</u></Link>
            </div>



        </>
    );
}

export default Cadastro;