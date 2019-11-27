import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import features from "../images/features-hero.svg"

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
  </Layout>
)

export default Features
