import PropTypes from "prop-types"
import React, { useState } from "react"
import Burger from "./navigation/burger"
import Nav from "./navigation/nav"
import styled from "styled-components"
import DbydCert from "./gatsbyimages/dbydCert"
import CallNow from "./callNow"
import AnimatedSvg from "./animatedSvg"
import Menu from "./navigation/menu"
const HeaderContainer = styled.header`
  width: 100%;
  background: #fff;
  position: fixed;
  top: 0;
  z-index: 999;
  box-shadow: 0px 4px 9px -7px rgba(0, 3, 51, 1);
  @media only screen and (min-width: 769px) {
    position: static;
    box-shadow: none;
  }
`
const HeaderWrapper = styled.div`
  max-width: 1200px;
  /* min-width: 90%; */
  padding: 0 1.0875rem;
  margin: 0 auto;
  .callnow-dbyd {
    display: none;
  }
  @media only screen and (min-width: 769px) {
    .callnow-dbyd {
      display: block;
      margin: 10px;
    }
  }
`
const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Header = ({ siteTitle }) => {
  const [open, setOpen] = useState(false)
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <HeaderSection>
          <AnimatedSvg />
          <div className="callnow-dbyd">
            <DbydCert />
            <CallNow />
          </div>
        </HeaderSection>
      </HeaderWrapper>
      <Nav />
      <div>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </HeaderContainer>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
