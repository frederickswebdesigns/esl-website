import React from "react"
import styled from "styled-components"

const CallButton = styled.a`
  display: block;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  padding: 10px 5px;

  border-radius: 15px;
  background: #dc2e22;
  color: white;
  font-family: "Neo Sans Bold Italic";
`

const CallNow = () => <CallButton href="tel:0420346477">Call Now</CallButton>
export default CallNow
