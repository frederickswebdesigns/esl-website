import PropTypes from "prop-types"
import React from "react"

import Nav from "./navigation/nav"
import styled from "styled-components"
import DbydCert from "./gatsbyimages/dbydCert"
import CallNow from "./callNow"
import AnimatedSvg from "./animatedSvg"
const HeaderContainer = styled.header`
  width: 100%;
  background: #fff;
  position: fixed;
  top: 0;
  z-index: 9999999;
  box-shadow: 0px 4px 9px -7px rgba(0, 3, 51, 1);
  @media only screen and (min-width: 768px) {
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
  @media only screen and (min-width: 768px) {
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
