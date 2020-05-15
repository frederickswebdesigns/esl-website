import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #dc2e22;
  height: 100vh;
  width: 100%;
  text-align: right;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;

  a {
    font-family: "Neo Sans Bold Italic";
    font-size: 1.5rem;
    text-transform: uppercase;
    padding: 1.5rem 1rem;
    font-weight: bold;

    color: #fff;
    text-decoration: none;
    transition: color 0.3s linear;

    &:hover {
      color: #000333;
    }
  }
  @media only screen and (min-width: 768px) {
    display: none;
  }
`

const Menu = ({ open }) => (
  <StyledMenu open={open}>
    <Link to="/">Home</Link>
    <Link to="/">About us</Link>
    <Link to="/">Underground Locating Services</Link>
    <Link to="/">Locating Methods</Link>
    <Link to="/">Contact</Link>
  </StyledMenu>
)

export default Menu
