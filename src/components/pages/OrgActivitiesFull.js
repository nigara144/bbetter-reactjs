import React from 'react'
import CardItem from '../CardItem'
import NavbarOrgActivitiesFull from '../NavbarOrgActivitiesFull'
import myImage1 from "../../images/image-editing-tools.jpg"

function OrgActivitiesFull() {
    return (
        <>
            <NavbarOrgActivitiesFull />
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem className="Caesarea"
                            src={myImage1}
                            text="Sunday 01.01.21 8:00"
                            p="update"
                            label="Herzliya beach cleanup"
                        />
                    </ul>
                </div>
            </div>
        </>
    )
}

export default OrgActivitiesFull;