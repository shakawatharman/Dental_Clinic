import React from 'react';
import Appointment from '../Appointment/Appointment';
import Pricing from '../Pricing/Pricing';
import Services from '../Services/Services';
import Suggestion from '../Suggestion/Suggestion';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Services></Services>
            <Suggestion></Suggestion>
           
            <Pricing></Pricing>
            <Appointment></Appointment>

        </>
    );
};

export default Home;