import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

// SVG Icon Files
import gettingStartedHero from "../images/getting-started-hero.svg"
import building from "../images/building.png"

import SEO from "../components/seo"

const GettingStarted = () => (
  <Layout>
    <SEO title="Getting Started" />
    <div className="landing-container">
      {/* Getting Started Hero Top Section */}

      <section className="hero split">
        <div className="left">
          <h1>Janitime is simple to set up</h1>
          <p>
            Simply contact us and follow simple steps to start using Janitime as
            a solution for you and your employees.
          </p>
          <button className="signup-button ">
            <Link to="/page-2/">Sign Up</Link>
          </button>
        </div>
        <div className="right">
          <img src={gettingStartedHero} alt="janitime" />
        </div>
      </section>
    </div>

    <section className="info-section testimonial">
      <div className="testimonial-container">
        <div className="testimonial-image">
          <img src={building} alt="artistic building image" />
        </div>
        <div className="testimonial-text">
          <h3>
            “Ever since I’ve had JaniTime.com I’ve never had a missed cleaning.
            I can see in real time where all my employees are and which
            buildings they are cleaning... Janitime saved our reputation and
            sanity.”
          </h3>
          <p>- Squeaky Clean</p>
          <Link to="/features">
            <button className="learn-more-button">Get Started</button>
          </Link>
        </div>
      </div>
    </section>

    {/* Ready To Join? Section */}

    <section className="info-section ready-to-join rtj-white">
      <h2>Ready to join?</h2>
      <p>JaniTime's base plan is just $9.95 per month!</p>
      <button className="signup-button">Sign Up</button>
    </section>
  </Layout>
)

export default GettingStarted
