import styled from "styled-components"

const PageContainer = styled.div`
  display: block;
  width: 90%;

  max-width: 960px;
  margin: 0 auto 50px auto;

  p {
    text-align: left !important;
  }

  a {
    font-weight: 900;
    color: #dc2e22;
  }

  h2 {
    width: 100%;
  }

  @media only screen and (min-width: 1020px) {
    flex-direction: row;
  }
`

export default PageContainer
