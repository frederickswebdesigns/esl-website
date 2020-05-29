// Gatsby supports TypeScript natively!
import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MainContainer from "../components/containers/mainContainer"

import StyledAboutBackground from "../components/backgroundimages/aboutHero"
import Razor from "../components/containers/razorContainer"
import QuoteForm from "../components/quoteForm"
const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <StyledAboutBackground />
    <Razor>
      <div className="content"></div>

      <MainContainer>
        <div className="leftContent">
          <h2 style={{ color: "#dc2e22" }}>
            Professional Underground Services
          </h2>
          <p
            style={{
              fontWeight: "900",

              fontFamily: "Neo Sans Bold Italic",
            }}
          >
            Expert Service Locating is a commercial and residential underground
            utility locating company. Our expert underground asset locators know
            the intricacies of every process and provide professional services,
            delivering results combined with quality work and value.
          </p>
          <p>
            We strive to be the best in the utility location industry. That is
            why we use state-of-the-art technologies that enable us to use
            different frequencies to find your Cable and Pipe location, Power
            Line location, Gas Line location, as well as Sewer and Water Line
            location.
          </p>
          <p>
            Praesent feugiat egestas lectus, sit amet dapibus velit pharetra a.
            Aenean non sodales nisl. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Duis pretium facilisis ultricies. Phasellus ut
            turpis nec ipsum facilisis feugiat. Nullam venenatis sapien et neque
            egestas aliquet. Nulla facilisi.{" "}
          </p>
          <Link to="/">Go back to the homepage</Link>
        </div>
        <QuoteForm />
      </MainContainer>
    </Razor>
  </Layout>
)

export default SecondPage
