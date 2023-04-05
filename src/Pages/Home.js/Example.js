import React from 'react';
import ex1 from '../../Image/carousel-1.png'
import ex2 from '../../Image/carousel-2.png'
import ex3 from '../../Image/carousel-3.png'


const Example = () => {
    return (
        <div className='bg-base-100'>
            <h1 className='text-3xl text-white font-bold text-center mt-28 pt-10'>Here are some of<span style={{ color: '#7AB259' }
            } > our works</ span></h1>
            <div className='grid grid-cols-3 p-12 gap-2 mt-28'>
                <div>
                    <img src={ex1} alt="" />
                </div>
                <div>
                    <img src={ex2} alt="" />
                </div>
                <div>
                    <img src={ex3} alt="" className='img3' />
                </div>
            </div>
        </div >
    );
};

export default Example;