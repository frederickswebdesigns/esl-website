import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { motion } from "framer-motion"

const StyledMenu = styled(motion.nav)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
  height: 100vh;
  width: 100%;
  text-align: right;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  ${"" /* transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")}; */}
  ${"" /* transition: transform 0.3s ease-in-out; */}

  a {
    font-family: "Neo Sans Bold Italic";
    font-size: 1.5rem;
    text-transform: uppercase;
    padding: 1.5rem 1rem;
    font-weight: bold;
    cursor: pointer;
    color: #fff;
    text-decoration: none;
    ${"" /* transition: color 0.3s linear; */}

    &:hover {
      color: #dc2e22;
    }
  }
  .submenu {
    display: flex;
    flex-direction: column;
    width: 100%;
    a {
      font-size: 14px;
      padding: 10px;
    }
  }
  @media only screen and (min-width: 768px) {
    display: none;
  }
`
const activeStyle = {
  color: "#dc2e22",
}

const Menu = ({ open }) => {
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
      <Link activeStyle={activeStyle} to="/underground-locating-services">
        Underground Locating Services
      </Link>
      {/* <div className="submenu">
        <Link activeStyle={activeStyle} to="/underground-locating-services">
          Underground Utility Locating Service
        </Link>
        <Link
          activeStyle={activeStyle}
          to="/underground-locating-services/water-pipe"
        >
          Cable And Pipe Locating
        </Link>
        <Link activeStyle={activeStyle} to="/underground-locating-services">
          Power Line Locating
        </Link>
        <Link activeStyle={activeStyle} to="/underground-locating-services">
          Water Locating Services
        </Link>
        <Link activeStyle={activeStyle} to="/underground-locating-services">
          Water Locating Services
        </Link>
        <Link activeStyle={activeStyle} to="/underground-locating-services">
          Water Locating Services
        </Link>
        <Link activeStyle={activeStyle} to="/underground-locating-services">
          Water Locating Services
        </Link>
        <Link activeStyle={activeStyle} to="/underground-locating-services">
          Water Locating Services
        </Link>
      </div> */}

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
