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
    </section>
  </Layout>
)

export default SignUp
