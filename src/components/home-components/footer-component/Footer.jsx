import './footer-style.css'
import '../../../assets/css/home-style.css'
import '../../../assets/css/reset.css';

function Footer(){
    return(
        <>
            <div className="footer flex-centralization">
                <div className="footer-content">
                    <div className="side-content">
                        <span>Mobile App</span>
                        <span>Community</span>
                        <span>Company</span>
                    </div>
                    
                    <span className="footer-title">People Survey</span>
            
                    <div className="side-content">
                        <span>Help Desk</span>
                        <span>Blog</span>
                        <span>Resources</span>
                    </div>
                    
                </div>
            
                <div className="developers">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                </div>
            
                <p>©Created by PeopleSurvey</p>
            </div>
        </>
    )
}

export default Footer;