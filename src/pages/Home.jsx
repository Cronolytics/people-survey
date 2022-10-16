import Header       from '../components/home-components/header-component/Header.jsx';
import Banner       from '../components/home-components/banner-component/Banner.jsx';
import Partners     from '../components/home-components/partners-component/Partners.jsx';
import Services     from '../components/home-components/services-component/Services.jsx';
import CallToAction from '../components/home-components/call-to-action-component/CallToAction.jsx';
import Footer       from '../components/home-components/footer-component/Footer.jsx';

function Home(){
    return(
        <>
            <Header/>
            <Banner/>
            <Partners/>
            <Services/>
            <CallToAction/>
            <Footer/>
        </>
    )
}

export default Home;