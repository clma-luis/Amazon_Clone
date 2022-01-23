import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header'
import SubHeader from '../../components/SubHeader/SubHeader';
import Footer from '../../components/Footer/Footer';


import './Layout.scss'

const Layout = () => {
    return (
        <div className="layout">
            <Header/>
            <SubHeader/>
         
            <Outlet />

            <Footer/>
        </div>
    )
}

export default Layout
