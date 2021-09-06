import React from 'react'
import {Link} from 'react-router-dom'
import { Button } from './Button'
import './Footer.css'

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Begin your journey! Sign up for the Roaring Grace newsletter.
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time.
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Your Email" className="footer-input" />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About RG</h2>
                        <Link to="/services">Why RG</Link>
                        <Link to="/">Testimonials</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>How it Works</h2>
                        <Link to="/services">Our Services</Link>
                        <Link to="/">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        <section className="social-media">
            <div className="social-media-wrap">
                <div className="footer-logo">
                    <Link to="/" className="social-logo">
                        Roaring Grace
                    </Link>
                </div>
                <small className="website-rights">Roaring Grace © 2021</small>
                <div className="social-icons">
                    <Link
                        className="social-icon-link instagram"
                        to="/"
                        target="_blank"
                        aria-label="Instagram"
                    >
                        <i className="fab fa-instagram" />
                    </Link>
                    <Link
                        className="social-icon-link youtube"
                        to="/"
                        target="_blank"
                        aria-label="Youtube"
                    >
                        <i className="fab fa-youtube" />
                    </Link>
                    <Link
                        className="social-icon-link twitter"
                        to="/"
                        target="_blank"
                        aria-label="Twitter"
                    >
                        <i className="fab fa-twitter" />
                    </Link>
                    <Link
                        className="social-icon-link linkedin"
                        to="/"
                        target="_blank"
                        aria-label="Linkedin"
                    >
                        <i className="fab fa-linkedin" />
                    </Link>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Footer
