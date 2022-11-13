import '../assets/css/reset.css'
import '../assets/css/login-cadastro.css'

import logo_survey from '../assets/images/logo-survey.png'
import CampoTexto from '../components/component-login-cadastro/input-cadastro-component/input-register';
import BotaoCadastro from '../components/component-login-cadastro/cadastro-button-component/button-register'
import { useNavigate } from 'react-router-dom';


const Cadastro = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className="img-logo">
                <img onClick={() => navigate("/")} src={logo_survey} />
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
                Ja sou cadastrado.<u onClick={() => navigate("/login")}>Fazer login</u>
            </div>



        </>
    );
}

export default Cadastro;