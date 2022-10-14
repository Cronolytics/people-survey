import '../assets/css/style.css'

const Botao = (props) => {
    
    function logar() {
        window.location.href = '../pages/Home.jsx'
    }
    return (
        <>
            <button onClick={logar} className='botao-login'>{props.children}</button>
        </>
    );

}

export default Botao;