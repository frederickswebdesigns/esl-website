import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import UULSimg from "./gatsbyimages/UULSimage"
import UCPLimg from "./gatsbyimages/UCPLimage"
import EDimg from "./gatsbyimages/EDimage"
import UMimg from "./gatsbyimages/UMimage"

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 1208px;
  width: 90%;
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
  display: flex;
  min-height: 500px;
  background: white;
  color: #000333;
  box-shadow: 10px 10px 0px 0px #eee;
  margin: 1.45rem 20px;
  flex-direction: column;
  p {
    text-align: left;
  }
  div {
    width: 100%;
    padding: 1.45rem;
  }
  @media only screen and (min-width: 910px) {
    width: 500px;

    p {
      display: block;
    }
  }
`
const ReadMore = styled(motion.span)`
  margin: 0;
  position: absolute;
  color: #fff;

  font-family: "Neo Sans Bold Italic";
  font-size: 1.2rem;
  color: white;
  text-align: center;
  border-bottom-right-radius: 10px;
  padding: 20px;
`
const readMore = {
  rest: {
    background: "rgb(0, 3, 51)",
  },
  hover: {
    background: "rgb(220, 46, 34)",
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
const ServicesBlock = () => (
  <StyledContainer>
    <Link to="/underground-utility-locating-services">
      <StyledItem
        initial="rest"
        whileHover="hover"
        animate="rest"
        variants={slideUp}
      >
        <UULSimg />
        <ReadMore variants={readMore}>Read More</ReadMore>
        <div>
          <h3>Underground Utility Locating Services</h3>
          <p>
            It is the unknown that presents the highest risk to your project or
            job-site. Our underground service locators understand this. That is
            why we locate and mark out all your underground service utilities
            promptly and accurately. By using different technologies and
            frequencies, we can locate different types of underground utility
            services and provide you with a depth reading estimation. Stop
            guessing and start knowing where your underground services are.
          </p>
        </div>
      </StyledItem>
    </Link>
    <Link to="/">
      <StyledItem
        initial="rest"
        whileHover="hover"
        animate="rest"
        variants={slideUp}
      >
        <UCPLimg />
        <ReadMore variants={readMore}>Read More</ReadMore>
        <div>
          <h3>Underground Cable and Pipe locating</h3>
          <p>
            For many projects, knowing the location of your underground cables
            and pipes is crucial at the beginning stages of early planning and
            preparation. By knowing where your underground cables and pipes are,
            you are able to know where to place landscaping, foundations,
            supports and structures appropriately. At Expert Service Locating,
            we help make your project planning easy and straightforward by
            promptly locating your underground assets.
          </p>
        </div>
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
        <ReadMore variants={readMore}>Read More</ReadMore>
        <div>
          <h3>Electromagnetic Detection</h3>
          <p>
            Unlike outdated methods and technologies used in the past, we use
            state-of-the-art electromagnetic underground service location
            technologies. These new-age tools allow us to adjust radio
            frequencies accordingly to find a wide range of traceable
            underground assets. Meaning, we can tell you what kind of cable or
            pipe it is, the location and provide you with a depth estimation.
            Our goal is to help you reduce risk and avoid damage to your next
            project.
          </p>
        </div>
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
        <ReadMore variants={readMore}>Read More</ReadMore>

        <div>
          <h3>Utility Mapping</h3>
          <p>
            Knowing your underground infrastructure can mean getting your
            project done on time and on budget. That's why at Expert Service
            Locating we offer a range of locating services, including
            underground utility mapping. By using the latest measuring and
            mapping tools, we can provide you with the most accurate map of your
            underground services possible. Take the guesswork out of your next
            project and start digging with confidence.
          </p>
        </div>
      </StyledItem>
    </Link>
  </StyledContainer>
)
export default ServicesBlock
