import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Footer.css'

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join our newsletter to hear first about all our new activities
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time
                </p>
                <div className="input-areas">
                    <form>
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            className="footer-input"
                        />
                        <Button buttonStyle="btn--outline">Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to="/about">How it works</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to="/contact">send us a message</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                            BBetter <i class="fas fa-globe-americas"></i>
                        </Link>
                    </div>
                    <div className="social-icons">
                        <Link
                            className="social-icon-link"
                            to="/"
                            target="_blank"
                            aria-label="Facebook">
                            <i className="fab fa-facebook f"></i>
                        </Link>
                        <Link
                            className="social-icon-link"
                            to="/"
                            target="_blank"
                            aria-label="Instagram">
                            <i className="fab fa-instagram"></i>
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Footer
