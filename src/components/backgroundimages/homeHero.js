import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"
import DbydCert from "../gatsbyimages/dbydCert"

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "underground-pipe-locating.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          <div className="container">
            <div className="wrapper">
              <h1>Underground Service Locators Brisbane, Gold Coast</h1>{" "}
              <DbydCert />
              <p>
                Dig with Confidence. Know what's Underground. Our cable, pipe &
                utility locating service is a process in which public and
                private utility mains are identified and marked out. We provide
                this service in South East QLD & <strong>Northern NSW</strong>.
              </p>
              <Link className="red" to="/">
                Call Now
              </Link>
              <Link className="blue" to="/">
                Services
              </Link>
            </div>
          </div>
        </BackgroundImage>
      )
    }}
  />
)

const StyledHomeBackground = styled(BackgroundSection)`
  width: 100%;
  margin-top: 83px;
  height: 500px;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
  position: relative;
  padding: 7% 0;
  a {
    display: inline-block;
    margin: 1.45rem 10px;
    color: white;
    text-decoration: none;

    padding: 15px 25px;
    border-radius: 15px;
  }
  .blue {
    background: #000333;
  }
  .red {
    background: #dc2e22;
  }
  .container {
    color: white;
    top: 0;
    position: absolute;
    margin: 0 auto;
    padding: 14% 0;
    height: 100%;
    background: rgba(0, 3, 51, 0.4);
    width: 100%;

    ${"" /* font-weight: 900; */}
    .wrapper {
      max-width: 1208px;
      padding: 0 1.0875rem;
      margin: 0 auto;
      text-align: center;
      h1 {
        display: inline-block;
      }
      p {
        max-width: 700px;
        margin: auto;
      }
    }
  }
  @media only screen and (min-width: 768px) {
    margin-top: 0px;
    height: 100vh;
  }
`

export default StyledHomeBackground
