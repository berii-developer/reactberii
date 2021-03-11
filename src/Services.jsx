import React from 'react';
import iconone from '../src/image/icon1.png';
const Services = (props) => {
    return (
        <div className="col-lg-4">
            <div className="services py-5">
            <img src={props.iconone} className="offset-5"  alt="ccdsvc" width="20%"/>
                <h2 className="text-center">{props.title}</h2>
                <p className="text-center">{props.pera}</p>

            </div>
        </div>
    );
}
export default Services;