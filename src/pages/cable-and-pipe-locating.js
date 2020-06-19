// Gatsby supports TypeScript natively!
import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MainContainer from "../components/containers/mainContainer"

import Razor from "../components/containers/razorContainer"
import QuoteForm from "../components/quoteForm"

import StyledCpBackground from "../components/backgroundimages/ucplHero"
import PowerCablesImage from "../components/gatsbyimages/powerCablesImg"
import Accordion from "../components/accordion"

const CablePipePage = () => (
  <Layout>
    <SEO
      title="Underground Cable & Pipe Locating"
      content="Our certified underground cable and pipe locators offer utility mapping to Brisbane, Gold Coast, and Northern NSW. Know what underground. Dig with confidence."
    />
    <StyledCpBackground />
    <Razor>
      <div className="content"></div>

      <MainContainer>
        <div className="leftContent">
          <h2 style={{ color: "#dc2e22" }}>What is Cable and Pipe Locating?</h2>
          <p
            style={{
              fontWeight: "900",

              fontFamily: "Neo Sans Bold Italic",
            }}
          >
            The task of underground cable and pipe locating revolves around
            searching for any utility lines that may be present underneath the
            Earth but still unknown to everyone else
          </p>
          <p>
            These mains may include{" "}
            <Link to="/water-pipe-locating">water pipes</Link>,{" "}
            <Link to="/gas-line-locating">gas lines</Link>,{" "}
            <Link to="/power-line-locating">
              power & telecommunications cables
            </Link>
            , <Link to="/sewer-line-locating">sewer pipes, storm drains</Link>{" "}
            and much more. Since metal pipes, buried cable lines and pipe lines
            are all made using various kinds of materials, it is necessary to be
            well-equipped with the right tools and instruments to carry out the
            process of locating cable lines underground.
          </p>
          <PowerCablesImage />
          <p>
            The process of underground cable and pipe locating revolves around a
            transmitter which connects and conducts a signal current through the
            cable and pipe electrically. The whole procedure consists of{" "}
            <Link to="/electromagnetic-detection">
              sending signals into the ground and locating utilities upon the
              return of these signals back to the transmitter
            </Link>
            . The wetness of soil doesn’t necessarily play a major role in this
            process as compared to the GPR procedure. In fact, wet soil enhances
            the signals of electromagnetic locating equipment and makes the
            locating process easier.
          </p>
          <Accordion
            title="Telecom & Power Underground locating"
            content="Damaging a Power Line or Telecommunications cable can leave nearby residence without access to power, internet, cell phones, and landlines. Meaning they lose the ability to contact emergency services. This situation is a complete disaster. And the cost to repair one of these underground service cables can be astronomical not to mention the risk of injury to nearby persons. For this reason, our underground service locators have developed the essential skills and procedures through years of experience so you can dig with confidence."
            link="power-line-locating"
          />
          <Accordion
            title="Underground Water Pipe Locating"
            content="Accidentally hitting an underground water pipe can be a complete disaster. Once hit, the force from the water pressure can cause it to shoot in many different directions, taking with it loose debris, putting those nearby at risk. Calling a certified underground service locator before you dig is the best way to avoid these unnecessary damages and costs. At Expert Service Locating we do our job so you can so yours can be safer."
            link="water-pipe-locating"
          />
          <Accordion
            title="Underground Gas Line Locating"
            content="Hitting an underground utility line can be very costly and inconvenient. But if one of these lines is an underground gas pipe, there can be many risks involved. Due to the leaking of gases, damaging this underground service pipe can lead to fires and explosions, making it extremely dangerous for everyone in or around the damaged pipe area. For this reason, Expert Service Locate has the equipment, and the qualified underground service locators necessary to help you avoid these dangerous situations."
            link="gas-line-locating"
          />
          <Accordion
            title="Underground Sewer Line Locating"
            content="Damaging an underground sewer line on your job site or property exposes you to a bunch of hazards and time-consuming problems. Hitting a sewer line can propel debris, contaminate water supplies and damage the environment. Worst of all, leaking sewage can be hazardous to nearby people due to the harmful and toxic gases and waste. We at Expert Service Locate have specialized underground service locating equipment and ironclad experience to help you avoid these unnecessary issues."
            link="sewer-line-locating"
          />
          <h3 style={{ marginTop: "2rem" }}>Underground Cable Locator</h3>
          <p>
            We are among Australia’s pioneers of utility cable and pipe
            locators. We have specialists that know how to handle all sorts of
            underground cable and pipe location tasks. This is due to their
            experience and hardworking mentality. Furthermore, we offer
            state-of-the-art equipment in such processes, including
            electromagnetic equipment that makes the task even easier and
            efficient. With 17 years of experience in the underground asset
            location industry, we rank among the country’s{" "}
            <Link to="/about">leading cable and pipe locating companies</Link>{" "}
            with an unparalleled service quality.
          </p>

          <Link to="/">Go back to the homepage</Link>
        </div>
        <QuoteForm formWidth="400px" />
      </MainContainer>
    </Razor>
  </Layout>
)

export default CablePipePage
