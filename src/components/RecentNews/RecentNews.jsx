import React from 'react';
import image2 from "../../assets/satelite.png"
import image1 from "../../assets/al-jazeera.png"

const RecentNews = () => {
    return (
        <div className='mt-10 mb-10'>
            <h2 className="text-2xl font-bold mt-10 mb-2">Recent News</h2>
            <p>Bangladesh 2.0 aims to redefine the nation’s trajectory by embracing cutting-edge technology,
                promoting inclusive growth, and ensuring sustainability. With initiatives in renewable energy,
                digital transformation, and robust infrastructure, the country is set to become a global model
                of development.
            </p>
            {/* card section */}
            {/* first card */}
            <div className='flex gap-5 bg-base-200 rounded-xl w-[1280] h-[602] mt-7'>
                {/* Image || Left Side */}
                <div className='p-5'>
                    <img className='rounded-2xl w-[508] h-[306]' src={image2} alt="" />
                </div>
                {/* text site || Right Side */}
                <div className='mt-5'>
                    <h2 className="text-2xl font-bold mb-4">Bangladesh Launches New Satellite</h2>
                    <img className='mb-2' src={image1} alt="" />
                    <p className='mb-2'>Date: 05/01/2025
                        Time: 10.25 PM</p>
                    <p>Not until the creation and maintenance of decent conditions of life for all people <br />
                        are recognized and accepted as a common obligation of all people and all countries <br />
                        —not until then shall we,with a certain degree of justification, be able to speak of <br />
                        humankind as civilized</p>
                    <div >
                        <button className='h-[48] w-[139] bg-[#006A50] p-3 rounded-xl font-semibold text-white mt-5 px-5'>Read More</button>
                    </div>
                </div>
            </div>
            {/* second card */}
            <div className='flex justify-around gap-5 bg-base-200 rounded-xl w-[1280] h-[602] mt-7'>
                {/* text site || Right Side */}
                <div className='mt-5'>
                    <h2 className="text-2xl font-bold mb-4">Bangladesh Launches New Satellite</h2>
                    <img className='mb-2' src={image1} alt="" />
                    <p className='mb-2'>Date: 05/01/2025
                        Time: 10.25 PM</p>
                    <p>Not until the creation and maintenance of decent conditions of life for all people <br />
                        are recognized and accepted as a common obligation of all people and all countries <br />
                        —not until then shall we,with a certain degree of justification, be able to speak of <br />
                        humankind as civilized</p>
                    <div >
                        <button className='h-[48] w-[139] bg-[#006A50] p-3 rounded-xl font-semibold text-white mt-5 px-5'>Read More</button>
                    </div>
                </div>
                {/* Image || Left Side */}
                <div className='p-5'>
                    <img className='rounded-2xl w-[508] h-[306]' src={image2} alt="" />
                </div>
            </div>
            {/* third card */}
            <div className='flex gap-5 bg-base-200 rounded-xl w-[1280] h-[602] mt-7'>
                {/* Image || Left Side */}
                <div className='p-5'>
                    <img className='rounded-2xl w-[508] h-[306]' src={image2} alt="" />
                </div>
                {/* text site || Right Side */}
                <div className='mt-5'>
                    <h2 className="text-2xl font-bold mb-4">Bangladesh Launches New Satellite</h2>
                    <img className='mb-2' src={image1} alt="" />
                    <p className='mb-2'>Date: 05/01/2025
                        Time: 10.25 PM</p>
                    <p>Not until the creation and maintenance of decent conditions of life for all people <br />
                        are recognized and accepted as a common obligation of all people and all countries <br />
                        —not until then shall we,with a certain degree of justification, be able to speak of <br />
                        humankind as civilized</p>
                    {/* button */}
                    <div >
                        <button className='h-[48] w-[139] bg-[#006A50] p-3 rounded-xl font-semibold text-white mt-5 px-5'>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentNews;