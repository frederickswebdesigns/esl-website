import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import AnimatedSvg from "../animatedSvg"

const NavigationLinks = styled.nav`
  /* hide for mobile */
  display: none;
  transition: all 0.5s;
  width: 100%;
  /* Link Styles */

  /* wrapper for logo and nav items */
  .nav-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1200px;
  }
  /* scrolled styles */
  &.scrolled {
    position: fixed;
    top: 0px;
    z-index: 10000;
    background: #fff;
    box-shadow: 0px 4px 9px -7px rgba(0, 3, 51, 1);
    a {
      color: #000333;
    }
    .submenu ul {
      background: #eee;
    }
  }
  /* not scrolled styles */
  &.notScrolled {
    background: #000333;

    .small-logo {
      display: none !important;
    }
    .submenu ul {
      background: #000333;
    }
    a {
      color: white;
    }
  }
  .link-container {
    display: flex;
    list-style-type: none;
    margin: 0;
  }
  .link-container li {
    padding: 15px;
    margin: 0;
  }
  a {
    /* color: #fff; */
    font-family: "Neo Sans Bold Italic";
    font-size: 14px;

    text-transform: uppercase;
    text-decoration: none;
    transition: all 0.3s;
  }

  a:hover {
    color: #dc2e22;
  }
  .submenu ul {
    list-style-type: none;
    opacity: 0;
    display: block;
    visibility: hidden;
    border-radius: 5px;
    background: #000333;
    position: absolute;
    width: 300px;
    transform: translateY(-10px);
    transition: all 0.2s ease-in-out 0s;
    z-index: 100000;
  }

  .submenu:hover ul {
    opacity: 1;
    visibility: visible;
    transform: translateY(3px);
  }
  .submenu ul li a {
    margin: 0;
    padding-right: 15px;
  }

  /* show on desktop */
  @media only screen and (min-width: 769px) {
    display: block;
  }
`
const activeStyle = {
  color: "#dc2e22",
}

const Nav = () => {
  const [scrollTop, setScrollTop] = useState(0)

  useEffect(() => {
    const onScroll = e => {
      setScrollTop(e.target.documentElement.scrollTop)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [scrollTop])

  return (
    <NavigationLinks className={scrollTop > 122 ? "scrolled" : "notScrolled"}>
      {/* <Logo className="logo" /> */}

      <div className="nav-wrapper">
        {/* <SmallLogo /> */}
        <AnimatedSvg />
        <ul className="link-container">
          <li>
            <Link activeStyle={activeStyle} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link activeStyle={activeStyle} to="/about">
              About Us
            </Link>
          </li>

          <li className="submenu">
            <Link activeStyle={activeStyle} to="/underground-service-locating">
              Underground Services Locating
            </Link>
            <ul>
              <li>
                <Link to="/">Underground Utility Locating Service</Link>
              </li>
              <li>
                <Link to="/">Cabel And Pipe Locating</Link>
              </li>
              <li>
                <Link to="/">Power Utility Locating</Link>
              </li>
              <li>
                <Link to="/">service</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link activeStyle={activeStyle} to="/methods">
              Locating Methods
            </Link>
          </li>
          <li>
            <Link activeStyle={activeStyle} to="/contact">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </NavigationLinks>
  )
}

export default Nav
