// Gatsby supports TypeScript natively!
import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MainContainer from "../components/containers/mainContainer"

import Razor from "../components/containers/razorContainer"
import QuoteForm from "../components/quoteForm"
import GasImage from "../components/gatsbyimages/gasLineImage"
import StyledGasBackground from "../components/backgroundimages/gasHero"

const GasPage = () => (
  <Layout>
    <SEO
      title="Gas Line Locating"
      description="Our underground gas line locators can get the job done. Our highly qualified and well-versed underground cable and pipe locators can help you dig with confidence"
    />
    <StyledGasBackground />
    <Razor>
      <div className="content"></div>

      <MainContainer>
        <div className="leftContent">
          <h2 style={{ color: "#dc2e22" }}>What Are Gas Lines?</h2>
          <p
            style={{
              fontWeight: "900",

              fontFamily: "Neo Sans Bold Italic",
            }}
          >
            Much like all underground services, gas lines lay beneath our
            modern-day cities and infrastructures.
          </p>
          <p>
            In order to start work on any residential or commercial digging
            projects, it is necessary to be aware of any{" "}
            <Link to="/cable-and-pipe-locating">underground utility lines</Link>{" "}
            before any digging or excavation begins.
          </p>
          <GasImage />
          <h3>Can Damaging a Gas Line Be Dangerous?</h3>
          <p>
            If you damage an underground gas pipe due to digging or excavating,
            this can cause “escapes” which are incredibly harmful and can lead
            to fires and explosions. Underground gas lines usually cause two
            types of damages; an immediate escape or an escape which occurs
            sometime later. Immediate escapes put the workers and people
            carrying out the digging process in harm’s way as they occur in the
            immediate area. The second type of escapes occurs some other time
            when the work has been finished, which leads to corrosion or other
            hazardous events.
          </p>
          <h3>Underground Gas Line Locators</h3>
          <p>
            Gas line locating requires{" "}
            <Link to="/electromagnetic-detection">
              electromagnetic line detecting tools
            </Link>{" "}
            and equipment. The process includes a measure of competence as well
            as diligence. With the help of our advanced electromagnetic
            detection system, we identify the underground gas pipe location and
            notify the concerned person about this discovery. Ensuring they
            avoid these buried gas lines in the future. We then clearly mark
            lines which identify these spots, so you know which areas to avoid.
            We also offer{" "}
            <Link to="/utility-mapping">Underground Utility Mapping</Link>, so
            you have an on-hand map of what and where your underground utilities
            are located.
          </p>
          <p>
            When it comes to gas pipe locating, Expert Service Locating has
            specialists that can get the job done in no time. Due to our highly
            qualified and well-versed team, we have unmatched knowledge of the
            underground infrastructure in Brisbane, Gold Gold Coast and Northern
            Rivers. Through over 17 years of experience, we have established a
            reputation unlike any other underground utility locating service in
            the country. In addition, we are accredited by Telstra and fully
            insured. So as far as the reliability of our locating services is
            concerned, you don’t have to worry about anything as you can leave
            the gas line locating process on your property to us.
          </p>
          <p>
            To acquire the services of our highly experienced staff and find out
            about any underground gas lines on your property or any of our other
            <Link to="/underground-utility-locating-services">
              Underground Utility Locating Services
            </Link>
            , contact us now at <a href="tel:0420346477">0420-346-477</a> You
            can also send us an email at{" "}
            <a href="mailto:info@expertservicelocating.com.au">
              info@expertservicelocating.com.au
            </a>
            . Don’t wait any further! Make sure you dial before you dig today
            and avoid hazardous situations!
          </p>
          <Link to="/">Go back to the homepage</Link>
        </div>
        <QuoteForm formWidth="400px" />
      </MainContainer>
    </Razor>
  </Layout>
)

export default GasPage
