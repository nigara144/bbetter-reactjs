import React from 'react'
import ActivitySignUp from '../ActivitySignUp'
import img from "../../../images/tree_planting_zinkevych_gettyimages.jpg"
import '../Volunteer.css'
import NavbarLogged from '../../NavbarLoggedIn'
import Footer from '../../Footer'

function HaderaTreePlant() {
    return (
        <>
            <NavbarLogged />
            <div class="container">
                <div><h2>Hadera Tree Plant</h2></div>
                <div>
                    <p>Place: Hadera- emek hefer</p>
                    <p>Date: Saturday 11.06.21</p>
                    <p>Time: 10:00</p>
                    <p><img className="images" src={img} width="400" alt="" /></p>

                    <ActivitySignUp />
                </div>
            </div>
            <Footer />
        </>
    );

}

export default HaderaTreePlant