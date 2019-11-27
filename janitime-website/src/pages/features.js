import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import features from "../images/features-hero.svg"
import employee from "../images/icons/employee.svg"
import house from "../images/icons/house.svg"

import voicemail from "../images/icons/voicemail.svg"
import clock from "../images/icons/clock.svg"
import magnifying from "../images/icons/magnifying.svg"
import clipboard from "../images/icons/clipboard.svg"
import compass from "../images/icons/compass.svg"
import battery from "../images/icons/battery.svg"
import stopwatch from "../images/icons/stopwatch.svg"
import phone from "../images/icons/phone.svg"
import hash from "../images/icons/hash.svg"
import telephone from "../images/icons/telephone.svg"

import SEO from "../components/seo"

const Features = () => (
  <Layout>
    <SEO title="Features" />
    <div className="landing-container">
      {/* Features Hero Top Section */}

      <section className="hero split">
        <div className="left">
          <h1>Janitime has the features you need</h1>
          <p>
            Live tracking, auto clock-out and battery-saver mode mean no more
            missed cleanings.
          </p>
          <button className="signup-button ">
            <Link to="/page-2/">Sign Up</Link>
          </button>
        </div>
        <div className="right">
          <img src={features} alt="janitime" />
        </div>
      </section>
    </div>

    {/* Features Section */}

    <section className="info-section features-container">
      <h2>More Features</h2>
      <div className="features-icons-container">
        <div className="feature">
          <img src={employee} alt="" />
          <p>Employee Management</p>
        </div>
        <div className="feature">
          <img src={house} alt="" />
          <p>Building Management</p>
        </div>
        <div className="feature">
          <img src={voicemail} alt="" />
          <p>Personalized Voicemail Messages</p>
        </div>

        <div className="feature">
          <img src={clock} alt="" />
          <p>Weekly Timecard Manager</p>
        </div>
        <div className="feature">
          <img src={magnifying} alt="" />
          <p>Quality Inspections</p>
        </div>
        <div className="feature">
          <img src={clipboard} alt="" />
          <p>Generate Reports</p>
        </div>

        <div className="feature">
          <img src={compass} alt="" />
          <p>GPS Clock In</p>
        </div>
        <div className="feature">
          <img src={battery} alt="" />
          <p>Battery Saver Mode</p>
        </div>
        <div className="feature">
          <img src={stopwatch} alt="" />
          <p>Auto Clock Out</p>
        </div>

        <div className="feature">
          <img src={phone} alt="" />
          <p>Android and iOS</p>
        </div>
        <div className="feature">
          <img src={hash} alt="" />
          <p>Unique Employee Number</p>
        </div>
        <div className="feature">
          <img src={telephone} alt="" />
          <p>Employee Call In</p>
        </div>
      </div>
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

export default Features
