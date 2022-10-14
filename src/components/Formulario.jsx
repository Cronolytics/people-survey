import '../assets/css/style.css'
import '../assets/css/reset.css'
import CampoTexto from './CampoTexto';
import Botao from './Botao';

const Formulario = () => {

    return (
        <>
            <div className='container'>
                <form >
                    <div className="div-texto">
                        <p>Acesse sua conta</p>
                    </div>
                    <CampoTexto label="Email" placeholder="peoplesurvey@gmail.com" />
                    <CampoTexto label="Senha" placeholder="*******" type="password" />

                    <Botao>
                        Entrar
                    </Botao>
                </form>
            </div>
        </>
    );
}

export default Formulario;