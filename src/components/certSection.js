import React from "react"
import styled from "styled-components"
import ImageBlockCert from "./gatsbyimages/certImageBlock"
import DbydCert from "./gatsbyimages/dbydCert"
import TelstraCert from "./gatsbyimages/telstraCert"

const StyledCertContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  .certimage {
    display: none;
  }
  div {
    height: 100%;
    flex: 50%;
    .content {
      max-width: 80%;
      margin: 50px auto;
      .gatsby-image-wrapper {
        margin: 1rem;
      }
    }
  }
  @media only screen and (min-width: 768px) {
    .certimage {
      display: block;
    }
    div {
      .content {
        max-width: 450px;
        width: 90%;
        margin: 50px auto;
        .gatsby-image-wrapper {
          margin: 1rem;
        }
      }
    }
  }
`

const CertBlock = () => (
  <StyledCertContainer>
    <ImageBlockCert style={{ display: "none" }} />
    <div>
      <div className="content">
        <DbydCert />
        <TelstraCert />
        <h2>Fully Certified Underground Utility Locating </h2>
        <p>
          Are you digging in the dark? STOP! Not knowing the location of your
          underground utility services means running the risk of hitting
          underground cables and pipes. Not only can this be very costly and
          time-consuming if you accidentally cut or damage one of these
          underground lines but, it can also be extremely dangerous.
        </p>
        <p>
          Knowing the location of underground service utilities on your job-site
          or property is the first step to take before any digging, drilling,
          grading and design-build. Identifying where your underground utility
          services are located, means completing your project, on time and on
          budget by successfully preventing Injury, Underground Cable and Pipe
          Damage and High Repair Costs.
        </p>
        <h3>Your Trusted QLD Underground Service Locating Company</h3>
        <p>
          Our team of professionals are Dial Before You Dig certified and
          Telstra accredited underground service locators. With years of
          experience accurately locating in the most complex conditions, we can
          handle any job, big or small. We have worked for various industries
          such as Aerospace, Military, Government Departments, Hospitals and
          globally recognized companies. Our extensive training and experience
          allow us to use the most advanced techniques and technologies to
          provide you with the best and safest underground service location
          possible!{" "}
        </p>
        <h3>
          South East Queensland, Brisbane, Gold Coast and Northern New South
          Wales.
        </h3>
        <p>
          Servicing all of Brisbane, Gold Coast and Northern New South Wales.{" "}
        </p>
      </div>
    </div>
  </StyledCertContainer>
)

export default CertBlock
