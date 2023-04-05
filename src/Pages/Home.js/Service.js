import React from 'react';
import Services from './Services';
import service1 from '../../Image/icons/service1.png'
import service2 from '../../Image/icons/service2.png'
import service3 from '../../Image/icons/service3.png'

const Service = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold text-center mt-28'>Provide awesome <span style={{ color: '#7AB259' }}>services</span></h1>
            {/* <div className='grid grid-cols-3 p-12 gap-2'>
                <Services img={service1}></Services>
                <Services className="bg-white drop-shadow-lg" img={service2}></Services>
                <Services img={service3}></Services>
            </div> */}
            <div className='grid grid-cols-3 p-12 gap-2 mt-28'>
                <div className="card w-96">
                    <figure className="px-10 pt-10">
                        <img src={service1} alt="Shoes" className="w-16 rounded-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Web & Mobile design</h2>
                        <p>We craft stunning and amazing web UI, using a well drrafted UX to fit your product.</p>
                    </div>
                </div>
                <div className="card w-96 bg-white drop-shadow-lg">
                    <figure className="px-10 pt-10">
                        <img src={service2} alt="Shoes" className="w-16 rounded-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Graphic design</h2>
                        <p>Amazing flyers, social media posts and brand representations that would make your brand stand out.</p>
                    </div>
                </div>
                <div className="card w-96">
                    <figure className="px-10 pt-10">
                        <img src={service3} alt="Shoes" className="w-16 rounded-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Web development</h2>
                        <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;