import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Sponser from '../../Components/Sponser/Sponser';
import ShowCase from '../../Components/Show/ShowCase';
import MidelBanner from '../../Components/MidelBanner/MidelBanner';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Sponser></Sponser>
           <ShowCase></ShowCase>
           <MidelBanner></MidelBanner>
        </div>
    );
};

export default Home;