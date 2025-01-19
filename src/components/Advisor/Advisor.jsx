import React from 'react';
import image from '../../assets/quote-bg.png'

const Advisor = () => {
    return (
        <div className='bg-slate-100 rounded-2xl p-5 mb-5 '>
            {/* for image */}
            <div className='relative'>
                {/* image qutation */}
                <div className='absolute justify-start'>
                    <img src={image} alt="" />
                </div>
            </div>
            {/* for text */}
            <div>
                {/* text */}
                <div className='mt-5'>
                    <p className=''>
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quas, ducimus labore sequi quos deserunt optio id repellendus tempora veniam amet porro corporis exercitationem numquam debitis culpa laudantium odio, velit vel minus sit? Veritatis aut maiores ducimus fugit error ex sit, dignissimos eum tempora perferendis a rem culpa ab aliquid modi? Est vitae neque esse, cumque, quam tenetur rem earum eaque mollitia modi ipsum aspernatur, dignissimos excepturi aliquam architecto soluta necessitatibus vero?"
                    </p>
                    <h1 className='font-bold mt-3 text-xl'>Dr. Muhammad Yunus</h1>
                    <p>Chief Adviser of the People's Republic of Bangladesh</p>
                </div>
            </div>
        </div>
    );
};

export default Advisor;