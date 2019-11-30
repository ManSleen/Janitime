import React from "react"
import { Link } from "gatsby"
import Slider from "rc-slider"

import "rc-slider/assets/index.css"
import Layout from "../components/layout"

import pricingHero from "../images/pricing-hero.svg"
import pricing from "../images/pricing-testimonial.png"

import SEO from "../components/seo"

const Pricing = () => (
  <Layout>
    <SEO title="Pricing" />
    <div className="landing-container">
      {/* Pricing Hero Top Section */}

      <section className="hero split">
        <div className="left">
          <h1>Timekeeping... that pays for itself</h1>
          <p>
            Simply pay a low monthly access fee + a per minute call charge for
            each month of service.
          </p>
          <button className="signup-button ">
            <Link to="/page-2/">Sign Up</Link>
          </button>
        </div>
        <div className="right">
          <img src={pricingHero} alt="janitime" />
        </div>
      </section>
    </div>

    {/* Testimonial Section */}

    <section className="info-section testimonial">
      <div className="testimonial-container">
        <div className="testimonial-image">
          <img src={pricing} alt="artistic building" />
        </div>
        <div className="testimonial-text">
          <h3>
            “Using Janitime I found out that most of my cleaners were spending
            less than the budgeted time. The difference between the budget time
            and actual time saved me $3184.00 per month. JaniTime is the best
            thing that ever happened to my business.”
          </h3>
          <p>- LUXURY Janitorial Corporation</p>
          <Link to="/features">
            <button className="learn-more-button">Learn More</button>
          </Link>
        </div>
      </div>
    </section>

    <section className="info-section pricing-slider-container">
      <div className="pricing-inner-container">
        <h3>How many employees do you have?</h3>
        {/* <input type="range" min="1" max="100" class="slider" id="myRange"></input> */}
        <div className="slider-container">
          <Slider
            min={0}
            max={250}
            dots
            dotStyle={{ border: "red", height: "10px" }}
            activeDotStyle={{
              border: "red",
              height: "40px",
              marginTop: "10px",
            }}
            marks={{
              25: 25,
              50: 50,
              75: 75,
              100: 100,
              125: 125,
              150: 150,
              175: 175,
              200: 200,
              225: 225,
              250: 250,
            }}
            step={25}
            defaultValue={25}
            className="slider"
            trackStyle={{ backgroundColor: "#92CDC8", height: 10 }}
            handleStyle={{
              border: "solid 4.5px #36BDB2",
              height: 38,
              width: 38,
              marginLeft: 0,
              marginTop: -14,
              backgroundColor: "white",
            }}
            railStyle={{ backgroundColor: "#CFD0D5", height: 10 }}
          />
        </div>
      </div>
    </section>

    {/* Pricing is Simple Section */}

    <section className="info-section ready-to-join rtj-gray">
      <h2>Pricing is simple</h2>
      <p>
        Simply pay a $9.95 monthly access fee and a 10¢ per minute call charge
        for each month of service.
      </p>
      <button className="signup-button">Sign Up</button>
    </section>
  </Layout>
)

export default Pricing
