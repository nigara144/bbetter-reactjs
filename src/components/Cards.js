import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import myImage1 from "../images/vol.jpg"
import myImage2 from "../images/Food.jpeg"
import myImage3 from "../images/Knowledge.jpg"
import myImage4 from "../images/Tips.jpg"


function Cards() {
    return (
        <div className="cards">
            <h1>Choose what you want to do today!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src={myImage1}
                            text="Find the nearest volunteering project for you"
                            label="Volunteer"
                            path="/volunteer"
                        />
                        <CardItem
                            src={myImage2}
                            text="How to cook with love for yourself and your planet"
                            label="Food"
                            path="/food"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src={myImage4}
                            text="Change bad habits with good ones"
                            label="Everyday Tips"
                            path="/tips-cards"
                        />
                        <CardItem
                            src={myImage3}
                            text="Learn about your impact"
                            label="Knowledge is Power"
                            path="/knowledge"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
