import React from 'react';
import airbnb from '../../Image/logos/airbnb.png'
import google from '../../Image/logos/google.png'
import uber from '../../Image/logos/uber.png';
import netflix from '../../Image/logos/netflix.png';
import slack from '../../Image/logos/slack.png';
const Brand = () => {
    return (
        <div className='title-color mt-3 ml-40 mr-40'>
            <div className='grid grid-cols-5 align-middle'>
                <img className=' w-36' src={slack} alt="" />
                <img className=' w-32' src={google} alt="" />
                <img className=' w-20 mb-3' src={uber} alt="" />
                <img className=' w-24' src={netflix} alt="" />
                <img className=' w-40' src={airbnb} alt="" />
            </div>
        </div>
    );
};

export default Brand;