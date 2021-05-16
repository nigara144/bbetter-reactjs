import React from 'react'
import '../App.css'
// import { Button } from './Button'
import './MainSection.css'
import myVideo from '../videos/video-3.mp4'

function MainSection() {
    return (
        <div className='hero-container'>
            <video controls autoPlay loop muted>
                <source src={myVideo} type="video/mp4"></source>
            </video>
            <h1>MAKE A DIFFERENCE. BBETTER</h1>
            <div className="hero-btns">
                {/* <Button
                    className="btns"
                    buttonStyle="btn--outline"
                    buttonSize="btn--large">
                    GET STARTED
                </Button> */}
                {/* <Button
                    className="btns"
                    buttonStyle="btn--primary"
                    buttonSize="btn--large">
                    WATCH TRAILER<i className='far fa-play-circle' />
                </Button> */}
            </div>

        </div>
    )
}

export default MainSection
