// Gatsby supports TypeScript natively!
import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MainContainer from "../components/containers/mainContainer"
import StyledAboutBackground from "../components/backgroundimages/aboutHero"
import Razor from "../components/containers/razorContainer"
import QuoteForm from "../components/quoteForm"
import DbydCert from "../components/gatsbyimages/dbydCert"
import TelstraCert from "../components/gatsbyimages/telstraCert"
import TechnicianImage from "../components/gatsbyimages/technicianImage"
const AboutPage = () => (
  <Layout>
    <SEO
      title="About Us"
      content="Expert Service Locating is a commercial and residential underground utility locating company servicing Brisbane, Gold Coast & Northern Rivers. Dig with confidence."
    />
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
            the intricacies of every process and provide{" "}
            <Link to="/underground-utility-locating-services">
              professional utility locating services
            </Link>
            , delivering results combined with quality work and value.
          </p>
          <p>
            We strive to be the best in the utility location industry. That is
            why we use state-of-the-art technologies that enable us to use
            different frequencies to find your{" "}
            <Link to="/cable-and-pipe-locating">Cable and Pipe location</Link>,{" "}
            <Link to="/power-line-locating">Power Line location</Link>,{" "}
            <Link to="/gas-line-locating">Gas Line location</Link>, as well as{" "}
            <Link to="/sewer-line-locating">Sewer</Link> and{" "}
            <Link to="/water-pipe-locating">Water Line location</Link>.
          </p>
          <TechnicianImage />
          <h3>17 Years Finding Underground Utilities </h3>

          <p>
            With over 17 years of experience in the underground service locating
            industry, we have proudly established a long list of returning
            satisfied customers. And with having worked globally for various
            Aerospace, Military, Government Departments, Hospitals, and Private
            Residences, we stand firmly as one of Australia’s leading
            underground service location companies.
          </p>

          <p>
            {" "}
            Our clientele stretches from Northern NSW to Brisbane QLD and
            beyond, servicing some of the biggest companies of Australia. With
            our accurate asset location in combination with our affordable cable
            and pipe location services, we are the top choice for some of the
            biggest construction contractors throughout Australia.
          </p>
          <h3>Underground Service Locators Brisbane and Northern Rivers</h3>
          <p>
            Throughout nearly two decades in the cable and pipe location
            industry, we have acquired unmatched underground infrastructure
            knowledge and developed quality underground utility locating skills
            and expertise. This industry experience has enabled us to use some
            of the most advanced equipment and techniques that help us provide a
            wide variety of utility location and underground services across
            Brisbane and Northern Rivers.
          </p>
          <h3>Industry Reputation</h3>
          <p>
            At Expert Service Locating we are recognised for delivering the best
            possible outcomes for all underground utility locating services. The
            size of your project does not matter. We can tackle all situations
            regardless of the complexity. Our experienced team of utility
            locators will take care of all your underground assets location
            projects.
          </p>
          <DbydCert />
          <TelstraCert />
          <p>
            Our technicians are equipped with both traditional and modern
            methods of underground utility locating techniques and technologies.
            Our team of underground cable and pipes locators are fully insured,
            certified and nationally recognised by Telstra and DBYD. So if you
            want to get your job done by an experienced underground service
            locating professional, contact us today!
          </p>
          <p>
            Don’t waste any time, acquire our services now! Give us a call at{" "}
            <a href="tel:0420346477">0420-346-477</a> to find out more.
          </p>
          <Link to="/">Go back to the homepage</Link>
        </div>
        <QuoteForm />
      </MainContainer>
    </Razor>
  </Layout>
)

export default AboutPage
