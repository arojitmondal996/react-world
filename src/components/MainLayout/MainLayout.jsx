import React from 'react';
import Navbar from '../Navbar.jsx/Navbar';
import { Outlet } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Pillar from '../Pillar/Pillar';
import Footer from '../Footer/Footer';
import Vision from '../Vision/Vision';
import Advisor from '../Advisor/Advisor';
import Opinion from '../Opinion/Opinion';
import RecentNews from '../RecentNews/RecentNews';
import Donation from '../Donation/Donation';
import Newsletter from '../Newsletter/Newsletter';

const MainLayout = () => {
    return (
        <div className='w-[1200px] mx-auto mt-5'>
            <Navbar/>
            <Banner/>
            <Pillar/>
            <Vision/>
            <Advisor/>
            <Opinion/>
            <RecentNews/>
            <Donation/>
            <Newsletter/>
            <Footer/>
        </div>
    );
};

export default MainLayout;