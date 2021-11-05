import React from 'react'
import '../../App.css'
import Footer from '../Footer'
import NavbarLoggedOrg from '../NavbarOrg'
import CreateActivity from '../CreateActivity'


function LoggedOrg() {
    return (
        <>
            <NavbarLoggedOrg />
            <CreateActivity />
            <Footer />
        </>
    )
}

export default LoggedOrg;