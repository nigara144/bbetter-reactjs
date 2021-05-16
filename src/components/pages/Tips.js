import React from 'react'
import CardItem from '../CardItem'
import '../Cards.css'
import myImage1 from "../../images/img-1.jpg"
import myImage2 from "../../images/img-1.jpg"
import myImage3 from "../../images/img-1.jpg"
import NavbarLogged from '../NavbarLoggedIn'
import Footer from '../Footer'


function Tips() {
    return (
        <>
            <NavbarLogged />
            <div className="cards" >
                <h1 > Enjoy all our tips for taking care of the planet! </h1>
                <div className="cards__container">
                    <div className="cards__wrapper">
                        <ul className="cards__items">
                            <CardItem
                                src={myImage1}
                                text="Save Energy"
                                p="sjhjfn"
                                label="Tips"
                            />
                            <CardItem
                                src={myImage2}
                                text="Small changes"
                                label="Tips"
                            />
                            <CardItem
                                src={myImage3}
                                text="A creature of habit"
                                label="Tips"
                            />
                        </ul>
                        <ul className="cards__items">
                            <CardItem
                                src={myImage1}
                                text="How to be sustainable"
                                label="Tips"
                            />
                            <CardItem
                                src={myImage2}
                                text="Small changes"
                                label="Tips"
                            />
                            <CardItem
                                src={myImage3}
                                text="A creature of habit"
                                label="Tips"
                            />
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Tips