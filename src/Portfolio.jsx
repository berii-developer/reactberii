import React from 'react';
import Portfoliocard from './Portfoliocard';
const Portfolio = (props) =>{
    return(
        <>
            <div className="col-lg-4 py-5 text-center">
            <div className="card shadow">
            <div className="card-body">
            <h3 className="text-success">{props.title}</h3>
            <p>{props.pera}</p>
            <img src={props.Portfolioimg} alt="" width="80%"/>
            </div>
            </div>
            </div>
        </>
    );
}
export default Portfolio;