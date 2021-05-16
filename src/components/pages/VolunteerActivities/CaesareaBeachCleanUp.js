import React from 'react'
import ActivitySignUp from '../ActivitySignUp'
import img from "../../../images/beachcleanups.jpg"
import '../Volunteer.css'
import NavbarLogged from '../../NavbarLoggedIn'
import Footer from '../../Footer'


function CaesareaBeachCleanUp() {
    return (
        <>
            <NavbarLogged />
            <div class="container">
                <div><h2>Caesarea Beach Clean Up</h2></div>
                <div>
                    <p>Place: Caesarea- Kshatot beach</p>
                    <p>Date: Tuesday 05.06.21</p>
                    <p>Time: 8:00</p>
                    <p><img className="images" src={img} width="400" alt="" /></p>

                    <ActivitySignUp />
                </div>
            </div>
            <Footer />
        </>
    );

}


export default CaesareaBeachCleanUp