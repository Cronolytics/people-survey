import '../assets/css/style.css'
import '../assets/css/reset.css'
import Formulario from "../components/Formulario";
import logo_survey from '../assets/images/logo-survey.png'


const Login = () => {

    function mudar_cadastro() {
        window.location.href = "../pages/Cadastro"
    }

    return (
        <>
            <div className="img-logo">
                <img src={logo_survey} />
            </div>

            <Formulario />

            <div className='div-cadastro'>
                <p>Ainda não possui conta? <u onClick={mudar_cadastro}>Faça o cadastro!</u></p>
            </div>
        </>
    );
}

export default Login;