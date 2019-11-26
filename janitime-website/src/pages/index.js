import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import illustration from "../images/illustration1.svg"
import computer from "../images/computer-icon.svg"
import wallet from "../images/wallet.svg"
import chart from "../images/chart.svg"
import clockInScreen from "../images/clock-in-screen.svg"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="landing-container">
      <section className="hero split">
        <div className="left">
          <h1>Your Janitorial Management System</h1>
          <p>
            No more missed cleanings, padded timesheets, calucation errors or
            paper inspections.
          </p>
          <button className="hero-signup">
            <Link to="/page-2/">Sign Up</Link>
          </button>
        </div>
        <div className="right">
          <img src={illustration} alt="janitime" />
        </div>
      </section>
    </div>

    {/* Learn More Section */}

    <section className="learn-more-container">
      <div className="learn-more">
        <div className="benefit-container">
          <p>Easy setup</p>
          <div className="benefit">
            <img src={computer} />
          </div>
        </div>
        <div className="benefit-container">
          <p>Intuitive interface</p>
          <div className="benefit">
            <img src={chart} />
          </div>
        </div>
        <div className="benefit-container">
          <p>Affordable</p>
          <div className="benefit">
            <img src={wallet} />
          </div>
        </div>
      </div>
      <button className="learn-more-button">Learn More</button>
    </section>

    {/* Clock In Section */}

    <section className="clock-in">
      <div className="clock-in-container">
        <div className="box clock-in-title">
          <h2>Clock in with your phone</h2>
          <p>
            Janitime is availible for both Android and iOS meaning everyone
            should be covered. This means employees can use Janitime by
            installing a single app.
          </p>
        </div>
        <div className="box phone-screen">
          <img src={clockInScreen} alt="clock in phone screen" />
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
