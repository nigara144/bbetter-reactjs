import React from 'react'
import '../../App.css'
import Footer from '../Footer'
import NavbarLoggedIn from '../NavbarLoggedIn'
import CreateActivity from '../CreateActivity'


function LoggedOrg() {
    return (
        <>
            <NavbarLoggedIn />
            <CreateActivity />
            <Footer />
        </>
    )
}

export default LoggedOrg;