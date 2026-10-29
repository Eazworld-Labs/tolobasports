import styled from 'styled-components'
import SocialIcon from './SocialIcon'
import { Link } from 'react-router-dom'

const StyledFooter = styled.footer`
  /* height: 16rem; */
  padding: 2rem;
  font-size: 1.2rem;
  border-top: 1px solid var(--color-primary-0);
`
const Img = styled.img`
  height: 12rem;
`
const StyledTop = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const Powered = styled.div`
  background-color: var(--color-secoundary);
  color: var(--color-white);
  display: flex;
  justify-content: center;
  align-items: center;
`
const SpanLink = styled.span`
  color: blue;
`
function Footer() {
  return (
    <StyledFooter>
      <StyledTop>
        <div>
          <Img src="/mloogo.png" alt="logo2" />
        </div>
        <div>
          <p>
            &#169;Copyright 2019 Toloba sports consult. All rights reserved.
          </p>
          <SocialIcon />
        </div>
      </StyledTop>
      <Powered>
        <p>
          Powered by eazword solutions.{'  '}
          <Link to="https://eazworld.com">
            <SpanLink>eazworld.com</SpanLink>
          </Link>
        </p>
      </Powered>
    </StyledFooter>
  )
}

export default Footer
