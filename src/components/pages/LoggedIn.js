import React from 'react'
import '../../App.css'
import Cards from '../Cards'
import Footer from '../Footer'
import MainSection from '../MainSection'
import NavbarLoggedIn from '../NavbarLoggedIn'


function LoggedIn() {
    return (
        <>
            <NavbarLoggedIn />
            <MainSection />
            <Cards />
            <Footer />
        </>
    )
}

export default LoggedIn;