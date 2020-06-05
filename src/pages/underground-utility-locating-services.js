// Gatsby supports TypeScript natively!
import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MainContainer from "../components/containers/mainContainer"

import Razor from "../components/containers/razorContainer"
import QuoteForm from "../components/quoteForm"

import StyledUULSBackground from "../components/backgroundimages/uulsHero"
import ChildBlock from "../components/childServices"
import PageContainer from "../components/containers/pageContainer"
const UULSPage = () => (
  <Layout>
    <SEO title="Page two" />
    <StyledUULSBackground />
    <Razor>
      <div className="content"></div>

      <PageContainer>
        <div className="leftContent">
          <h2 style={{ color: "#dc2e22" }}>
            What is Underground Utility Locating?
          </h2>
          <p>
            Underground utility locating is a process in which both public and
            private underground utility mains are identified and marked out
            prior to any digging.
          </p>
          <p>
            Since various sorts of{" "}
            <Link to="/cable-and-pipe-locating">
              underground cables and pipes
            </Link>{" "}
            are manufactured using a wide variety of materials, high-tech and
            advanced methods are required for the detection and location of
            these underground utilities.
          </p>
          <p>
            Because most utility maps lack the necessary precision needed to
            ensure precise clearance, having your utilities located by a
            professional cable and pipe locator is crucial. Due to outdated and
            inaccurate maps, this is especially true for older cities.
          </p>
          <p>
            If you are looking for a solution to your underground utility
            location problems, then wait no further and act now by contacting us
            at <a href="tel:0420346477">0420-346-477.</a>
          </p>
          <h3>Our Range of Services</h3>
          <ChildBlock />
          <p>
            We are Telstra accredited, DBYD certified, fully insured, and have
            extensive knowledge of the country’s underground infrastructure. Our
            highly experienced staff carry out each underground location service
            with the highest standard of professionalism and use only the best
            methods and state-of-the-art underground location equipment
            available. Reputation speaks for itself as we have been in the
            underground utility locating industry for over 17 years. No matter
            how big or small, we can provide you with the underground cable and
            pipe location services necessary to make your next project a
            success.{" "}
          </p>
          <h3>We Offer Underground Utility Locating Solutions</h3>
          <p>
            Expert Service Locating is Australia’s leading specialist in all
            divisions of underground utility location and service locating. We
            offer the most comprehensive and accurate underground asset location
            possible, making us a household name in the industry and one of the
            top cable and pipe locating companies in the country.
          </p>
          <p>
            Knowing about all the underground utilities and their location on
            your property is essential and should always be the first step you
            take before doing any heavy tasks such as drilling, grading, digging
            or building design. This knowledge will provide you with the
            confidence needed to carry out your tasks and help minimize the risk
            of damage, injury and unnecessary repair costs. We provide the
            knowledge of what is underground, so can you dig with confidence!
          </p>

          <h3>Contact Us Now!</h3>
          <p>
            So dial in now to acquire our services! You can also ask us for a
            free quote on the following number{" "}
            <a href="tel:0420346477">0420-346-477</a>. Further queries can be
            directed to our email address which is{" "}
            <a href="mailto:info@expertservicelocating.com.au">
              info@expertservicelocating.com.au
            </a>
          </p>

          <QuoteForm />
        </div>
      </PageContainer>
    </Razor>
  </Layout>
)

export default UULSPage
