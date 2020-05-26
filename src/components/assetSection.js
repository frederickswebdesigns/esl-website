import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  background: #eee;
  margin-top: 100px;
  padding: 1rem;
  ${"" /* border-top: solid 25px #000333;
  border-bottom: solid 25px #000333; */}
`
const StyledContainer = styled.div`
  max-width: 1208px;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #000333;
  a {
    text-decoration: none;
    font-family: "Neo Sans Bold Italic";
    color: black;
    transition: 0.2s all;
  }

  a:hover {
    color: #dc2e22;
  }
  .go {
    display: inline-block;
    color: white;
    background: #dc2e22;
    padding: 20px;
    border-radius: 10px;
  }
  .go:hover {
    color: white;
    background: #000333;
  }

  div {
    margin: 30px 10px;
    width: 80%;
  }
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    align-items: baseline;
    div {
      width: 50%;
    }
  }
`
const AssetBlock = () => (
  <StyledWrapper>
    <StyledContainer>
      <div>
        <h3>Underground Services</h3>
        <ul>
          <li>
            <Link to="/">
              Underground Telecommunications & Power Locating &#10132;
            </Link>
          </li>
          <li>
            <Link to="/">Underground Water Pipe Locating &#10132;</Link>
          </li>
          <li>
            <Link to="/">Underground Gas line Locating &#10132;</Link>
          </li>
          <li>
            <Link to="/">Underground Sewer Locating &#10132;</Link>
          </li>
        </ul>
      </div>

      <div style={{ textAlign: "right" }}>
        <h3>Underground Cable & Pipe Locating</h3>
        <p>
          If you are planning a project that requires digging or excavating,
          contact us today for the most accurate underground pipe and cable
          locating from one of Australia’s leading underground utility locating
          services Queensland & Northern NSW.
        </p>
        <Link className="go" to="/">
          Contact us &#10132;
        </Link>
      </div>
    </StyledContainer>
  </StyledWrapper>
)

export default AssetBlock
