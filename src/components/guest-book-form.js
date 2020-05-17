import React from "react"
import styled from "styled-components"

import Banner from "../components/banner"
import { colors } from "../utils"

import WishesForBabyBannerImg from "../images/wishes-for-baby-banner.jpg"

const GuestBookForm = () => (
  <FormContainer
    name="contact"
    method="post"
    netlify-honeypot="bot-field"
    data-netlify="true"
    action="/"
  >
    <input type="hidden" name="form-name" value="contact" />
    <label>
      Name
      <input type="text" name="Name" required />
    </label>
    <label>
      Message for Joey and Nicole{" "}
      <input type="text" name="Message for parents" required />
    </label>
    <Banner img={WishesForBabyBannerImg} width="contain" />
    <label>
      I hope that you learn
      <input type="text" name="I hope that you learn" required />
    </label>
    <label>
      I hope that you aren't afraid
      <input type="text" name="I hope that you aren't afraid" required />
    </label>
    <label>
      I hope you love
      <input type="text" name="I hope you love" required />
    </label>
    <label>
      I hope you get
      <input type="text" name="I hope you get" required />
    </label>
    <label>
      I hope you laugh
      <input type="text" name="I hope you laugh" required />
    </label>
    <label>
      I hope you never forget
      <input type="text" name="I hope you never forget" required />
    </label>
    <label>
      I hope you ignore
      <input type="text" name="I hope you ignore" required />
    </label>
    <label>
      I hope you become
      <input type="text" name="I hope you become" required />
    </label>
    <label>
      I hope you respect
      <input type="text" name="I hope you respect" required />
    </label>
    <label>
      I hope you grow
      <input type="text" name="I hope you grow" required />
    </label>
    <button type="submit">Submit</button>
  </FormContainer>
)

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  margin: 0 auto 80px;

  input {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0 30px;
    box-sizing: border-box;
  }

  button {
    background: ${colors.primary};
    border: none;
    padding: 15px 20px;
    text-decoration: none;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 3px;
    color: ${colors.white};
  }
`

export default GuestBookForm