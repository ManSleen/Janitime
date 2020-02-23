import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import Menu from "./menu/menu"

import HamburgerMenu from "react-hamburger-menu"

import janitimeLogo from "../images/janitime-logo.svg"

const Header = ({ siteTitle }) => {
  const [isOpen, setOpen] = useState(false)
  return (
    <>
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
            <Link activeClassName="active-link" to="/features">
              Features
            </Link>
            <Link activeClassName="active-link" to="/getting-started">
              Getting Started
            </Link>
            <Link activeClassName="active-link" to="/pricing">
              Pricing
            </Link>
            <Link to="/sign-up">
              <button className="nav-button">Sign Up</button>
            </Link>
          </div>
          <div className="closed" style={{ cursor: "pointer" }}>
            <HamburgerMenu
              width={20}
              height={15}
              strokeWidth={2}
              menuClicked={() => setOpen(!isOpen)}
              isOpen={isOpen}
            />
          </div>
        </nav>
      </header>
      {isOpen ? <Menu setOpen={setOpen} isOpen={isOpen} /> : null}
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
