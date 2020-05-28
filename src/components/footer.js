import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledFooter = styled.footer`
  width: 100%;

  background: #000333;
  color: white;
`
const StyledWrapper = styled.div`
  display: flex;
  max-width: 1208px;
  justofy-content: space-around;
  width: 90%;
  margin: 0 auto;
`
const StyledNav = styled.nav`
  display: block;
  margin: 0 auto;
  background: pink;
  padding: 15px;
  ul {
    list-style-type: none;
    margin: 0;
    a {
      text-decoration: none;
      color: white;
      font-family: "Neo Sans Bold Italic";
    }
  }
`
const Footer = () => (
  <StyledFooter>
    <StyledWrapper>
      {/* © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a> */}
      <StyledNav>
        <h3>Menu</h3>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Locating Services</Link>
          </li>
          <li>
            <Link to="/">Locating Methods</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </StyledNav>
      <StyledNav>
        <h3>Services</h3>
        <ul>
          <li>
            <Link to="/">Telecommunications & Power</Link>
          </li>
          <li>
            <Link to="/">Water</Link>
          </li>
          <li>
            <Link to="/">Gas</Link>
          </li>
          <li>
            <Link to="/">Sewer</Link>
          </li>
        </ul>
      </StyledNav>
    </StyledWrapper>
  </StyledFooter>
)

export default Footer
