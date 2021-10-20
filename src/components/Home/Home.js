import React from 'react';
import Appointment from '../Appointment/Appointment';
import Dentists from '../Dentists/Dentists';
import Services from '../Services/Services';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Services></Services>
            <Dentists></Dentists>
            <Appointment></Appointment>

        </>
    );
};

export default Home;