// Gatsby supports TypeScript natively!
import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MainContainer from "../components/containers/mainContainer"

import Razor from "../components/containers/razorContainer"
import QuoteForm from "../components/quoteForm"

import StyledEdBackground from "../components/backgroundimages/edHero"
import MarkingImage from "../components/gatsbyimages/markingImg"

const ElectroDectPage = () => (
  <Layout>
    <SEO
      title="Electromagnetic Detection Brisbane"
      content="Electromagnetic Detection technology enables us to locate a wide range of traceable utility services buried beneath the ground."
    />
    <StyledEdBackground />
    <Razor>
      <div className="content"></div>

      <MainContainer>
        <div className="leftContent">
          <h2 style={{ color: "#dc2e22" }}>
            What is Electromagnetic Detection?
          </h2>
          <p
            style={{
              fontWeight: "900",

              fontFamily: "Neo Sans Bold Italic",
            }}
          >
            Electromagnetic Detection is by far the safest and most accurate way
            to{" "}
            <Link to="/cable-and-pipe-locating">
              find locatable underground utilities
            </Link>{" "}
            with no damage to your property or the environment.
          </p>
          <p>
            This cutting edge technology enables us to locate a wide range of
            traceable services buried beneath the ground. Electromagnetic
            locators consist of two parts the Transmitter and the Receiver. The
            transmitter emits a frequency selected by one of our underground
            utility location operators. The receiver detects these frequencies,
            and our operator can then accurately locate and mark out the
            location of your underground cables and pipes.
          </p>
          <MarkingImage />
          <h3>State Of The Art Equipment</h3>
          <p>
            Electromagnetic Detection is the most effective and reliable utility
            location technologies available. At Expert Service Locating, we use
            only the best EM locating equipment available as well as other
            technologies that enable us to use a wide range of locating
            frequencies. Because of this, we can trace, identify and mark out
            both easy and hard-to-find underground cables and pipes. These
            include{" "}
            <Link to="/power-line-locating">Telecommunication & Power</Link>,{" "}
            <Link to="/water-pipe-locating">Water Pipes</Link>, Fibre Optic
            cables, Traffic Lights, Street Lights,{" "}
            <Link to="/gas-line-locating">Gas</Link>,{" "}
            <Link to="/gas-line-locating">Sewer</Link> and much more.
          </p>
          <p>
            Whether you are a contractor starting work on a job-site or a
            homeowner wanting to do some DIY on your property, knowing “where”
            and “what” is beneath your ground is crucial. No matter how big or
            small your project is, any time you start digging without this
            knowledge means running the risk of damaging underground utility
            pipes and wires.
          </p>
          <p>
            Before you start any digging or excavating on your project, call one
            of our <Link to="/about">professional cable and pipe locators</Link>
            . Know what’s underground. Dig with confidence.{" "}
          </p>

          <Link to="/">Go back to the homepage</Link>
        </div>
        <QuoteForm formWidth="400px" />
      </MainContainer>
    </Razor>
  </Layout>
)

export default ElectroDectPage
