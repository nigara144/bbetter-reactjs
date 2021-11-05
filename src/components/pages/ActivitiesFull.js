import React from 'react'
import CardItem from '../CardItem'
import NavbarActivities from '../NavbarActivitiesFull'
import myImage1 from "../../images/beachcleanups.jpg"

function ActivitiesFull() {
    return (
        <>
            <NavbarActivities />
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem className="Caesarea"
                            src={myImage1}
                            text="Tuesday 05.06.21 8:00 - 2 people"
                            p="update"
                            label="Caesarea beach cleanup"
                        />
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ActivitiesFull;