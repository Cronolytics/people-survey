import './partners-style.css'
import '../../../assets/css/home-style.css'
import '../../../assets/css/reset.css';
import NikeLogo from '../../../assets/images/home/nike-logo.png'
import ValeLogo from '../../../assets/images/home/valemobi-logo.png'
import StefaniniLogo from '../../../assets/images/home/stefanini-logo.png'
import NetshoesLogo from '../../../assets/images/home/netshoes-logo.png'

function Partners() {
    return (
        <>
            <div className="flex-centralization">
                <div className="container">
                    <div className="partners-title">
                        <h2>Nossos clientes parceiros e apoiadores:</h2>
                    </div>
                    <div className="box-partners">
                        <div className="partner-logo">
                            <img src={NikeLogo} />
                        </div>
                        <div className="partner-logo">
                            <img src={ValeLogo} />
                        </div>
                        <div className="partner-logo">
                            <img src={StefaniniLogo} />
                        </div>
                        <div className="partner-logo">
                            <img src={NetshoesLogo} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Partners;