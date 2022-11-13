
import '../assets/css/login-cadastro.css'
import CampoTexto from "../components/component-login-cadastro/input-login-component/input-login";
import Botao from "../components/component-login-cadastro/login-button-component/button-login";
import logo_survey from '../assets/images/logo-survey.png'
import { useNavigate} from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className="img-logo">
                <img onClick={() => navigate("/")} src={logo_survey} />
            </div>


            <div className='div-container'>
                <div className='login-box'>
                    <div className="div-texto">
                        <p>Acesse sua conta</p>
                    </div>

                    <CampoTexto label="Email" placeholder="peoplesurvey@gmail.com" />
                    <CampoTexto label="Senha" placeholder="*******" type="password" />

                    <div className="forget-pass">
                        <u>Esqueci minha senha</u>
                    </div>

                    <div onClick={() => navigate("/dashboard")}>
                    <Botao>Entrar</Botao>
                    </div>
                    
                </div>
            </div>


            <div className='div-cadastro'>
                Ainda não possui conta? <u onClick={() => navigate("/cadastro")}>Faça o cadastro!</u>
            </div>
        </>
    );
}

export default Login