// Gatsby supports TypeScript natively!
import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MainContainer from "../components/containers/mainContainer"

import Razor from "../components/containers/razorContainer"
import QuoteForm from "../components/quoteForm"

import StyledPowerBackground from "../components/backgroundimages/powerHero"
import DbydCert from "../components/gatsbyimages/dbydCert"
import TelstraCert from "../components/gatsbyimages/telstraCert"

const PowerPage = () => (
  <Layout>
    <SEO
      title="Telecom & Power Locating"
      description="We offer power line location and telecommunication line solutions. Our underground locating specialists are the top choice for all your utility location needs."
    />
    <StyledPowerBackground />
    <Razor>
      <div className="content"></div>

      <MainContainer>
        <div className="leftContent">
          <h2 style={{ color: "#dc2e22" }}>
            Locating Underground Electrical Lines
          </h2>
          <p
            style={{
              fontWeight: "900",

              fontFamily: "Neo Sans Bold Italic",
            }}
          >
            Underground electrical line location is the process in which an
            underground service locator identifies and marks-out electrical
            cables on your property.
          </p>
          <p>
            Underground power lines require the proper tools and equipment for
            them to be appropriately identified and located. Therefore, you must
            consult a{" "}
            <Link to="/about">professional underground service locator</Link>{" "}
            before breaking-ground on your next project.
          </p>
          <p>
            Avoid the headache of unnecessary damages, high repair costs and
            injuries. Call us now at <a href="tel:0420346477">0420-346-477</a>{" "}
            to locate power lines and any other underground services on your
            property or job-site!
          </p>
          <h3>Looking for Power Line Locators near me?</h3>
          <p>
            Expert Service Locating is the top choice for all your power line
            locating, and telecommunication locating needs. We have been in the
            underground utility locating industry for over 17 years. And with an
            extremely long list of satisfied customers, we ensure each of our
            underground utility locating services are carried out with the
            highest standard of quality possible. We have an exceptional track
            record in preventing damage and high repair costs on various types
            of properties, and this is all due to our extensive knowledge of
            Australia’s underground infrastructure.
          </p>
          <h3>What Can We Do For You?</h3>
          <p>
            We offer state-of-the-art power line location and telecommunication
            line solutions. We carry out the process of power line locating with
            the use of{" "}
            <Link to="/electromagnetic-detection">
              electromagnetic detection equipment
            </Link>
            . The electromagnetic locating process is the most effective and
            safest way to{" "}
            <Link to="/cable-and-pipe-locating">find underground pipes</Link>,
            cables and power lines.{" "}
          </p>
          <DbydCert /> <TelstraCert />
          <p>
            All our services are carried out by our Telstra accredited, and DBYD
            certified professionals. Due to our comprehensive knowledge and our
            wide range of services, we can locate all your water, gas, sewer,
            power lines and much more.
          </p>
          <p>
            Ready to know the location of your underground services? Then
            contact us now at <a href="tel:0420346477">0420-346-477</a> and
            request a free quote!
          </p>
          <Link to="/">Go back to the homepage</Link>
        </div>
        <QuoteForm formTitle="power" formWidth="400px" />
      </MainContainer>
    </Razor>
  </Layout>
)

export default PowerPage
