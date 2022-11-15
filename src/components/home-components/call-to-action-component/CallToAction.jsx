import './call-to-action-style.css'
import '../../../assets/css/home-style.css'
import '../../../assets/css/reset.css';

import CtaPurpleBaloon from '../../../assets/images/home/call-to-action-purple-baloon.png'

function CallToAction(){
    return(
        <>
            <div className="flex-centralization"> 
                <div className="container">
                    <div className="cta-content">
                        <div className="call-to-action-baloon">
                            <img style={{width: '100%'}} src={CtaPurpleBaloon} alt="Agora chegou a hora de você criar sua pesquisa!"/>
                        </div>

                        <div className="button-area">
                            <button className="button-cta">
                                Experimentar agora!
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CallToAction;