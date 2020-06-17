// Gatsby supports TypeScript natively!
import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MainContainer from "../components/containers/mainContainer"

import Razor from "../components/containers/razorContainer"
import QuoteForm from "../components/quoteForm"

import DbydCert from "../components/gatsbyimages/dbydCert"
import TelstraCert from "../components/gatsbyimages/telstraCert"
import StyledMethodsBackground from "../components/backgroundimages/methodsHero"

const MethodPage = () => (
  <Layout>
    <SEO title="Service Locating Methods" />
    <StyledMethodsBackground />
    <Razor>
      <MainContainer>
        <div className="leftContent">
          <h2 style={{ color: "#dc2e22" }}>Service Locating Methods</h2>
          <p
            style={{
              fontWeight: "900",

              fontFamily: "Neo Sans Bold Italic",
            }}
          >
            Not too long ago, companies had to dig at several locations to
            identify whether or not any underground utilities, such as{" "}
            <Link to="/gas-line-locating">gas pipes</Link>,{" "}
            <Link to="/water-pipe-locating">water pipes</Link>,{" "}
            <Link to="/sewer-line-locating">sewer lines</Link>, and other{" "}
            <Link to="/cable-and-pipe-locating">pipes and cables</Link> were
            present on their properties.
          </p>
          <p>
            Because of this, countless hours were wasted, and the property
            suffered unnecessary damage. Nowadays, the old school techniques and
            outdated methods of underground utility locating are a thing of the
            past.
          </p>
          <p>
            We use the latest methods and cutting edge technologies on all of
            our Underground Utility Locating Services. These new underground
            asset location systems provide quicker solutions and better
            accuracy, all of which play a significant role in helping you avoid
            potential problems.
          </p>
          <h3>Top of the Line Utility Locating Services</h3>
          <p>
            Our underground utility locating is carried out using{" "}
            <Link to="/electromagnetic-detection">
              electromagnetic location technology
            </Link>
            . Firstly, we scan the specified area with various frequencies. This
            process helps us identify the types and placements of these
            underground utilities, which is necessary if any damage to them is
            to be avoided.
          </p>
          <p>
            Electromagnetic detection of underground services is the most
            accurate way to locate underground cable and pipes. The process
            revolves around several ground-based functions which are capable of
            detecting gas, cable, water, power and telecommunication lines.
          </p>
          <h3>State of the Art Equipment</h3>
          <p>
            Our high-tech and modern machinery enable us to locate all traceable
            services underground with confidence. We utilise multiple
            technologies and in-house tools that give us the most accurate
            results possible, making us the best at what we do and. Our methods
            are tried, trusted and proven.
          </p>
          <h3>Fully Qualified Personnel</h3>
          <p>
            Our team is highly qualified, well-versed and equipped with all the
            knowledge on underground service & utility locating. With our
            dedicated and hard-working staff, we have been hugely successful
            throughout our 17+ years in service, with a long list of satisfied
            and returning customers.
          </p>
          <h3>Certified and Insured</h3>
          <DbydCert /> <TelstraCert />
          <p>
            Our underground service locators are Telstra accredited, DBYD
            certified and fully insured. The results and reliability of our
            services go unquestioned. And we assure you, you won’t find a more
            diligent and experienced underground utility locator throughout,
            Brisbane, Gold Coast and Northern NSW.
          </p>
          <p>
            For all of your underground utility locating projects, Expert
            Service Locating is your number one source. Contact us now at{" "}
            <Link to="tel:0420346477">0420-346-477</Link> and acquire our
            services!
          </p>
          <Link to="/">Go back to the homepage</Link>
        </div>
        <QuoteForm formWidth="400px" />
      </MainContainer>
    </Razor>
  </Layout>
)

export default MethodPage
