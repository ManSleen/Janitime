import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import janitimeLogo from "../images/janitime-logo.svg"

const Header = ({ siteTitle }) => (
  <header className="header-container">
    <nav className="nav-container">
      <div className="logo-container">
        <div className="logo">
          <Link to="/">
            <img src={janitimeLogo} alt="Janitime" />
          </Link>
        </div>
        <div className="logo-text">
          <Link to="/">{siteTitle}</Link>
        </div>
      </div>
      <div className="nav-right-links">
        <Link to="/features">Features</Link>
        <Link to="/">Getting Started</Link>
        <Link to="/">Pricing</Link>
        <button className="nav-button">Sign Up</button>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
