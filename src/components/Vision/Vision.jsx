import React from 'react';

const Vision = () => {
    return (
        <div>
            <h2 className="text-4xl font-bold">The Vision of Future</h2>
            <p className='mt-5'>Bangladesh 2.0 aims to redefine the nation’s trajectory by embracing cutting-edge technology, promoting inclusive growth, and ensuring sustainability. With initiatives in renewable energy, digital transformation, and robust infrastructure, the country is set to become a global model of development.</p>
            {/* all card here */}
            <div className='flex justify-between'>
                {/* first card */}
                <div className='mt-5 mb-5 '>
                    <div className=" border-gray-700 border-2 border-opacity-10 rounded-2xl h-[325px] bg-[#cadefd] w-96 shadow-xl">
                        <div className='ml-10'>
                            <figure>
                                <img className='items-start justify-start mt-7'
                                    src="/src/assets/card-icon.png"
                                    alt="Shoes" />
                            </figure>
                            <div className="mt-2">
                                <h2 className="font-bold mt-5 text-black ">Digital Transformation</h2>
                                <p className='mt-2'>Creating a nationwide digital ecosystem to enhance connectivity and access to services for all citizens.</p>
                            </div>
                            <button className='btn mt-5 bg-[#5490F5]'>
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
                {/* Second card */}
                <div className='mt-5 mb-5'>
                    <div className=" border-gray-700 border-2 border-opacity-10 rounded-2xl h-[325px] bg-[#d4ffec] w-96 shadow-xl">
                        <div className='ml-10'>
                            <figure>
                                <img className='items-start justify-start mt-7'
                                    src="/src/assets/card-icon.png"
                                    alt="Shoes" />
                            </figure>
                            <div className="mt-2">
                                <h2 className="font-bold mt-5 text-black ">Digital Transformation</h2>
                                <p className='mt-2'>Creating a nationwide digital ecosystem to enhance connectivity and access to services for all citizens.</p>
                            </div>
                            <button className='btn mt-5 bg-[#09A15C]'>
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
                {/* third card */}
                <div className='mt-5 mb-5'>
                    <div className=" border-gray-700 border-2 border-opacity-10 rounded-2xl h-[325px] bg-[#fff1d0] w-96 shadow-xl">
                        <div className='ml-10'>
                            <figure>
                                <img className='items-start justify-start mt-7'
                                    src="/src/assets/card-icon.png"
                                    alt="Shoes" />
                            </figure>
                            <div className="mt-2">
                                <h2 className="font-bold mt-5 text-black ">Digital Transformation</h2>
                                <p className='mt-2'>Creating a nationwide digital ecosystem to enhance connectivity and access to services for all citizens.</p>
                            </div>
                            <button className='btn mt-5 bg-[#FFC239]'>
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vision;