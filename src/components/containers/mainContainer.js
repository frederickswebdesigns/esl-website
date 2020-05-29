import styled from "styled-components"

const MainContainer = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  flex-direction: column;
  max-width: 1208px;
  margin: 0 auto;
  p {
    text-align: left !important;
  }
  padding: 0 1.0875rem 1.45rem;

  .leftContent {
    h2 {
      text-align: left;
      width: 100%;
    }
    width: 100%;
    text-align: left;
  }
  @media only screen and (min-width: 769px) {
    flex-direction: row;
    .leftContent {
      ${"" /* width: 50%; */}
      width: 604px;
      padding-right: 1rem;
    }
  }
`

export default MainContainer
