// Gatsby supports TypeScript natively!
import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MainContainer from "../components/containers/mainContainer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import Razor from "../components/containers/razorContainer"
import QuoteForm from "../components/quoteForm"

import StyledContactBackground from "../components/backgroundimages/contactHero"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <StyledContactBackground />
    <Razor>
      <div className="content"></div>

      <MainContainer>
        <div className="leftContent">
          <h2 style={{ color: "#dc2e22" }}>Information</h2>
          <h3>Know whats underground. Dig with confidence.</h3>
          <p>
            Our technicians are completely equipped with all sorts of knowledge
            and information regarding traditional as well as latest underground
            utility locating technologies.
          </p>
          <p>
            If you have any questions or comments, or if you would like to
            contact us for a quote, please email or call us.
          </p>
          <p>
            <span
              style={{
                fontWeight: "900",

                fontFamily: "Neo Sans Bold Italic",
              }}
            >
              Head Office Postal Address (QLD & NSW):
            </span>
            <br />
            PO Box 1366
            <br />
            Coolangatta QLD 4225
          </p>
          <p>
            <span
              style={{
                fontWeight: "900",

                fontFamily: "Neo Sans Bold Italic",
              }}
            >
              Email:
            </span>
            <br />

            <a href="mailto:info@expertservicelocating.com.au">
              {" "}
              <FontAwesomeIcon icon={faEnvelope} />{" "}
              info@expertservicelocating.com.au
            </a>
          </p>
          <p>
            <span
              style={{
                fontWeight: "900",

                fontFamily: "Neo Sans Bold Italic",
              }}
            >
              Call us for a Free Quote:
            </span>
            <br />

            <a href="tel:0420346477">
              {" "}
              <FontAwesomeIcon icon={faPhone} /> 0420-346-477
            </a>
          </p>

          <Link to="/">Go back to the homepage</Link>
        </div>
        <QuoteForm formTitle="contact" formWidth="400px" />
      </MainContainer>
    </Razor>
  </Layout>
)

export default ContactPage
