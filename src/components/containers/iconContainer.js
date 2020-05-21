import styled from "styled-components"

const IconContainer = styled.div`
  width: 100%;

  color: #00333;
  padding: 0px 1.0875rem 100px;
  font-family: "Source Sans Pro";
  h2,
  h3 {
    font-family: "Neo Sans Bold Italic";
    text-align: center;
    color: rgb(220, 46, 34);
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
    img {
      display: block;
      text-align: center;
      width: 100px;
      height: 100px;
      margin: 1.45rem auto;
    }
    div {
      background: #fafafa;
      margin: 30px auto;
      padding: 15px 20px 5px;
      width: 350px;
      border-radius: 5px;
      ${"" /* box-shadow: 0px 1px 9px -5px rgba(0, 3, 51, 1); */}

      box-shadow: 10px 10px 0px 0px rgba(238,238,238,1);
    }
  }
`

export default IconContainer
