import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "underground-service-locator.jpg" }) {
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
          <div></div>
        </BackgroundImage>
      )
    }}
  />
)

const StyledBlockBackground = styled(BackgroundSection)`
  width: 100%;
  margin-top: 83px;
  height: 500px;
  background-position: bottom top;
  background-repeat: repeat-y;
  background-size: cover;
  position: relative;

  div {
    background: rgba(0, 3, 51, 0.4);
    position: absolute;
    width: 100%;
    height: 100%;
  }
`

export default StyledBlockBackground
