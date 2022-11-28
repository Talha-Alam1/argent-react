import React from 'react'
import Header from './header'
import Footer from './footer'
import { Outlet, Link } from "react-router-dom";

function layout() {
  return (
    <>
        <Header />
            <main className='main-wrapper'>
              <Outlet />
            </main>
        <Footer />
    </>
  )
}

export default layout