import React from 'react'
import CardItem from '../CardItem'
import '../Cards.css'
import NavbarLoggedIn from '../NavbarLoggedIn'
import myImage1 from "../../images/beachcleanups.jpg"
import myImage2 from "../../images/tree_planting_zinkevych_gettyimages.jpg"
import myImage3 from "../../images/v1.PNG"
import myImage4 from "../../images/v2.PNG"

function Volunteer() {
    return (
        <>
            <NavbarLoggedIn />
            <div className="cards" >
                <h1 > Volunteer and make a change! </h1>

                {/* Activities */}
                <div className="cards__container">
                    <div className="cards__wrapper">
                        <ul className="cards__items">
                            <CardItem className="Caesarea"
                                src={myImage1}
                                text="Clean up Caesarea beach with us"
                                label="Caesarea"
                                path="/caesarea-beach"
                            />
                            <CardItem className="Hadera"
                                src={myImage2}
                                text="Plant trees in Hadera"
                                label="Hadera"
                                path="/hadera-tree-plant"
                            />
                            <CardItem
                                src={myImage3}
                                text="Grow a Community Garden"
                                label="Pardes-Hana"
                            // path="/tip1"
                            />
                        </ul>
                        <ul className="cards__items">
                            <CardItem
                                src={myImage4}
                                text="Help Out Wildlife"
                                label="Tel-Aviv"
                            // path="/beginner-yoga"
                            />
                            <CardItem
                                src={myImage2}
                                text="Plant Trees together"
                                label="Petah-Tikva"
                            // path="/vinyasa-yoga"
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Volunteer