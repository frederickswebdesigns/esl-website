import styled from "styled-components"

const Razor = styled.div`
  position: relative;
  width: 100%;

  background: ${props => props.background || "#fff"};
  box-sizing: border-box;
  padding: 100px 1.0875rem 100px;

  z-index: 10;
  h2 {
    font-family: "Neo Sans Bold Italic";
    text-align: center;
  }
  font-family: "Source Sans Pro";
  color: #000333;

  div {
    width: 100%;
    max-width: 1208px;
    margin: 0 auto;
  }

  p {
    text-align: center;
  }

  &:before {
    border-top: solid 25px #eee;
    position: absolute;
    z-index: -10;
    width: 100%;
    height: 100%;
    content: "";
    background: inherit;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0%;
    transform-origin: top left;
    transform: ${props => props.skew || "skewY(-4deg)"};
  }
  /* &:after {
    border-bottom: solid 25px #eee;
    position: absolute;
    z-index: -11;
    width: 100%;
    height: 100%;
    content: "";
    background: inherit;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0%;
    transform-origin: bottom left;
    transform: skewY(4deg);
  } */
`

export default Razor