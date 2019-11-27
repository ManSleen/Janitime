import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import illustration from "../images/illustration1.svg"
import computer from "../images/computer-icon.svg"
import wallet from "../images/wallet.svg"
import chart from "../images/chart.svg"
import clockInScreen from "../images/clock-in-screen.svg"
import batteryScreen from "../images/battery-saver-screen.svg"
import clockOutScreen from "../images/auto-clock-out-screen.svg"
import trackingScreen from "../images/tracking-screen.svg"
import cloud from "../images/cloud-illustration.svg"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="landing-container">
      {/* Hero Top Section */}

      <section className="hero split">
        <div className="left">
          <h1>Your Janitorial Management System</h1>
          <p>
            No more missed cleanings, padded timesheets, calculation errors or
            paper inspections.
          </p>
          <button className="signup-button ">
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
            <img src={computer} alt="" />
          </div>
        </div>
        <div className="benefit-container">
          <p>Intuitive interface</p>
          <div className="benefit">
            <img src={chart} alt="" />
          </div>
        </div>
        <div className="benefit-container">
          <p>Affordable</p>
          <div className="benefit">
            <img src={wallet} alt="" />
          </div>
        </div>
      </div>
      <button className="learn-more-button">Learn More</button>
    </section>

    {/* Clock In Section */}

    <section className="info-section clock-in">
      <div className="info-section-container">
        <div className="box info-section-text">
          <h2>
            Clock in with <br />
            your phone
          </h2>
          <p>
            Janitime is availible for both Android and iOS meaning everyone
            should be covered. This means employees can use Janitime by
            installing a single app.
          </p>
        </div>
        <div className="box phone-screen-right">
          <img src={clockInScreen} alt="Clock in phone screen" />
        </div>
      </div>
    </section>

    {/* Battery Saver Section */}

    <section className="info-section battery-saver">
      <div className="info-section-container">
        <div className="box phone-screen-left">
          <img src={batteryScreen} alt="Battery Saver phone screen" />
        </div>
        <div className="box info-section-text">
          <h2>
            Connect via the app’s “Battery <br />
            Saver Mode”
          </h2>
          <p>
            “Battery saver mode” allows employees to turn off map features in
            order to save power. This ensures no one ends up with a dead device.
          </p>
        </div>
      </div>
    </section>

    {/* Auto GPS Section */}

    <section className="info-section auto-gps">
      <div className="info-section-container">
        <div className="box info-section-text">
          <h2>
            Auto GPS clock
            <br />
            out
          </h2>
          <p>
            Employee forgot to clock out? Janitime can do this automatically
            when leaving the location of a job site.
          </p>
        </div>
        <div className="box phone-screen-left">
          <img src={clockOutScreen} alt="Auto clock out phone screen" />
        </div>
      </div>
    </section>

    {/* Real Time Tracking Section */}

    <section className="info-section tracking">
      <div className="info-section-container">
        <div className="box phone-screen-left">
          <img src={trackingScreen} alt="Real Time Tracking phone screen" />
        </div>
        <div className="box info-section-text">
          <h2>Real time tracking</h2>
          <p>
            Janitime tracks employee location every 5 minutes, ensuring they are
            on site. Think of it as the most efficient manager you have ever
            had.
          </p>
        </div>
      </div>
    </section>

    {/* Cloud Section */}

    <section className="info-section cloud-section">
      <img src={cloud} alt="" />
      <h2>All of this, available on your computer</h2>
      <p>
        Our web application allows you to manage employees, messages, billing
        and building status. <br />
        Daily reports keep you informed of the most important issues.
        Everything, in a centralized spot.
      </p>
      <button className="learn-more-button">Learn More</button>
    </section>

    {/* Ready To Join? Section */}

    <section className="info-section ready-to-join">
      <h2>Ready to join?</h2>
      <p>JaniTime's base plan is just $9.95 per month!</p>
      <button className="signup-button">Sign Up</button>
    </section>
  </Layout>
)

export default IndexPage
