import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
const StyledButton = styled(motion.button)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #000333;
  width: 100%;
  color: white;
  font-family: "Neo Sans Bold Italic";
  padding: 1rem;
  text-align: left;
  border: none;
  cursor: pointer;
  outline: none;

  &:hover {
    background: #dc2e22;
  }
`
const StyledContent = styled(motion.div)`
  display: block;
  background: #eee;
  border-bottom: 5px solid white;
  box-shadow: inset 0px 0px 14px -8px rgba(0, 0, 0, 0.47);
  overflow: hidden;
  p {
    padding: 1rem;
  }
`

const Accordion = props => {
  const [dropdown, setDropdown] = useState(false)
  const toggleDropdown = () => {
    setDropdown(!dropdown)
  }
  return (
    <>
      <StyledButton
        onClick={toggleDropdown}
        style={{ background: dropdown ? "#dc2e22" : "#000333" }}
      >
        {props.title}{" "}
        <FontAwesomeIcon
          style={{
            display: "block",
            transform: dropdown ? "rotate(134deg)" : "rotate(0deg)",
            transition: "all 0.2s",
          }}
          icon={faPlus}
        />
      </StyledButton>
      <StyledContent
        animate={dropdown ? "open" : "closed"}
        variants={{
          open: {
            height: "auto",
          },
          closed: {
            height: "0px",
          },
        }}
      >
        <p>
          {props.content} <Link to={`/${props.link}`}>Read More</Link>
        </p>
      </StyledContent>
    </>
  )
}
export default Accordion
