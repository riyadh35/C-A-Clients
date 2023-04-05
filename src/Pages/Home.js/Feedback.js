import React from 'react';
import customer1 from '../../Image/customer-1.png'
import customer2 from '../../Image/customer-2.png'
import customer3 from '../../Image/customer-3.png'

const Feedback = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold text-center mt-28'>Clients <span style={{ color: '#7AB259' }}>Feedback</span></h1>
            <div className='grid grid-cols-3 p-20'>
                <div className="card w-80 h-52 bordered">
                    <div className="card-body">
                        <div className='flex'>
                            <img src={customer1} alt="" className='w-16' />
                            <div className='p-1 ml-3'>
                                <h1 className='text-xl font-semibold'>Nash Patrik</h1>
                                <p className='font-semibold'>CEO, Manpol</p>
                            </div>
                        </div>
                        <p className='text-center'>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div className="card w-80 h-52 bordered">
                    <div className="card-body">
                        <div className='flex'>
                            <img src={customer2} alt="" className='w-16' />
                            <div className='p-1 ml-3'>
                                <h1 className='text-xl font-semibold'>Nash Patrik</h1>
                                <p className='font-semibold'>CEO, Manpol</p>
                            </div>
                        </div>
                        <p className='text-center'>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div className="card w-80 h-52 bordered">
                    <div className="card-body">
                        <div className='flex'>
                            <img src={customer3} alt="" className='w-16' />
                            <div className='p-1 ml-3'>
                                <h1 className='text-xl font-semibold'>Nash Patrik</h1>
                                <p className='font-semibold'>CEO, Manpol</p>
                            </div>
                        </div>
                        <p className='text-center'>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;