/* eslint react/prop-types: 0*/
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { devicesMax } from '../styles/BreakPoint'

// mloogo.png is a 2000x2000 file with a lot of transparent padding, so the
// box is cropped with object-fit instead of letting the padding take space.
const LogoLink = styled(Link)`
  display: block;
  flex: none;
  width: 9.2rem;
  height: 6.4rem;

  @media ${devicesMax.md} {
    width: 8rem;
    height: 5.6rem;
  }

  ${(props) =>
    props.$size === 'lg' &&
    css`
      width: 13rem;
      height: 9rem;

      @media ${devicesMax.md} {
        width: 13rem;
        height: 9rem;
      }
    `}
`

const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 45%;
`

function Logo({ size }) {
  return (
    <LogoLink to="/" $size={size}>
      <Img src="/mloogo.png" alt="Toloba Sports Consult" />
    </LogoLink>
  )
}

export default Logo
