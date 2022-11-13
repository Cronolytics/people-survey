import './button-login.css'

const Botao = (props) => {
    
    
    return (
        <>
            <button className='botao-login'>{props.children}</button>
        </>
    );

}

export default Botao;