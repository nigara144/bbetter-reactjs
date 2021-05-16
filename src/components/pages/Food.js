import React from 'react'
import CardItem from '../CardItem'
import '../Cards.css'
import myImage1 from "../../images/plant-based-recipes-1.jpg"
import myImage2 from "../../images/sus.jpg"
import myImage3 from "../../images/3.jpg"
import NavbarLoggedIn from '../NavbarLoggedIn'
import Footer from '../Footer'

function Food() {
    return (
        <>
            <NavbarLoggedIn />
            <div className="cards">
                <h1>Recipes that'll taste good and make you feel good!</h1>
                <div className="cards__container">
                    <div className="cards__wrapper">
                        <ul className="cards__items">
                            <CardItem
                                src={myImage1}
                                text="29 Easy Plant-Based Recipes You’ll Make Again and Again"
                                label="Food"
                                path="/fork"
                            />
                            <CardItem
                                src={myImage2}
                                text="22 Sustainable Recipes for Earth Day and Every Day"
                                label="Food"
                                path="/sustainable"
                            />
                            <CardItem
                                src={myImage3}
                                text="52 Plant-Based Recipes So You Can Celebrate Meatless Monday for a Whole Year"
                                label="Food"
                                path="/cookinglight"
                            />
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}


export default Food;