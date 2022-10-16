import './partners-style.css'
import '../home-style.css'
import '../../../assets/css/reset.css';

function Partners(){
    return(
        <>
            <div className="flex-centralization">
                <div className="container">
                    <div className="partners-title">
                        <h2>Nossos clientes parceiros e apoiadores:</h2>
                    </div>
                    <div className="box-partners">
                        <div className="partner-logo">
                            Parceiro 01
                        </div>            
                        <div className="partner-logo">
                            Parceiro 02
                        </div>
                        <div className="partner-logo">
                            Parceiro 03
                        </div>
                        <div className="partner-logo">
                            Parceiro 04
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Partners;