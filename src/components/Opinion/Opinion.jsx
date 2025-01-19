import React from 'react';

const Opinion = () => {
    return (
        <div className='mb-10'>
            <h1 className='font-bold text-4xl mb-5 mt-15'>Your Opinion Matters</h1>
            {/* card start  */}
            <div className='h-[209px] bg-slate-100 rounded-2xl'>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead className='bg-[#C6E4D6]'>
                                <tr>
                                    <th className='font-bold text-black text-sm'>Questions</th>
                                    <th></th>
                                    <th></th>
                                    <th className='font-bold text-end text-black text-sm'>Select Your Opinion</th>
                                </tr>
                            </thead>
                            {/* first table */}
                            <tbody className=''>
                                {/* row 1 */}
                                <tr className=" bg-base-200">
                                    <td className='font-bold'>Do you believe Bangladesh is on the right path toward becoming a developed nation?</td>
                                    <td className='font-bold text-end text-black text-sm '></td>
                                    <td className='font-bold text-end text-black text-sm '></td>
                                    <td className='font-bold text-end text-black text-sm '>
                                        <select className="p-2 rounded-md bg-[#C6E4D6] max-w-xs">
                                            <option disabled selected>Yes, I Agree</option>
                                            <option>Game of Thrones</option>
                                            <option>Lost</option>
                                            <option>Breaking Bad</option>
                                            <option>Walking Dead</option>
                                        </select>
                                    </td>
                                </tr>
                            </tbody>
                            <hr />
                            {/* second table */}
                            <tbody className=''>
                                {/* row 1 */}
                                <tr className=" bg-base-200">
                                    <td className='font-bold'>Do you believe Bangladesh is on the right path toward becoming a developed nation?</td>
                                    <td className='font-bold text-end text-black text-sm '></td>
                                    <td className='font-bold text-end text-black text-sm '></td>
                                    <td className='font-bold text-end text-black text-sm '>
                                        <select className="p-2 rounded-md bg-[#C6E4D6] max-w-xs">
                                            <option disabled selected>Yes, I Agree</option>
                                            <option>Game of Thrones</option>
                                            <option>Lost</option>
                                            <option>Breaking Bad</option>
                                            <option>Walking Dead</option>
                                        </select>
                                    </td>
                                </tr>
                            </tbody>
                            <hr />
                            {/* third table */}
                            <tbody className=''>
                                {/* row 1 */}
                                <tr className=" bg-base-200">
                                    <td className='font-bold'>Do you believe Bangladesh is on the right path toward becoming a developed nation?</td>
                                    <td className='font-bold text-end text-black text-sm '></td>
                                    <td className='font-bold text-end text-black text-sm '></td>
                                    <td className='font-bold text-end text-black text-sm '>
                                        <select className="p-2 rounded-md bg-[#C6E4D6] max-w-xs">
                                            <option disabled selected>Yes, I Agree</option>
                                            <option>Game of Thrones</option>
                                            <option>Lost</option>
                                            <option>Breaking Bad</option>
                                            <option>Walking Dead</option>
                                        </select>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Opinion;