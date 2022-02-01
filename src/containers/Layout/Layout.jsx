import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header'
import SubHeader from '../../components/SubHeader/SubHeader';
import Footer from '../../components/Footer/Footer';



import './Layout.scss'

const Layout = () => {
    const [onScroll, setOnScroll] = useState(false);


    return (
        <div className= {onScroll ? "layout stop-scrolling" : "layout"}>
            <Header id="header" 
            inactiveScroll={() => {
                setOnScroll(!onScroll)
            }}
          />
            <SubHeader inactiveScroll={() => {
                setOnScroll(!onScroll)
            }}
            />
         
            <Outlet />

            <Footer />
        </div>
    )
}

export default Layout
