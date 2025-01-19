import React from 'react';

const Donation = () => {
    return (
        <div>
            {/* heading text */}
            <div className='mt-5 mb-10'>
                <h2 className="text-3xl font-bold text-center mb-2">Donate Today</h2>
                <p className='text-center'>Bangladesh 2.0 aims to redefine the nation’s trajectory by embracing cutting-edge
                    technology, promoting inclusive growth, and ensuring sustainability. With initiatives in
                    renewable energy, digital transformation, and robust infrastructure.
                </p>
            </div>
            {/* card section */}
            <div className='flex justify-around items-center gap-5 hover-bg:[#0E0E0E]'>
                {/* First card */}
                <div className='bg-slate-100 rounded-xl px-7 h-[128]  w-[240]'>
                    <h2 className="text-3xl font-bold  p-8">100 Taka</h2>
                </div>
                {/* Second card */}
                <div className='bg-[#C6E4D6] rounded-xl px-7 h-[128] w-[240]'>
                    <h2 className="text-3xl font-bold  p-8">100 Taka</h2>
                </div>
                {/* Third card */}
                <div className='bg-slate-100 rounded-xl px-7 h-[128] w-[240]'>
                    <h2 className="text-3xl font-bold  p-8">100 Taka</h2>
                </div>
                {/* Forth card */}
                <div className='bg-slate-100 rounded-xl px-7 h-[128] w-[240]'>
                    <h2 className="text-3xl font-bold  p-8">100 Taka</h2>
                </div>
            </div>
            {/* input field */}
            <div className='w-9/12 mt-7 ml-40 py-3 bg-[#ebeaea] rounded'>
                <p className='text-center'>Other Amount (Taka)</p>
            </div>
            {/* button */}
            <div className='flex justify-center mb-10'>
                <button className='h-[48] w-[139] bg-[#006A50] p-3 rounded-xl font-semibold text-white mt-5 px-5'>Read More</button>
            </div>
        </div>
    );
};

export default Donation;