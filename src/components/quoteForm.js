import React from "react"
import styled from "styled-components"

const StyledQuoteForm = styled.aside`
  width: 100%;
  color: white;
  background: #000333;
  border-radius: 10px;
  border-left: 15px solid #dc2e22;
  margin: 20px auto;
  form {
    padding: 0 1.0875rem 1.45rem;
    display: block;
    margin: 0 auto;
    width: 90%;
    font-family: "Neo Sans Bold Italic";
  }
  input:focus,
  textarea:focus,
  select:focus {
    border: 5px solid #dc2e22;
  }
  button {
    color: white;
    background: #dc2e22;
    border: none;
    padding: 20px;
    width: 100%;
    border-radius: 10px;
  }
  span {
    font-family: "Source Sans Pro";
  }
  h2 {
    padding-top: 1.45rem;
    text-align: center;
    color: white;
  }
  input,
  textarea,
  select {
    width: 100%;
  }

  textarea {
    height: 150px;
  }
  @media only screen and (min-width: 1020px) {
    width: 40%;
    margin: 0px;
  }
`
const QuoteForm = props => (
  <StyledQuoteForm>
    <form
      name={`${props.formTitle}`}
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <h2>Get a Free Quote!</h2>
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label>
          Name <span>(Required)</span>:{" "}
          <input type="text" name="name" required />
        </label>
      </p>
      <p>
        <label>
          Email <span>(Required)</span>:{" "}
          <input type="email" name="email" required />
        </label>
      </p>
      <p>
        <label>
          Phone:{" "}
          <input
            type="tel"
            pattern="^\(?(?:\+?61|0)(?:(?:2\)?[ -]?(?:3[ -]?[38]|[46-9][ -]?[0-9]|5[ -]?[0-35-9])|3\)?(?:4[ -]?[0-57-9]|[57-9][ -]?[0-9]|6[ -]?[1-67])|7\)?[ -]?(?:[2-4][ -]?[0-9]|5[ -]?[2-7]|7[ -]?6)|8\)?[ -]?(?:5[ -]?[1-4]|6[ -]?[0-8]|[7-9][ -]?[0-9]))(?:[ -]?[0-9]){6}|4\)?[ -]?(?:(?:[01][ -]?[0-9]|2[ -]?[0-57-9]|3[ -]?[1-9]|4[ -]?[7-9]|5[ -]?[018])[ -]?[0-9]|3[ -]?0[ -]?[0-5])(?:[ -]?[0-9]){5})$"
            name="phone"
            required
          />
        </label>
      </p>
      <p>
        <label>
          Suburb: <input type="text" name="suburb" />
        </label>
      </p>

      <p>
        <label>
          State:{" "}
          <select name="state[]">
            <option value="queensland">QLD</option>
            <option value="new south wales">NSW</option>
          </select>
        </label>
      </p>
      <p>
        <label>
          Message <span>(Required)</span>:{" "}
          <textarea name="message" required></textarea>
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </StyledQuoteForm>
)

export default QuoteForm
