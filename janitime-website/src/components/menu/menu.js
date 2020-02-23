import React from "react"
import { Link } from "gatsby"

const Menu = ({ isOpen, setOpen }) => {
  const styles = {
    menuContainer: {
      position: "absolute",
      top: "80px",
      left: 0,
      height: isOpen ? "100%" : 0,
      width: "100%",
      display: "flex",
      flexDirection: "column",
      background: "white",
      opacity: 0.9,
      color: "black",
      transition: "height 0.3s ease",
      zIndex: 9999999,
      textAlign: "center",
    },
    menuItem: {
      padding: "1.3rem 0",
      margin: "0 5%",
    },
  }

  const menu = [
    { name: "Features", link: "/features" },
    { name: "Getting Started", link: "/getting-started" },
    { name: "Pricing", link: "/pricing" },
    { name: "Sign Up", link: "/sign-up" },
  ]

  const menuItems = menu.map(item => (
    <li style={styles.menuItem}>
      <Link
        onClick={() => setOpen(!isOpen)}
        activeClassName="active-link"
        to={item.link}
      >
        {item.name}
      </Link>
    </li>
  ))

  return (
    <div style={styles.menuContainer} className="closed">
      <ul className="mobile-nav-menu-links">{menuItems}</ul>
    </div>
  )
}

export default Menu
