import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Razor from "../components/containers/razorContainer"
import DollarIcon from "../images/dollar-icon.svg"
import CheckIcon from "../images/check-icon.svg"
import BullseyeIcon from "../images/bullseye-icon.svg"
import IconContainer from "../components/containers/iconContainer"
import StyledHomeBackground from "../components/backgroundimages/homeHero"
import ImageBlock from "../components/gatsbyimages/imageBlock"
import ServicesBlock from "../components/servicesSection"
import ImageBlockTwo from "../components/gatsbyimages/imageBlock2"
import AssetBlock from "../components/assetSection"
import CertBlock from "../components/certSection"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <StyledHomeBackground />
    <Razor>
      <div className="content">
        <h2 style={{ color: "#dc2e22" }}>
          Professional Underground Utility Locating Service
        </h2>
        <p
          style={{
            color: "",
            fontWeight: "900",

            textAlign: "center",
            fontFamily: "Neo Sans Bold Italic",
          }}
        >
          Expert Service Locating is a Queensland & Northern NSW based
          underground service locating company with over 17 years of trusted
          industry knowledge and experience locating underground assets.
        </p>

        <p>
          At Expert Service Locating we offer an array of underground location
          services while using the latest underground locating technologies. We
          are fully accredited Telstra, Optus and Dial Before You Dig
          underground service locators. And with over 17 years of experience
          locating and marking your underground cables and pipes, you can trust
          you are in good hands. Dig With Confidence. Call us today!
        </p>
      </div>
    </Razor>
    {/* <StyledBlockBackground /> */}
    <ImageBlock />
    <Razor>
      <IconContainer>
        <h2>Underground Utility Locators</h2>
        <p
          style={{
            fontWeight: "900",
            textAlign: "center",
            fontFamily: "Neo Sans Bold Italic",
          }}
        >
          Stop! Don’t damage a service or worse, we’ll locate it first!
        </p>
        <div className="iconWrapper">
          <div>
            <img src={CheckIcon} alt="Checkmark icon" />
            <h3>Expert Locators</h3>

            <p>
              We have been providing the highest quality underground service
              location, both domestically and globally for nearly two decades.
              With our knowledge of the underground infrastructures and our use
              of cutting edge technologies, we are your go-to “Experts” for
              locating all of your underground utility services Brisbane, Gold
              Coast and Northern NSW.
            </p>
          </div>
          <div>
            <img src={BullseyeIcon} alt="Bullseye icon" />
            <h3>Accurate Locations</h3>
            <p>
              By using multiple state-of-the-art electromagnetic underground
              service location technologies, we provide you with the most
              accurate location of your underground services possible within the
              permitters of radio detection equipment. So you can be at ease
              knowing you are doing your duty of care by minimising the risk of
              damages to your underground utility services.
            </p>
          </div>
          <div>
            <img src={DollarIcon} alt="Dollar sign logo" />
            <h3>Project Savings</h3>
            <p>
              Gambling with the location of your underground services is never a
              good idea. Accidentally hitting an underground service line due to
              negligence can not only be extremely costly and timely, but it
              also puts you and your team at risk for injury. Our team of fully
              certified underground service locators will help minimise your
              risk and get the job done promptly and accurately.
            </p>
          </div>
        </div>
      </IconContainer>
    </Razor>
    <ImageBlockTwo />
    <Razor>
      <div className="content">
        <h2 style={{ color: "#dc2e22" }}>Our Locating Services</h2>
        <p
          style={{
            fontWeight: "900",
            textAlign: "center",
            fontFamily: "Neo Sans Bold Italic",
          }}
        >
          Helping you Reduce Damage, Save Money and Improve Safety by locating
          your underground utility services before you dig.
          <br /> Because after all, its what’s underneath that matters most!
        </p>
        <ServicesBlock />
      </div>
    </Razor>
    <AssetBlock />
    <CertBlock />
  </Layout>
)

export default IndexPage
