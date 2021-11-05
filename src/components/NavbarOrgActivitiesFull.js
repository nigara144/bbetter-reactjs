import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import './Button.css'
import { Button } from './Button'


function NavbarOrgActivitiesFull() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    const handleClick = () => setClick(!click);
    const closedMobileMenu = () => setClick(false);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/logged-org" className="navbar-logo" onClick={closedMobileMenu}>
                        BBetter <i class="fas fa-globe-americas" />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/logged-org' className='nav-links' onClick={closedMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/MyOrg_activities' className='nav-links' onClick={closedMobileMenu}>
                                My Activities
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline' buttonSize="btn-small">Log Out</Button>}
                </div>
            </nav>
        </>
    )
}

export default NavbarOrgActivitiesFull;
