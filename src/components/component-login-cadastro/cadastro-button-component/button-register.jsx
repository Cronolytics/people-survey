import './button-register.css'

const BotaoCadastro = (props) => {
    
    
    return (
        <>
            <button  className='botao-cadastro'>{props.children}</button>
        </>
    );

}

export default BotaoCadastro;