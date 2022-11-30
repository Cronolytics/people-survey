import './banner-style.css'
import '../../../assets/css/home-style.css'
import '../../../assets/css/reset.css';

// import BannerGreenBaloon from '../../../assets/images/home/banner-green-baloon.png'
// import BannerPurpleBaloon from '../../../assets/images/home/banner-purple-baloon.png'

function Banner(){
    return(
        <>
            <div className="banner flex-centralization">
                <div className="container">
                    <div className="banner-content">
                        <div className="banner-tittle">
                            <h1>Sua fonte de respostas</h1>
                            <div className="gradient-text">
                                <h2>em um único lugar.</h2>
                            </div>                   
                            <h3>Crie uma pesquisa de mercado <br/> hoje mesmo.</h3>
                        </div>

                        <div className="banner-options">
                            <button className="button normal">Parceria</button>
                            <button className="button normal">Produtos</button>                    
                            <button className="button fishing">Experimentar</button>
                        </div>              
                    </div> 
                </div>
                {/* <div className="card-banner">
                    <div className="card-baloons">
                        <img className="baloon" src={BannerGreenBaloon}  alt="O que o público está querendo ?"/>
                        <img className="baloon" src={BannerPurpleBaloon} alt="O que as pessoas estão dizendo ?"/>
                    </div>

                    <div className="card-message">
                        <p>A <strong>People Survey</strong> te diz.</p>
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default Banner;