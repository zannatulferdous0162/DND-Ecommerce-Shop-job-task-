import React from 'react';
import banner from '../../assets/Banner.png';
const Banner = () => {
    return (
        <div>
           <img className='h-[540px] w-[100%] rounded-lg' src={banner} alt="" /> 
        </div>
    );
};

export default Banner;