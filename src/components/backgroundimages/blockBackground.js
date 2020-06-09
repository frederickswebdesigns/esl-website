import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"
import DbydCert from "../gatsbyimages/dbydCert"

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
          <div className="overlay"></div>
        </BackgroundImage>
      )
    }}
  />
)

const StyledBlockBackground = styled(BackgroundSection)`
  width: 100%;
  margin-top: 122px;
  height: 500px;
  background-position: bottom top;
  background-repeat: repeat-y;
  background-size: cover;
  position: relative;
  border-top: solid 25px #eee;
  .overlay {
    background: rgba(0, 0, 0, 0.2);
    position: absolute;
    width: 100%;
    height: 100%;

    display: flex;
    font-weight: 900;
    flex-direction: column;
    justify-content: center;
    div {
      max-width: 1208px;
      margin: 0 auto;
    }
  }
`

export default StyledBlockBackground
