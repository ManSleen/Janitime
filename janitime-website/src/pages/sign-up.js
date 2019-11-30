import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SignUp = () => (
  <Layout>
    <SEO title="Sign Up" />
    <section className="info-section sign-up-container">
      <h2>More questions?</h2>
      <h3>Contact Us</h3>
      <p>
        <strong>By cell:</strong> 616-894-1834
        <br />
        or
        <br />
        <strong>By email:</strong> Sales@janitime.com
      </p>
      <h2 className="ready-heading">Ready to join?</h2>
      <div className="sign-up-form-container">
        <form className="sign-up-form" action="/action.php" method="POST">
          <fieldset>
            <h4>Personal information</h4>
            <div className="firstLastName">
              <div className="name-input">
                <label className="sign-up-label" htmlFor="firstname">
                  First Name
                </label>
                <input type="text" name="firstname" required />
              </div>
              <div className="name-input">
                <label className="sign-up-label" htmlFor="lastname">
                  Last Name
                </label>
                <input type="text" name="lastname" required />
              </div>
            </div>
            <div>
              <label className="sign-up-label" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                required
              />
            </div>
            <div>
              <label className="sign-up-label" htmlFor="phone">
                Email
              </label>
              <input type="email" name="email" required />
            </div>
          </fieldset>
          <fieldset>
            <h4>Company information</h4>
            <div>
              <label className="sign-up-label" htmlFor="company-name">
                Company Name
              </label>
              <input type="text" name="company-name" />
            </div>
            <div>
              <label className="sign-up-label" htmlFor="company-address">
                Address
              </label>
              <textarea name="company-address" />
            </div>
            <div>
              <label className="sign-up-label" htmlFor="company-employees">
                Number of employees
              </label>
              <select id="employees-list">
                <option value="0-10">0 - 10</option>
                <option value="11-20">11 - 20</option>
                <option value="21-50">21 - 50</option>
                <option value="51-99">51 - 99</option>
                <option value="21-100">21-100</option>
                <option value="101-150">101 - 150</option>
                <option value="151-200">151 - 200</option>
                <option value="more than 200">more than 200</option>
              </select>
            </div>
          </fieldset>
          <button
            className="signup-button"
            id="signup-submit-button"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </section>
  </Layout>
)

export default SignUp
