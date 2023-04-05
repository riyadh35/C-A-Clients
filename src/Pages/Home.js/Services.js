import React from 'react';

const Services = ({ img }) => {
    return (
        <div className="card w-96">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="w-16 rounded-full" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
        </div>
    );
};

export default Services;