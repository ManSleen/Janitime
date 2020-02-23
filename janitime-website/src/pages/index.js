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
            Clock in with our mobile application or call into our phone system.
            Many janitors still do not have smartphones and batteries often die.
            When you need both clock in methods, JaniTime is your answer.
          </p>

          <Link to="/sign-up/">
            {" "}
            <button className="signup-button ">Sign Up</button>
          </Link>
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
            Clock in/out with
            <br /> your smartphone
          </h2>
          <p>
            Our smartphone app is included without any extra charges. For staff
            that have smartphones this is the simplest way of clocking in and
            out of their buildings. All your associate has to do is enter the
            building code and press the clock in/out button.
          </p>
        </div>
        <div className="box phone-screen-right">
          <img src={clockInScreen} alt="Clock in phone screen" />
        </div>
      </div>
    </section>

    {/* Battery Saver Section */}

    {/* <section className="info-section battery-saver">
      <div className="info-section-container">
        <div className="box phone-screen-left">
          <img src={batteryScreen} alt="Battery Saver phone screen" />
        </div>
        <div className="box info-section-text">
          <h2>Connect via the app’s “Battery Saver Mode”</h2>
          <p>
            “Battery saver mode” allows employees to turn off map features in
            order to save power. This ensures no one ends up with a dead device.
          </p>
        </div>
      </div>
    </section> */}

    {/* Real Time Tracking Section */}

    <section className="info-section tracking">
      <div className="info-section-container reverse">
        <div className="box phone-screen-left">
          <img src={trackingScreen} alt="Real Time Tracking phone screen" />
        </div>
        <div className="box info-section-text">
          <h2>Real time tracking</h2>
          <p>
            You think an employee is doing something fishy? Turn on tracking and
            watch their bread crumbs in real time or after on your JaniTime
            website.
          </p>
        </div>
      </div>
    </section>

    {/* Auto GPS Section */}

    <section className="info-section auto-gps">
      <div className="info-section-container">
        <div className="box info-section-text">
          <h2>Forgot to clock out? No more!</h2>
          <p>
            We wrap your buildings with an imaginary barrier called a geofence.
            When your staff steps out of it they are clocked out. This means you
            are no longer paying for employees forgetting to clock out. This
            eliminates time card fraud from cleaners doing other activities
            while on the clock.
          </p>
        </div>
        <div className="box phone-screen-right">
          <img src={clockOutScreen} alt="Auto clock out phone screen" />
        </div>
      </div>
    </section>

    {/* Cloud Section */}

    <section className="info-section cloud-section">
      <img src={cloud} alt="" />

      <p>
        Our web application allows you to manage employees, messages, billing
        and building status. Daily reports keep you informed of the most
        important issues. Everything, in a centralized spot.
      </p>
      <Link to="/features">
        <button className="learn-more-button">Learn More</button>
      </Link>
    </section>

    {/* Ready To Join? Section */}

    <section className="info-section ready-to-join">
      <h2>Ready to join?</h2>
      <p>
        JaniTime's base plan is just{" "}
        <span style={{ textDecoration: "underline" }}>$9.95 per month!</span>
      </p>
      <Link to="/sign-up/">
        <button className="signup-button ">Sign Up</button>
      </Link>
    </section>
  </Layout>
)

export default IndexPage
