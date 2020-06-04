// Gatsby supports TypeScript natively!
import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MainContainer from "../components/containers/mainContainer"

import Razor from "../components/containers/razorContainer"
import QuoteForm from "../components/quoteForm"

import StyledWaterBackground from "../components/backgroundimages/waterHero"

const WaterPage = () => (
  <Layout>
    <SEO title="Page two" />
    <StyledWaterBackground />
    <Razor>
      <div className="content"></div>

      <MainContainer>
        <div className="leftContent">
          <h2 style={{ color: "#dc2e22" }}>
            What Are the Dangers of Damaged Water Pipes?
          </h2>
          <p
            style={{
              fontWeight: "900",

              fontFamily: "Neo Sans Bold Italic",
            }}
          >
            Damaged water pipes can be very harmful as they are known to cause
            serious problems. For instance, if an underground water line is
            damaged or if there’s any break in the pipeline, water is released
            from the pipeline at high pressure which can propel debris from the
            pipe as well as surrounding materials.
          </p>
          <p>
            Such damaged water pipes are also capable of harming other
            underground services and infrastructures. They can do so directly or
            by eroding their materials upon washing away. This substantial
            involvement of water in utilities and structures is regarded as very
            harmful and can lead to a dangerous turn of events.
          </p>
          <h3>Do You Want to Locate Buried Water Lines on Your Property?</h3>
          <p>
            If you want to locate underground water pipes on your property or
            job-site, our experienced{" "}
            <Link to="/cable-and-pipe-locating">
              underground cable and pipe locators
            </Link>{" "}
            can help!
          </p>
          <h4>Electromagnetic Method</h4>
          <p>
            The electromagnetic procedure is based on{" "}
            <Link to="/electromagnetic-detection">
              electromagnetic detection
            </Link>{" "}
            of utilities lying underground. It is by far the safest method of
            underground utility location and water line location. The process
            consists of a handful of ground-based operations through which all
            sorts of underground water lines among various other cables and
            lines such as, <Link to="/gas-line-locating">Gas</Link>,{" "}
            <Link to="/sewer-line-locating">Sewer</Link>,{" "}
            <Link to="/power-line-locating">
              Telecommunication & Power cables
            </Link>{" "}
            can be located.
          </p>
          <h3>Underground Water Pipe Locator</h3>
          <p>
            Our experienced cable and pipe locators are well-equipped and
            experienced to provide all sorts of{" "}
            <Link to="underground-utility-locating-services">
              Underground Utility Locating Services
            </Link>
            . If you have any plans of construction or excavation on your
            property, then it is highly recommended you consult our expertise as
            we will be more than happy to help you get the job done without any
            issues. Dial-in now and acquire our services! Our number is{" "}
            <a href="tel:0420346477">0420-346-477</a>.
          </p>
          <p>
            If you have any queries or questions, then feel free to let us know
            via email. Our email address is{" "}
            <a href="mailto:info@expertservicelocating.com.au">
              info@expertservicelocating.com.au
            </a>
            . We also provide you with a free quote. So if you would like to
            find out more then give us a call right away
          </p>
          <Link to="/">Go back to the homepage</Link>
        </div>
        <QuoteForm formWidth="400px" />
      </MainContainer>
    </Razor>
  </Layout>
)

export default WaterPage
