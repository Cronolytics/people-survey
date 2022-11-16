import '../assets/css/reset.css'
import '../assets/css/login-cadastro.css'

import logo_survey from '../assets/images/logo-survey.png'
import CampoTexto from '../components/component-login-cadastro/input-cadastro-component/input-register';
import BotaoCadastro from '../components/component-login-cadastro/cadastro-button-component/button-register'
import { useNavigate } from 'react-router-dom';


const Cadastro = () => {

    const navigate = useNavigate();

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [telefone, setTelefone] = useState("");
    const [cep, setCep] = useState("");

    async function cadastrarEmpresa() {
        try {
            const user = await api.post('/empresa', {
                nome,
                email,
                senha,
                telefone,
                cep
            });

            sessionStorage.clear();
            sessionStorage.setItem("survey-manager", JSON.stringify(user.data));

            Toastify({
                text: "Cadastro bem sucedido!",
                duration: 3000,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: { background: "linear-gradient(to right, #00b09b, #96c93d)" }
            }).showToast();

            navigate('/login');
        } catch (error) {

            Toastify({
                text: "Ops! Algo deu errado...",
                duration: 3000,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: { background: "linear-gradient(to right, #a8323c, #e00d1f)" }
            }).showToast();
        }
    }


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

                    <label>Nome </label>
                    <div className="ui left icon input inputCurriculo"><i aria-hidden="true" /><input onChange={(e) => setNome(e.target.value)} type="text" placeholder="Nome" /></div>

                    <label>E-mail</label>
                    <div className="ui left icon input inputCurriculo"><i aria-hidden="true" /><input onChange={(e) => setEmail(e.target.value)} type="password" placeholder="E-mail" /></div>

                    <label>Senha</label>
                    <div className="ui left icon input inputCurriculo"><i aria-hidden="true" /><input onChange={(e) => setSenha(e.target.value)} type="text" placeholder="Senha" /></div>

                    <label>Telefone</label>
                    <div className="ui left icon input inputCurriculo"><i aria-hidden="true" /><input onChange={(e) => setTelefone(e.target.value)} type="password" placeholder="Telefone" /></div>

                    <label>Senha</label>
                    <div className="ui left icon input inputCurriculo"><i aria-hidden="true" /><input onChange={(e) => setCep(e.target.value)} type="password" placeholder="Cep" /></div>

                    <div>
                        <button onClick={() => cadastrarEmpresa()} className="botao-login">Entrar</button>
                    </div>

                </form>
            </div>






        </>
    );
}

export default Cadastro;