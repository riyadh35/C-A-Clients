import React from 'react';
import Header from '../Shared/Header';
import Banner from './Banner';
import Brand from './Brand';
import Service from './Service';
import Example from './Example';
import Feedback from './Feedback';
import Form from './Form';

const Home = () => {
    return (
        <div>
            <div className='bann'>
                <div className='Header'>
                    <Header></Header>
                    <Banner></Banner>
                </div>
            </div>
            <Brand></Brand>
            <Service></Service>
            <Example></Example>
            <Feedback></Feedback>
            <Form></Form>
        </div>
    );
};

export default Home;