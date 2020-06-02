import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { motion } from "framer-motion"

import UCPLimg from "./gatsbyimages/UCPLimage"
import EDimg from "./gatsbyimages/EDimage"
import UMimg from "./gatsbyimages/UMimage"

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  flex-wrap: wrap;

  a {
    text-decoration: none;
  }

  @media only screen and (min-width: 910px) {
    flex-direction: row;
  }
`
const StyledItem = styled(motion.div)`
  position: relative;

  margin-bottom: 30px;
  background: white;
  color: #000333;
  box-shadow: 10px 10px 0px 0px #eee;
  margin: 1.45rem 20px;
  flex-direction: column;
  .gatsby-image-wrapper {
    width: 100%;
  }
  width: 100%;
  width: 280px;
`
const ReadMore = styled(motion.span)`
  margin: 0;
  position: absolute;
  color: #fff;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  font-family: "Neo Sans Bold Italic";
  font-size: 1.2rem;
  color: white;
  text-align: center;

  padding: 20px;
`
const readMore = {
  rest: {
    background: "rgba(0, 3, 51, 0)",
  },
  hover: {
    background: "rgba(220, 46, 34, 0.5)",
  },
}

const slideUp = {
  rest: {
    y: 0,
    color: "#000333",
  },
  hover: {
    y: -10,
    color: "#dc2e22",
  },
}
const ChildBlock = () => (
  <StyledContainer>
    <Link to="/">
      <StyledItem
        initial="rest"
        whileHover="hover"
        animate="rest"
        variants={slideUp}
      >
        <UCPLimg />

        <ReadMore variants={readMore}>Cable and Pipe locating</ReadMore>
      </StyledItem>
    </Link>
    <Link to="/">
      <StyledItem
        initial="rest"
        whileHover="hover"
        animate="rest"
        variants={slideUp}
      >
        <EDimg />

        <ReadMore variants={readMore}>Electromagnetic Detection</ReadMore>
      </StyledItem>
    </Link>
    <Link to="/">
      <StyledItem
        initial="rest"
        whileHover="hover"
        animate="rest"
        variants={slideUp}
      >
        <UMimg />

        <ReadMore variants={readMore}>Utility Mapping</ReadMore>
      </StyledItem>
    </Link>
  </StyledContainer>
)
export default ChildBlock
