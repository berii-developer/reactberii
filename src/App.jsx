import React from 'react';
import Banner from './Banner';
import Services from './Services';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Service from './Service';
import Portfoliocard from './Portfoliocard';
import Footer from './Footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const App = () => {
    return (
        <div>
            <Banner />
            <div className="container">
                <div className="row">
                    {Service.map((val) => {
                        return <Services title={val.title} pera={val.pera} iconone={val.iconone} />;
                    })};
               </div>
            </div>
            <About />
            <div className="container">
            <div className="row py-5">
            {Portfoliocard.map((del) =>{
                return <Portfolio title={del.title} pera={del.pera} Portfolioimg={del.Portfolioimg}/>
            }) }
            </div>
            </div>
            <Contact />
            <Footer/>
        </div>
    );
}
export default App;