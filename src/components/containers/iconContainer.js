import styled from "styled-components"

const IconContainer = styled.div`
  width: 100%;

  color: #000333;
  padding: 100px 1.0875rem 100px;
  font-family: "Source Sans Pro";
  h2,
  h3 {
    font-family: "Neo Sans Bold Italic";
    text-align: center;
  }

  p {
    text-align: center;
  }
  .iconWrapper {
    margin: 0 auto;
    display: flex;
    width: 100%;
    max-width: 1208px;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    div {
      background: white;
      margin: 30px auto;
      padding: 15px 20px 5px;
      width: 300px;
      border-radius: 5px;
      box-shadow: 0px 1px 9px -5px rgba(0, 3, 51, 1);
    }
  }
`

export default IconContainer
