import React from 'react';
import banner from '../../Image/logos/Frame.png'

const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse mb-20">
                <img src={banner} alt='' className="max-w-2xl ml-28" />
                <div>
                    <h1 className="text-4xl font-bold">Let's Grow Your <br />
                        Brand To The <br />
                        Next Level</h1>
                    <p className="py-6">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                    <button style={{ background: '#111430' }} className="btn text-white w-40">Hire Us</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;