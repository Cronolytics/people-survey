
import '../assets/css/login-cadastro.css'
import CampoTexto from "../components/component-login-cadastro/input-login-component/input-login";
import Botao from "../components/component-login-cadastro/login-button-component/button-login";
import logo_survey from '../assets/images/logo-survey.png'
import { Link } from 'react-router-dom';


const Login = () => {

    return (
        <>
            <div className="img-logo">
                <Link to="/">
                    <img src={logo_survey} />
                </Link>
            </div>


            <div className='div-container'>
                <form >
                    <div className="div-texto">
                        <p>Acesse sua conta</p>
                    </div>

                    <CampoTexto label="Email" placeholder="peoplesurvey@gmail.com" />
                    <CampoTexto label="Senha" placeholder="*******" type="password" />

                    <div className="forget-pass">

                        <u>Esqueci minha senha</u>

                    </div>

                    <Botao>
                        Entrar
                    </Botao>
                </form>
            </div>


            <div className='div-cadastro'>
                Ainda não possui conta? <Link to="/cadastro"><u>Faça o cadastro!</u></Link>
            </div>
        </>
    );
}

export default Login