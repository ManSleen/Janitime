import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

// SVG Icon Files
import features from "../images/features-hero.svg"
import features1 from "../images/features1.svg"
import features2 from "../images/features2.svg"
import features3 from "../images/features3.svg"

// SVG Icon Components
import Employee from "../images/icons/Employee"
import House from "../images/icons/House"
import Voicemail from "../images/icons/Voicemail"
import Clock from "../images/icons/Clock"
import Magnifying from "../images/icons/Magnifying"
import Clipboard from "../images/icons/Clipboard"
import Compass from "../images/icons/Compass"
import Battery from "../images/icons/Battery"
import Stopwatch from "../images/icons/Stopwatch"
import Phone from "../images/icons/Phone"
import Hash from "../images/icons/Hash"
import Telephone from "../images/icons/Telephone"

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

          <Link to="/sign-up/">
            <button className="signup-button ">Sign Up</button>
          </Link>
        </div>
        <div className="right">
          <img src={features} alt="janitime" />
        </div>
      </section>
    </div>

    {/* Features Section */}

    <section className="info-section features-container">
      <h2 className="features-title">Features</h2>
      <div className="features-thirds-container">
        <div className="features-third">
          <img src={features1} alt="" />
          <h2>1.</h2>
          <p>
            Your employees now have 2 ways to punch in and out for the day! Be
            sure your employees are on the job site with GPS geofencing on a
            personal mobile device OR use our landline telephone system.
          </p>
        </div>
        <div className="features-third">
          <img src={features2} alt="" />
          <h2>2.</h2>
          <p>
            Reimburse your field managers for the time and gas they spend going
            from building to building. Via Google Mapping technology, always
            know the exact distance and drive time between sites.
          </p>
        </div>
        <div className="features-third">
          <img src={features3} alt="" />
          <h2>3.</h2>
          <p>COMING SOON: Attendance Reward System</p>
        </div>
      </div>
    </section>

    {/* More Features Section */}

    <section className="info-section more-features-container">
      <h2>More Features</h2>
      <div className="features-icons-container">
        <div className="feature">
          <Link to="/features-list">
            <Employee />
            <p>Employee Management</p>
          </Link>
        </div>
        <div className="feature">
          <Link to="/features-list">
            <House />
            <p>Building Management</p>
          </Link>
        </div>
        <div className="feature">
          <Link to="/features-list">
            <Voicemail />
            <p>Personalized Voicemail</p>
          </Link>
        </div>

        <div className="feature">
          <Link to="/features-list">
            <Clock />
            <p>Weekly Timecard Manager</p>
          </Link>
        </div>
        <div className="feature">
          <Link to="/features-list">
            <Magnifying />
            <p>Quality Inspections</p>
          </Link>
        </div>
        <div className="feature">
          <Link to="/features-list">
            <Clipboard />
            <p>Generate Reports</p>
          </Link>
        </div>

        <div className="feature">
          <Link to="/features-list">
            <Compass />
            <p>GPS Clock In</p>
          </Link>
        </div>
        <div className="feature">
          <Link to="/features-list">
            <Battery />
            <p>Battery Saver Mode</p>
          </Link>
        </div>
        <div className="feature">
          <Link to="/features-list">
            <Stopwatch />
            <p>Auto Clock Out</p>
          </Link>
        </div>

        <div className="feature">
          <Link to="/features-list">
            <Phone />
            <p>Android and iOS</p>
          </Link>
        </div>
        <div className="feature">
          <Link to="/features-list">
            <Hash />
            <p>Unique Employee Number</p>
          </Link>
        </div>
        <div className="feature">
          <Link to="/features-list">
            <Telephone />
            <p>Employee Call In</p>
          </Link>
        </div>
      </div>
      <Link to="/features-list">
        <button className="learn-more-button">Learn More</button>
      </Link>
    </section>

    {/* Ready To Join? Section */}

    <section className="info-section ready-to-join">
      <h2>Ready to join?</h2>
      <p>JaniTime's base plan is just $9.95 per month!</p>
      <Link to="/sign-up/">
        <button className="signup-button ">Sign Up</button>
      </Link>
    </section>
  </Layout>
)

export default Features
