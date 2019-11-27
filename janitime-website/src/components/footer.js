import React from "react"
import { Link } from "gatsby"

import janitimeLogo from "../images/janitime-logo.svg"
import telephone from "../images/phone-icon.svg"
import mail from "../images/mail-icon.svg"

const Footer = ({ siteTitle }) => {
  return (
    <footer>
      <div className="footer-container">
        <div className="logo-container">
          <div className="logo">
            <Link to="/">
              <img src={janitimeLogo} alt="Janitime" />
            </Link>
          </div>
          <div className="logo-text">
            <Link to="/">{siteTitle}</Link>
          </div>
          <div className="footer-links">
            <h3>Janitime</h3>
            <Link to="/features">Features</Link>
            <Link to="/">Getting Started</Link>
            <Link to="/">Pricing</Link>
            <Link to="/">Sign Up</Link>
          </div>
        </div>
        <div className="footer-contact-info">
          <h3>Contact Us</h3>
          <img src={telephone} alt="telephone icon" />
          <span>
            <p>616-894-1834</p>
          </span>
          <br />
          <br />
          <p>or</p>
          <br />
          <br />
          <img src={mail} alt="mail icon" />
          <span>
            <p>sales@janitime.com</p>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
