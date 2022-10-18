import './input-register.css'

const CampoTexto = (props) => {

    // const placeholderModificada = `${props.placeholder}...` 

    return (
        <div className="campo-texto-cadastro">
            <label>
                {props.label}
            </label>
            <input placeholder={props.placeholder} />

        </div>
    )
}

export default CampoTexto;