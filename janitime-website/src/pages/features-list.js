import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

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
import Tracking from "../images/icons/Tracking"
import Telephone from "../images/icons/Telephone"

import SEO from "../components/seo"

const FeaturesList = () => (
  <Layout>
    <SEO title="Features" />
    <section className="info-section full-feature-list-container">
      <div className="full-feature-list">
        <h2>Full Feature List</h2>
        <div className="features-list-container">
          {/* Admin Web Application */}
          <h3>Admin Web Application</h3>

          <div className="feature-list-item">
            <div className="feature-list-icon">
              <Employee />
            </div>
            <div className="feature-list-text">
              <p>
                <strong>Employee Management:</strong> Add as many individual
                employees to the system as you need! Give them a unique clock-in
                code, enable manager access, assign buildings, and set/view
                their schedule.
              </p>
            </div>
          </div>

          <div className="feature-list-item">
            <div className="feature-list-icon">
              <House />
            </div>
            <div className="feature-list-text">
              <p>
                <strong>Building Management:</strong> Add all buildings your
                company services. Create a unique building code, edit and manage
                detailed GPS data for the building, and assign schedules and
                managers.
              </p>
            </div>
          </div>

          <div className="feature-list-item">
            <div className="feature-list-icon">
              <Voicemail />
            </div>
            <div className="feature-list-text">
              <p>
                <strong>Personalized Voicemail Messages:</strong> Create
                voicemail messages for your employees when they use the
                telephone system. Perfect for Holiday greetings, company wide
                announcements, and reminders.
              </p>
            </div>
          </div>

          <div className="feature-list-item">
            <div className="feature-list-icon">
              <Clock />
            </div>
            <div className="feature-list-text">
              <p>
                <strong>Weekly Timecard Manager:</strong> Get a detailed look at
                the weekly time cards for all of your employees including total
                hours worked, budgeted hours, and drive time.
              </p>
            </div>
          </div>

          <div className="feature-list-item">
            <div className="feature-list-icon">
              <Magnifying />
            </div>
            <div className="feature-list-text">
              <p>
                <strong>Quality Inspections:</strong> Create specific
                inspections for employees and buildings. Give a 5-star rating
                based on the workmanship and leave comments for constructive
                criticism.
              </p>
            </div>
          </div>

          <div className="feature-list-item">
            <div className="feature-list-icon">
              <Clipboard />
            </div>
            <div className="feature-list-text">
              <p>
                <strong>Generate Reports:</strong> Let the data work for you!
                Using timecard, billing, and building information, you can
                generate reports to help your administration get a detailed view
                of what is going on. We currently provide daily reports, caller
                ID reports, and budget reports.
              </p>
            </div>
          </div>

          {/* Mobile App Section */}
          <h3>Mobile App</h3>

          <div className="feature-list-item">
            <div className="feature-list-icon">
              <Phone />
            </div>
            <div className="feature-list-text">
              <p>
                <strong>Dual Support:</strong> We support users on iPhone and
                Android devices!
              </p>
            </div>
          </div>

          <div className="feature-list-item">
            <div className="feature-list-icon">
              <Compass />
            </div>
            <div className="feature-list-text">
              <p>
                <strong>GPS Clock In:</strong> Set a custom radius for your
                buildings so your employees can only clock in/out if they are on
                the job site.
              </p>
            </div>
          </div>

          <div className="feature-list-item">
            <div className="feature-list-icon">
              <Battery />
            </div>
            <div className="feature-list-text">
              <p>
                <strong>Battery Saver Mode:</strong> Give your phone a break and
                let our system do the work. Janitime will keep track of time
                while the app is fully closed, and only use it to clock in and
                out. Does not work in conjunction with auto-clock out and real
                time tracking features.
              </p>
            </div>
          </div>

          <div className="feature-list-item">
            <div className="feature-list-icon">
              <Stopwatch />
            </div>
            <div className="feature-list-text">
              <p>
                <strong>Auto-clock out:</strong> Prone to wander? Enable this
                feature to automatically clock out employees when they leave the
                job site.
              </p>
            </div>
          </div>

          <div className="feature-list-item">
            <div className="feature-list-icon">
              <Tracking />
            </div>
            <div className="feature-list-text">
              <p>
                <strong>Real Time Tracking:</strong> Perfect for employees that
                run deliveries or are always on the move during their job. Set a
                designated clock-in station, and track your employees as they
                move throughout the city.
              </p>
            </div>
          </div>

          {/* Telephone System Section */}
          <h3>Telephone System</h3>

          <div className="feature-list-item">
            <div className="feature-list-icon">
              <Telephone />
            </div>
            <div className="feature-list-text">
              <p>
                <strong>Employee Call-In:</strong> Easily setup a landline at
                your job sites to manage time punches for your employees. Call
                in to your designated Janitime phone number and enter unique
                employee and building information. This system verifies
                employees are on site when clocking in and out - no mobile
                device required.
              </p>
            </div>
          </div>
        </div>
        <Link to="/features">
          <button className="learn-more-button">Go Back</button>
        </Link>
      </div>
    </section>
    {/* Ready To Join? Section */}

    <section className="info-section ready-to-join">
      <h2>Ready to join?</h2>
      <p>JaniTime's base plan is just $9.95 per month!</p>
      <button className="signup-button">Sign Up</button>
    </section>
  </Layout>
)

export default FeaturesList
