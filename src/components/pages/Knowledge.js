import React from 'react'
import CardItem from '../CardItem'
import '../Cards.css'
import myImage1 from "../../images/air.PNG"
import myImage2 from "../../images/wildFires.PNG"
import myImage3 from "../../images/water.PNG"
import NavbarLoggedIn from '../NavbarLoggedIn'
import Footer from '../Footer'


function Knowledge() {
    return (
        <>
            <NavbarLoggedIn />
            <div className="cards">
                <h1> Read all the important facts about our impact on the planet!</h1>
                <div className="cards__container">
                    <div className="cards__wrapper">
                        <ul className="cards__items">
                            <CardItem
                                src={myImage1}
                                text="Air pollution"
                                label="Knowledge"
                                path="/air"
                            />
                            <CardItem
                                src={myImage3}
                                text="Human Impacts on the World Ocean"
                                label="Knowledge"
                                path="/ocean"
                            />
                            <CardItem
                                src={myImage2}
                                text="WildFires"
                                label="Knowledge"
                                path="/wildfires"
                            />
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}


export default Knowledge;
