import React from 'react'
import CardItem from '../CardItem'
import '../Cards.css'
import myImage1 from "../../images/t1.PNG"
import myImage2 from "../../images/t2.PNG"
import myImage3 from "../../images/t3.PNG"
import myImage4 from "../../images/t4.PNG"
import myImage5 from "../../images/t5.PNG"
import myImage6 from "../../images/t6.PNG"
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
                                p="Switch off standby appliances to help reduce carbon emissions"
                                label="Tips"
                            />
                            <CardItem
                                src={myImage2}
                                text="Use reusable alternatives"
                                p="Help the ocean and the environment by choosing to use reusable and eco-friendly alternatives"
                                label="Tips"
                            />
                            <CardItem
                                src={myImage3}
                                text="Go paperless"
                                p="Avoid wasting paper, choose to receive letters over email and only print off documents if necessary."
                                label="Tips"
                            />
                        </ul>
                        <ul className="cards__items">
                            <CardItem
                                src={myImage4}
                                text="Recycle and reuse"
                                p="Make sure you’re recycling by putting your rubbish in the correct bins. Also, try to reuse products and items as many times as possible before binning them to reduce waste."
                                label="Tips"
                            />
                            <CardItem
                                src={myImage5}
                                text="Grow your own produce"
                                p="By growing your own fruit and vegetables, you can ensure you’re not using pesticides that will contribute to water and air pollution."
                                label="Tips"
                            />
                            <CardItem
                                src={myImage6}
                                text="Donate unused items"
                                p="If you don’t use a product or wear a piece of clothing anymore, give it to a charity shop or someone you know would make use of it to help reduce waste."
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