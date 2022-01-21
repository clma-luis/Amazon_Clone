import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header'
import SubHeader from '../../components/SubHeader/SubHeader';


import './Layout.scss'

const Layout = () => {
    return (
        <div className="layout">
            <Header/>

         
            <Outlet />
        </div>
    )
}

export default Layout
