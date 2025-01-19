import React from 'react';

const Newsletter = () => {
    return ( 
        <div className='bg-[#C6E4D6] h-[395] w-[1280] rounded-xl mb-10' >
            <div className='p-10'>
                <h1 className="text-3xl font-bold text-center mb-5 mt-5">Subscribe Newsletter</h1>
                <p className='text-center mb-5'>Bangladesh 2.0 aims to redefine the nation’s trajectory by embracing cutting-edge <br />
                    technology, promoting inclusive growth.
                </p>
                {/* input */}
                <div className='bg-slate-200 flex justify-between w-7/12 ml-56 rounded-xl'>
                    <p className='text-center mt-3 ml-5'>Enter your email here</p>
                    <div className=''>
                        <button className='bg-[#006A50] px-4 rounded-xl text-white font-semibold py-3 w-[155] h-[56]'>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;