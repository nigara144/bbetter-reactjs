import React from 'react'
import NavbarLoggedIn from '../NavbarLoggedIn'



function MyActivities() {
    return (
        <>
            <NavbarLoggedIn />
            <h1 className="MyActivities">My Activities</h1>
            <p>All the activities this user signed up for will be displayed here</p>
        </>

    );
}

export default MyActivities
