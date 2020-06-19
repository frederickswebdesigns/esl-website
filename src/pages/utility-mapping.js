// Gatsby supports TypeScript natively!
import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MainContainer from "../components/containers/mainContainer"

import Razor from "../components/containers/razorContainer"
import QuoteForm from "../components/quoteForm"

import StyledUmBackground from "../components/backgroundimages/umHero"
import MapImage from "../components/gatsbyimages/utilityMapImg"

const ElectroDectPage = () => (
  <Layout>
    <SEO
      title="Underground Utility Mapping"
      description="Our underground utility mapping service will give you comprehensive knowledge of what’s underground, helping you ensure a safer work environment."
    />
    <StyledUmBackground />
    <Razor>
      <div className="content"></div>

      <MainContainer>
        <div className="leftContent">
          <h2 style={{ color: "#dc2e22" }}>Why Utility Mapping is Important</h2>
          <p
            style={{
              fontWeight: "900",

              fontFamily: "Neo Sans Bold Italic",
            }}
          >
            Underground Utility Mapping is important anytime you are going to
            break ground on a property or job-site.
          </p>
          <p>
            Utility maps identify what type of underground cables and pipes are
            running through the property and their location. These utilities
            include power cables, gas pipes, water, telecommunication cables,
            storm drains, and abandoned/unknown underground services. Our
            underground utility mapping service will give you comprehensive
            knowledge of what’s underground, helping you ensure a safer work
            environment and avoid preventable utility damage.
          </p>
          <MapImage />
          <h3>Underground Utility Mapping </h3>
          <p>
            Once our experts have identified and marked out the locations of
            your detectible{" "}
            <Link to="/cable-and-pipe-locating">
              underground cables and pipes
            </Link>
            , we can then begin the utility mud mapping process. Our certified
            cable locators use on-site mapping tools and techniques, to draw in
            the location of the underground utilities on a site-map and provide
            a depth estimation for each underground cable and pipe.
          </p>
          <h4>Benefits of Underground Utility Maps</h4>
          <ul>
            <li>Minimize Risk</li>
            <li>Avoid high repair costs</li>
            <li>Safer work environment</li>
            <li>Avoid the unexpected</li>
            <li>Have confidence before you dig </li>
          </ul>
          <Link to="/">Go back to the homepage</Link>
        </div>
        <QuoteForm formWidth="400px" />
      </MainContainer>
    </Razor>
  </Layout>
)

export default ElectroDectPage
