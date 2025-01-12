import React from 'react';
import Navbar from '../Navbar.jsx/Navbar';
import { Outlet } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Pillar from '../Pillar/Pillar';

const MainLayout = () => {
    return (
        <div className='w-[1200px] mx-auto mt-5'>
            <Navbar/>
            <Banner/>
            <Pillar/>
        </div>
    );
};

export default MainLayout;