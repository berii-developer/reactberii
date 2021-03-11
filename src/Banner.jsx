import React from 'react';
import banner from '../src/image/hero-9.jpg';
import './App.css';
const Banner = () => {
    return (
        <div>
            <div className="hero-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src={banner} alt="vfdvfd" width="100%" />
                        </div>
                        <div className="col-lg-6 d-flex justify-content-center align-items-center ">
                            <h1>Hello Guys! <br /> I'm BeRii.</h1>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default Banner;