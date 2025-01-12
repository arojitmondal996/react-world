import React from 'react';

const Banner = () => {
    return (
        <div className='bg-[#b8ddd4] flex justify-between h-[460px] mt-8 rounded-xl'>
            {/* Banner Left Part */}
            <div className='px-10'>
                <div className='py-28'>
                    <p className='text-[#757575] mb-3'>Bangladesh 2.0</p>
                    <h2 className='text-5xl font-bold mb-3'>Idea , innovation , <br />
                        vision and challenges in <br /> New Bangladesh.</h2>
                    <button className='bg-[#006A50] mt-5 p-2 font-sm text-white rounded'>Explore New Bangladesh</button> 
                </div>
            </div>
            {/* Banner Right Part */}
            <div className='h-[158px] w-[371px] py-24 mr-10'>
                <img src="/src/assets/hero.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;