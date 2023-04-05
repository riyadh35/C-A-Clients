import React from 'react';

const Form = () => {
    return (
        <div style={{ backgroundColor: '#FBD062' }} >
            <div className='flex pb-32'>
                <div className='text-left  ml-20 pt-20'>
                    <h1 className='text-2xl font-bold'>Let us handle your <br /> project, professionally.</h1>
                    <p className='mt-8'>With well written codes, we build amazing apps  for all platforms, mobile and web apps in general.</p>
                </div>
                <div className='text-right mr-20 pt-20'>
                    <input type="text" placeholder="Your email address" className="input textr" />
                    <input type="text" placeholder="Your name / company's name" className="input mt-4 textr" />
                    <textarea className="textarea mt-4" placeholder="Your message "></textarea> <br />
                    <button style={{ background: '#111430' }} className="btn text-white mt-4 w-40 formbtn">send</button>
                </div>
            </div>
            <p className='text-center pb-8'>copyright Orange labs 2020</p>
        </div>
    );
};

export default Form;