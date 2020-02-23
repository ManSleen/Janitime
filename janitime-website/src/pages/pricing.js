import React, { useState } from "react"
import { Link } from "gatsby"
import Slider from "rc-slider"

import "rc-slider/assets/index.css"
import Layout from "../components/layout"

import pricingHero from "../images/pricing-hero.svg"
import pricing from "../images/pricing-testimonial.png"

import SEO from "../components/seo"

const prices = {
  500: 50,
  1000: 80,
  1500: "112.50",
  2000: 150,
  2500: 175,
  3000: 210,
  3500: 245,
  4000: 280,
  4500: 270,
  5000: 300,
}

const Pricing = () => {
  const [price, setPrice] = useState("112.50")
  const handleChange = v => {
    console.log(prices[v])
    setPrice(prices[v])
  }

  return (
    <Layout>
      <SEO title="Pricing" />
      <div className="landing-container">
        {/* Pricing Hero Top Section */}

        <section className="hero split">
          <div className="left">
            <h1>
              Timekeeping... <br />
              that pays for itself
            </h1>
            <p>
              Simply pay a low monthly access fee + a per minute call charge for
              each month of service.
            </p>

            <Link to="/sign-up/">
              <button className="signup-button ">Sign Up</button>
            </Link>
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
              less than the budgeted time. The difference between the budget
              time and actual time saved me $3184.00 per month. JaniTime is the
              best thing that ever happened to my business.”
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
          <h3>How many times do you clock-in monthly?</h3>

          <div className="slider-container">
            <Slider
              min={500}
              max={5000}
              dots
              dotStyle={{
                width: "5px",
                border: "none",
                borderRadius: "0",
                height: "20px",
                bottom: "-10px",
              }}
              activeDotStyle={{
                border: "none",
                borderRadius: "0",
                height: "20px",
                bottom: "-10px",
              }}
              marks={{
                500: { style: { marginTop: "25px" }, label: 500 },
                1000: { style: { marginTop: "25px" }, label: 1000 },
                1500: { style: { marginTop: "25px" }, label: 1500 },
                2000: { style: { marginTop: "25px" }, label: 2000 },
                2500: { style: { marginTop: "25px" }, label: 2500 },
                3000: { style: { marginTop: "25px" }, label: 3000 },
                3500: { style: { marginTop: "25px" }, label: 3500 },
                4000: { style: { marginTop: "25px" }, label: 4000 },
                4500: { style: { marginTop: "25px" }, label: 4500 },
                5000: { style: { marginTop: "25px" }, label: 5000 },
              }}
              step={500}
              defaultValue={1500}
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
              onChange={value => handleChange(value)}
            />
          </div>
          <div className="price-per-month">
            <span className="dollar">$</span>
            <span className="dollar-amount">{price}</span>
            <span className="monthly"> monthly</span>
          </div>
        </div>
      </section>

      <section className="what-sets-us-apart">
        <h2>What sets us apart</h2>
        <div className="container">
          <div className="point">
            <div className="number">1</div>
            <div className="description-container">
              <div className="title">
                We charge per clock in, not per employee
              </div>
              <div className="description">
                This means you pay based on how often you use our service, not
                for each part-time or full-time employee.
              </div>
            </div>
          </div>
          <div className="point spaced">
            <div className="number">2</div>
            <div className="description-container">
              <div className="title">
                With our pricing model, you only pay for current employees
              </div>
              <div className="description">
                We have your back! We know about the high turnover rates, so you
                only pay for employees that clock in/out and not for former
                employees.
              </div>
            </div>
          </div>
          <div className="point">
            <div className="number">3</div>
            <div className="description-container">
              <div className="title">The bigger you get, the less you pay</div>
              <div className="description">
                Our pricing model is de-escilating. We reward your company’s
                growth with lower pricing.
              </div>
            </div>
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
        <Link to="/sign-up/">
          <button className="signup-button ">Sign Up</button>
        </Link>
      </section>
    </Layout>
  )
}

export default Pricing
