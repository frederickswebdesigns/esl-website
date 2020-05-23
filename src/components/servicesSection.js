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
  justify-content: space-around;
  margin: 0 auto;
  max-width: 1208px;
  width: 90%;
`
const StyledItem = styled(motion.div)`
  display: flex;
  margin: 0px 20px 30px;
  background: #000333;
  color: white;
  box-shadow: 10px 10px 0px 0px #eee;

  flex-direction: column;
  p {
    text-align: left;
  }
  div {
    width: 100%;
    padding: 1.45rem;
  }
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    height: 350px;
    p {
      display: block;
    }
  }
`
const ServicesBlock = () => (
  <StyledContainer>
    <StyledItem
      whileHover={{ x: -50, opacity: 0.5 }}
      whileTap={{ x: -50, opacity: 0.5 }}
    >
      <UULSimg />

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
    <StyledItem
      whileHover={{ x: 50, opacity: 0.5 }}
      whileTap={{ x: 50, opacity: 0.5 }}
    >
      <UCPLimg />
      <div>
        <h3>Underground Cable and Pipe locating</h3>
        <p>
          For many projects, knowing the location of your underground cables and
          pipes is crucial at the beginning stages of early planning and
          preparation. By knowing where your underground cables and pipes are,
          you are able to know where to place landscaping, foundations, supports
          and structures appropriately. At Expert Service Locating, we help make
          your project planning easy and straightforward by promptly locating
          your underground assets.
        </p>
      </div>
    </StyledItem>
    <StyledItem
      whileHover={{ x: -50, opacity: 0.5 }}
      whileTap={{ x: -50, opacity: 0.5 }}
    >
      <EDimg />
      <div>
        <h3>Electromagnetic Detection</h3>
        <p>
          Unlike outdated methods and technologies used in the past, we use
          state-of-the-art electromagnetic underground service location
          technologies. These new-age tools allow us to adjust radio frequencies
          accordingly to find a wide range of traceable underground assets.
          Meaning, we can tell you what kind of cable or pipe it is, the
          location and provide you with a depth estimation. Our goal is to help
          you reduce risk and avoid damage to your next project.
        </p>
      </div>
    </StyledItem>
    <StyledItem
      whileHover={{ x: 50, opacity: 0.5 }}
      whileTap={{ x: 50, opacity: 0.5 }}
    >
      <UMimg />
      <div>
        <h3>Utility Mapping</h3>
        <p>
          Knowing your underground infrastructure can mean getting your project
          done on time and on budget. That's why at Expert Service Locating we
          offer a range of locating services, including underground utility
          mapping. By using the latest measuring and mapping tools, we can
          provide you with the most accurate map of your underground services
          possible. Take the guesswork out of your next project and start
          digging with confidence.
        </p>
      </div>
    </StyledItem>
    {/* <StyledItem>
      <UULSimg />

      <h3>Underground Utility Locating Services</h3>
      <p>
        It is the unknown that presents the highest risk to your project or
        job-site. Our underground service locators understand this. That is why
        we locate and mark out all your underground service utilities promptly
        and accurately. By using different technologies and frequencies, we can
        locate different types of underground utility services and provide you
        with a depth reading estimation. Stop guessing and start knowing where
        your underground services are.
      </p>
    </StyledItem>{" "}
    <StyledItem>
      <UULSimg />

      <h3>Underground Utility Locating Services</h3>
      <p>
        It is the unknown that presents the highest risk to your project or
        job-site. Our underground service locators understand this. That is why
        we locate and mark out all your underground service utilities promptly
        and accurately. By using different technologies and frequencies, we can
        locate different types of underground utility services and provide you
        with a depth reading estimation. Stop guessing and start knowing where
        your underground services are.
      </p>
    </StyledItem>{" "}
    <StyledItem>
      <UULSimg />

      <h3>Underground Utility Locating Services</h3>
      <p>
        It is the unknown that presents the highest risk to your project or
        job-site. Our underground service locators understand this. That is why
        we locate and mark out all your underground service utilities promptly
        and accurately. By using different technologies and frequencies, we can
        locate different types of underground utility services and provide you
        with a depth reading estimation. Stop guessing and start knowing where
        your underground services are.
      </p>
    </StyledItem> */}
  </StyledContainer>
)
export default ServicesBlock
