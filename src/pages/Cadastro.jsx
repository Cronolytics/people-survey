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
                <img onClick={() => navigate("/")} src={logo_survey} alt='' />
            </div>

            <div className='container-cadastro'>
                <form >
                    <div className="div-texto-cadastro">
                        <p>Crie sua conta</p>
                    </div>

                    <label>E-mail</label>
                    <div className="ui left icon input inputCurriculo"><i aria-hidden="true" /><input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" /></div>

                    <label>Senha</label>
                    <div className="ui left icon input inputCurriculo"><i aria-hidden="true" /><input onChange={(e) => setSenha(e.target.value)} type="password" placeholder="Senha" /></div>

                    <label>E-mail</label>
                    <div className="ui left icon input inputCurriculo"><i aria-hidden="true" /><input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" /></div>

                    <label>Senha</label>
                    <div className="ui left icon input inputCurriculo"><i aria-hidden="true" /><input onChange={(e) => setSenha(e.target.value)} type="password" placeholder="Senha" /></div>

                    <label>Senha</label>
                    <div className="ui left icon input inputCurriculo"><i aria-hidden="true" /><input onChange={(e) => setSenha(e.target.value)} type="password" placeholder="Senha" /></div>

                    <label>Senha</label>
                    <div className="ui left icon input inputCurriculo"><i aria-hidden="true" /><input onChange={(e) => setSenha(e.target.value)} type="password" placeholder="Senha" /></div>

                    <label>Senha</label>
                    <div className="ui left icon input inputCurriculo"><i aria-hidden="true" /><input onChange={(e) => setSenha(e.target.value)} type="password" placeholder="Senha" /></div>

                    <label>Senha</label>
                    <div className="ui left icon input inputCurriculo"><i aria-hidden="true" /><input onChange={(e) => setSenha(e.target.value)} type="password" placeholder="Senha" /></div>

                    <label>Senha</label>
                    <div className="ui left icon input inputCurriculo"><i aria-hidden="true" /><input onChange={(e) => setSenha(e.target.value)} type="password" placeholder="Senha" /></div>

                    <div>
                        <button onClick={() => verifyCredentials()} className="botao-login">Entrar</button>
                    </div>

                </form>
            </div>






        </>
    );
}

export default Cadastro;