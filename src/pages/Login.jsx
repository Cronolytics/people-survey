import '../assets/css/login-cadastro.css'
import logo_survey from '../assets/images/logo-survey.png'
import { useNavigate } from 'react-router-dom';
import api from '../api'
import { useState } from 'react';
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import loader_img from '../assets/images/loader_gif.gif'

const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [isLoading, setLoading] = useState(false);

    const fetchData = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000)
    }


    async function verifyCredentials() {
        api.post('/empresa/login', {
            email,
            senha
        }).then(function (user) {
            console.log("USER DATA: " + JSON.stringify(user.data));
            sessionStorage.clear();
            sessionStorage.setItem("usuarioLogado", JSON.stringify(user.data));
            sessionStorage.setItem("id", user.data.id);
            Toastify({
                text: "Login bem sucedido!",
                duration: 3000,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: { background: "linear-gradient(to right, #00b09b, #96c93d)" }
            }).showToast();
            navigate('/inicio');
        }).catch((error) => {
            console.log(error);
            Toastify({
                text: "Ops! E-mail ou senha inválidos...",
                duration: 3000,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: { background: "linear-gradient(to right, #a8323c, #e00d1f)" }
            }).showToast();
        });
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
                    <div className="ui left icon input inputCurriculo"><i aria-hidden="true" className="at icon" /><input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" /></div>

                    <label>Senha</label>
                    <div className="ui left icon input inputCurriculo"><i aria-hidden="true" className="lock icon" /><input onChange={(e) => setSenha(e.target.value)} type="password" placeholder="Senha" /></div>

                    <div className="forget-pass">
                        <u>Esqueci minha senha</u>
                    </div>

                    <div onClick={fetchData}>
                        <button onClick={() => verifyCredentials()} className="botao-login">Entrar</button>
                    </div>

                </div>
            </div>

            <div className='div-cadastro' onClick={() => navigate("/cadastro")}>
                Ainda não possui conta? <u onClick={fetchData}>Faça o cadastro!</u>
            </div>

            <div className="div-gif">
            {isLoading ? <img src={loader_img} className='loading-gif-login' alt="" /> : ''}
            </div>

        </>
    );
}

export default Login