import React from 'react';
import image1 from '../../assets/women-fashion-free-img.jpg';
import image2 from '../../assets/men-fashion-free-img.jpg';
import image3 from '../../assets/footwear-free-img.jpg';

const ShowCase = () => {
    return (
       <div className='mt-10'>
         <div className='flex lg:flex-row flex-col gap-4 items-center justify-center mx-auto w-[90%]'>

{/* First Image and Text */}
<div className='relative'>
    <img className='w-[400px] h-[400px] filter brightness-50' src={image1} alt="Women Fashion" />
    <div className='absolute top-9 left-0 w-full h-full flex flex-col justify-center items-center px-4 text-center text-white'>
        <h2 className='text-3xl font-semibold mb-2'>20% Off On Footwear</h2>
        <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.</p>
        <button className='btn mt-3'>Check Out</button>
    </div>
</div>

{/* Second Image and Text */}
<div className='relative'>
    <img className='w-[400px] h-[400px] filter brightness-50' src={image2} alt="Men Fashion" />
    <div className='absolute top-9 left-0 w-full h-full flex flex-col justify-center items-center px-4 text-center text-white'>
        <h2 className='text-3xl font-semibold mb-2'>Latest Eyewear For You</h2>
        <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.</p>
        <button className='btn mt-3'>Check Out</button>
    </div>
</div>

{/* Third Image and Text */}
<div className='relative'>
    <img className='w-[400px] h-[400px] filter brightness-50' src={image3} alt="Footwear Fashion" />
    <div className='absolute top-9 left-0 w-full h-full flex flex-col justify-center items-center px-4 text-center text-white'>
        <h2 className='text-3xl font-semibold mb-2'>Let's Lorem Suit Up</h2>
        <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.</p>
        <button className='btn mt-3'>Check Out</button>
    </div>
</div>

</div>
       </div>
    );
};

export default ShowCase;
