import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"

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
              <p>
                Need to know the location of your underground assets? We provide
                underground cable and pipe location services throughout
                Brisbane, Gold Coast and Northern NSW. Know what’s underground.
                Dig with confidence.
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
  height: 100vh;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
  position: relative;
  padding: 14% 0;
  a {
    display: inline-block;
    margin: 1.45rem 10px;
    color: white;
    text-decoration: none;
    font-family: "Neo Sans Bold Italic", -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol";
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
    padding: 18% 0;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
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
