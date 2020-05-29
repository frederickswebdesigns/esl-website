import React from "react"
import styled from "styled-components"

const StyledQuoteForm = styled.div`
  width: 100%;
  color: white;
  background: #000333;
  border-radius: 10px;
  border-left: 15px solid #dc2e22;
  form {
    padding: 0 1.0875rem 1.45rem;
    display: block;
    margin: 0 auto;
    width: 90%;
    font-family: "Neo Sans Bold Italic";
  }
  button {
    color: white;
    background: #dc2e22;
    border: none;
    padding: 20px;
    width: 100%;
    border-radius: 10px;
  }
  h2 {
    padding-top: 1.45rem;
    text-align: center;
    color: white;
  }
  input,
  textarea {
    width: 100%;
  }
  @media only screen and (min-width: 769px) {
    width: 50%;
    max-width: 450px;
  }
`
const QuoteForm = () => (
  <StyledQuoteForm>
    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <h2>Get a Free Quote!</h2>
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label>
          Name: <input type="text" name="name" />
        </label>
      </p>
      <p>
        <label>
          Email: <input type="email" name="email" />
        </label>
      </p>
      <p>
        <label>
          Phone: <input type="email" name="email" />
        </label>
      </p>
      <p>
        <label>
          Suburb: <input type="email" name="email" />
        </label>
      </p>
      <p>
        <label>
          State: <input type="email" name="email" />
        </label>
      </p>
      <p>
        <label>
          Message: <textarea name="message"></textarea>
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </StyledQuoteForm>
)

export default QuoteForm
