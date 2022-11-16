import '../assets/css/login-cadastro.css'
//import CampoTexto from "../components/component-login-cadastro/input-login-component/input-login";
//import Botao from "../components/component-login-cadastro/login-button-component/button-login";
import logo_survey from '../assets/images/logo-survey.png'
import { useNavigate} from 'react-router-dom';
import apiDev from '../api'
import { useState } from 'react';

const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    //pesquisas toastfy para alertas.

    async function verifyCredentials() {
        try {
            const user = await apiDev.post('/empresa/login', {email,senha});
    
        sessionStorage.clear();
        sessionStorage.setItem("survey-manager", JSON.stringify(user.data));
        alert("login deu certo.")
        navigate('/dashboard');
        }
        catch (error) {
            console.error(error);
            alert(email)
            alert(senha)
            alert("login deu errado.")
            //setOpenFailedAlert(true);
        }
    }

    return (
        <>
            <div className="img-logo">
                <img onClick={() => navigate("/")} src={logo_survey} alt='' />
            </div>


            <div className='div-container'>
                <div className='login-box'>
                    <div className="div-texto">
                        <p>Acesse sua conta</p>
                    </div>

                    <label>E-mail</label>
                    <div className="ui left icon input inputCurriculo"><i aria-hidden="true" className="at icon"/><input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email"/></div>

                    <label>Senha</label>
                    <div className="ui left icon input inputCurriculo"><i aria-hidden="true" className="at icon"/><input onChange={(e) => setSenha(e.target.value)} type="password" placeholder="Senha"/></div>

                    <div className="forget-pass">
                        <u>Esqueci minha senha</u>
                    </div>

                    <div>
                        <button onClick={() => verifyCredentials()} className="ui button">Entrar</button>
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