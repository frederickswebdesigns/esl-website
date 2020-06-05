import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "underground-locating-tracer.JPG" }) {
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
              <h1>Underground Locating Methods</h1> <br />
              <Link className="blue go " to="/cable-and-pipe-locating">
                Pipe & Cables
              </Link>
              <a className="red go" href="tel:0420346477">
                Call Now
              </a>
            </div>
          </div>
        </BackgroundImage>
      )
    }}
  />
)

const StyledMethodsBackground = styled(BackgroundSection)`
  width: 100%;
  margin-top: 83px;
  height: 400px;
  background-position: center;
  background-repeat: repeat-y;
  background-size: cover;
  position: relative;

  ${"" /* a {
    display: inline-block;
    margin: 1.45rem 10px;
    color: white;
    text-decoration: none;
    font-family: "Neo Sans Bold Italic", -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol";
    padding: 15px 25px;
    border-radius: 15px;
  } */}
  .blue {
    background: #000333;
    display: inline-block;
    margin: 1.45rem 10px;
  }
  .red {
    background: #dc2e22;
    margin: 1.45rem 10px;
    display: inline-block;
  }
  .blue:hover {
    background: #dc2e22;
  }
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    color: white;
    top: 0;
    position: absolute;
    margin: 0 auto;

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
  @media only screen and (min-width: 910px) {
    margin-top: 0px;
    height: 400px;
  }
`

export default StyledMethodsBackground
