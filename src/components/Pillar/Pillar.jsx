import React from 'react';

const Pillar = () => {
    return (
        <div className='mt-10 mb-10'>
            <h2 className="text-4xl font-bold mb-8">Pillars of "Bangladesh 2.0"</h2>
            {/* card start here */}
            <div className='flex justify-between'>
                {/* first card */}
                <div className=" border-gray-700 border-2  border-opacity-10 rounded-2xl bg-base-100 w-72 shadow-xl">
                    <div className='ml-10 mb-5'>
                        <figure>
                            <img className='items-start justify-start mt-5'
                                src="/src/assets/card-icon.png"
                                alt="Shoes" />
                        </figure>
                        <div className="mt-2">
                            <h2 className="font-bold mt-2 ">Innovation</h2>
                            <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, incidunt.</p>
                        </div>
                    </div>
                </div>
                {/* second card */}
                <div className=" border-gray-700 border-2 border-opacity-10 rounded-2xl bg-base-100 w-72 shadow-xl">
                    <div className='ml-10'>
                        <figure>
                            <img className='items-start justify-start mt-5'
                                src="/src/assets/card-icon.png"
                                alt="Shoes" />
                        </figure>
                        <div className="mt-2">
                            <h2 className="font-bold mt-2 ">Innovation</h2>
                            <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, incidunt.</p>
                        </div>
                    </div>
                </div>
                {/* third card */}
                <div className=" border-gray-700 border-2 border-opacity-10 rounded-2xl bg-base-100 w-72 shadow-xl">
                    <div className='ml-10'>
                        <figure>
                            <img className='items-start justify-start mt-5'
                                src="/src/assets/card-icon.png"
                                alt="Shoes" />
                        </figure>
                        <div className="mt-2">
                            <h2 className="font-bold mt-2 ">Innovation</h2>
                            <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, incidunt.</p>
                        </div>
                    </div>
                </div>
                {/* forth card */}
                <div className=" border-gray-700 border-2 border-opacity-10 rounded-2xl bg-base-100 w-72 shadow-xl">
                    <div className='ml-10'>
                        <figure>
                            <img className='items-start justify-start mt-5'
                                src="/src/assets/card-icon.png"
                                alt="Shoes" />
                        </figure>
                        <div className="mt-2">
                            <h2 className="font-bold mt-2 ">Innovation</h2>
                            <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, incidunt.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pillar;