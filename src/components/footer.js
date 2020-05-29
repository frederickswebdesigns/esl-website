import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
const StyledFooter = styled.footer`
  width: 100%;
  background: #000333;
  color: white;
`
const StyledWrapper = styled.div`
  display: flex;
  max-width: 1208px;
  margin: 0 auto;
  justify-content: space-between;
  width: 90%;
  ${"" /* flex-direction: column; */}
  flex-wrap: wrap;
  padding: 50px 0px 0px 0px;
  h3 {
    border-left: 5px solid #dc2e22;
    padding-left: 5px;
  }
  p,
  a {
    font-size: 0.9rem;
  }
  a {
    text-decoration: none;
    color: white;
    font-family: "Neo Sans Bold Italic";
    transition: 0.2s all;
  }
  a:hover {
    color: #dc2e22;
  }
  @media only screen and (min-width: 769px) {
    flex-direction: row;
  }
`
const StyledNav = styled.nav`
  display: block;

  ul {
    list-style-type: none;
    margin: 0;
  }
`

const StyledCredits = styled.div`
  width: 100%;
  background: #000333;
  text-align: center;
  color: #eee;
  font-size: 0.8rem;
  padding: 10px 0;
  a {
    color: #eee;
  }
`
const Footer = () => (
  <StyledFooter>
    <StyledWrapper>
      {/* © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a> */}
      <div>
        <h3>Information</h3>
        <p>Servicing all of Brisbane, Gold Coast and Northern NSW.</p>
        <p>
          <srong>
            <FontAwesomeIcon icon={faPhone} /> Phone:
          </srong>{" "}
          <a href="tel:0420346477">0420 346 477</a>
        </p>
        <p>
          <srong>
            <FontAwesomeIcon icon={faEnvelope} /> Email:
          </srong>{" "}
          <a href="mailto:info@expertservicelocating.com.au">
            info@expertservicelocating.com.au
          </a>
        </p>
        <p>
          <a
            href="https://www.facebook.com/expertservicelocating"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} /> Facebook
          </a>
        </p>

        <p>
          <strong>Head Office Postal Address (QLD & NSW): </strong>
          <br />
          PO Box 1366 Coolangatta QLD 4225
        </p>
      </div>
      <StyledNav>
        <h3>Navigation</h3>
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
    <StyledCredits>
      © {new Date().getFullYear()} Expert Service Locating Pty Ltd &middot; ABN:
      99 166 965 591 &middot; Website by{" "}
      <a
        href="https://www.pixelize.com.au/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Web Design Gold Coast
      </a>
    </StyledCredits>
  </StyledFooter>
)

export default Footer
