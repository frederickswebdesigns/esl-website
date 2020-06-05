// Gatsby supports TypeScript natively!
import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MainContainer from "../components/containers/mainContainer"

import Razor from "../components/containers/razorContainer"
import QuoteForm from "../components/quoteForm"

import StyledSewerBackground from "../components/backgroundimages/sewerHero"
import SewerMarkingImage from "../components/gatsbyimages/sewerMarkingImg"
import SewerEquipmentImage from "../components/gatsbyimages/sewerEquipImg"

const SewerPage = () => (
  <Layout>
    <SEO title="Page two" />
    <StyledSewerBackground />
    <Razor>
      <div className="content"></div>

      <MainContainer>
        <div className="leftContent">
          <h2 style={{ color: "#dc2e22" }}>
            Why Is a Sewer Pipe Locator Required?
          </h2>
          <p
            style={{
              fontWeight: "900",

              fontFamily: "Neo Sans Bold Italic",
            }}
          >
            You should have sewer pipes located whenever you are looking to add
            a new bedroom or bath to your home. These lines, whether they are
            public or private, are very difficult to locate.
          </p>

          <p>
            These buried sewer lines lay beneath the ground, so if you try
            locating them on your own, you might very well have to dig up your
            entire yard in the process.
          </p>
          <p>
            The main danger that these underground sewer lines are capable of
            causing is contamination, disease from being exposed to sewage and
            damage to the environment. Sewer lines are also capable of getting
            pumped under pressure, causing hazards to water lines as a result.
            Furthermore, toxic and explosive gases are also present in these
            lines.{" "}
          </p>
          <SewerMarkingImage />
          <p>
            If you want to locate underground sewer pipes on your property, then
            there is only one service you should be calling, and that is Expert
            Service Locating! For more information, contact us now at
            0420-346-477.
          </p>
          <h3>High-Tech Sewer Line Locating Equipment</h3>
          <p>
            The process of locating sewer lines underground requires{" "}
            <Link to="/electromagnetic-detection">
              state-of-the-art equipment
            </Link>{" "}
            and complex procedures which are only recommended if carried out by
            professionals.
          </p>
          <SewerEquipmentImage />
          <p>
            We at Expert Service Locating are experts in the field of sewer line
            locating. Sewer pipe location is done by specialized tools that help
            out in locating non-metallic lines at up to 13 feet underground
            (roughly 4 metres).
          </p>
          <h3>Call Us Before You Dig!</h3>
          <p>
            If you are looking to do any building or digging on your property,
            then you should call us before you start your project. We will help
            you by making sure you don’t tamper with any underground sewer,{" "}
            <Link to="water-pipe-locating">water</Link>,{" "}
            <Link to="gas-line-locating">gas</Link> or{" "}
            <Link to="power-line-locating">
              power and telecommunication lines
            </Link>{" "}
            during your work so that you can avoid unnecessary risks.
          </p>
          <p>
            If you don’t pay serious attention to this matter, then you may well
            be prone to facing hazardous situations ahead.
          </p>
          <p>
            A task as dangerous as sewer line locating shouldn’t be carried out
            by amateurs or non-professionals. Therefore, it is of utmost
            importance that you leave the entire procedure up to us as we have
            trained specialists who know the ins and outs of the entire process
            and are capable of doing a fantastic job. So please don’t wait any
            longer and contact us now at{" "}
            <a href="tel:0420346477">0420-346-477</a>.
          </p>
          <Link to="/">Go back to the homepage</Link>
        </div>
        <QuoteForm formWidth="400px" />
      </MainContainer>
    </Razor>
  </Layout>
)

export default SewerPage
