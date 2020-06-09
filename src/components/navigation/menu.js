import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { motion } from "framer-motion"

const StyledMenu = styled(motion.nav)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgba(0, 0, 0, 0.9);
  height: 100vh;
  width: 100%;
  text-align: right;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;

  a,
  .drop {
    font-family: "Neo Sans Bold Italic";
    font-size: 1.5rem;
    text-transform: uppercase;
    padding: 1.5rem 1rem;
    font-weight: bold;
    cursor: pointer;
    color: #fff;
    text-decoration: none;

    &:hover {
      color: #dc2e22;
    }
  }
  .submenu {
    display: flex;

    flex-direction: column;
    width: 100%;
    a {
      font-size: 0.9rem;
      padding: 10px;
    }
  }
  @media only screen and (min-width: 910px) {
    display: none;
  }
`
const activeStyle = {
  color: "#dc2e22",
}

const Menu = ({ open }) => {
  const [subOpen, setSubOpen] = useState(false)
  const toggleHandler = e => {
    if (subOpen) {
      setSubOpen(!subOpen)
    } else {
      e.preventDefault()
      setSubOpen(!subOpen)
    }
  }
  return (
    <StyledMenu
      transition={{
        type: "spring",

        damping: 20,
      }}
      initial={false}
      animate={{ x: open ? "0" : "100%" }}
    >
      <Link activeStyle={activeStyle} to="/">
        Home
      </Link>

      <Link activeStyle={activeStyle} to="/about">
        About us
      </Link>

      <Link
        onClick={toggleHandler}
        activeStyle={activeStyle}
        to="/underground-utility-locating-services"
      >
        Locating Services &#10132;
      </Link>

      <motion.div
        className="submenu"
        animate={{
          opacity: subOpen ? 1 : 0,
          display: subOpen ? "flex" : "none",
        }}
      >
        <Link
          activeStyle={activeStyle}
          to="/underground-utility-locating-services"
        >
          Underground Utility Locating Services
        </Link>
        <Link activeStyle={activeStyle} to="/cable-and-pipe-locating">
          Cable And Pipe Locating
        </Link>
        <Link activeStyle={activeStyle} to="/electromagnetic-detection">
          Electromagnetic Detection
        </Link>
        <Link activeStyle={activeStyle} to="/underground-utility-mapping">
          Utility Mapping
        </Link>
      </motion.div>

      <Link activeStyle={activeStyle} to="/methods">
        Locating Methods
      </Link>
      <Link activeStyle={activeStyle} to="/contact">
        Contact
      </Link>
    </StyledMenu>
  )
}

export default Menu
