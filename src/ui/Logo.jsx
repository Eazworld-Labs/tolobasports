/* eslint react/prop-types: 0*/
import styled, { css } from 'styled-components'
import { devicesMax } from '../styles/BreakPoint'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const StyledLogo = styled.div`
  display: flex;
  height: inherit;
  align-items: center;
  position: absolute;

  ${(props) =>
    props.position === 'header' &&
    css`
      left: 50px;
    `}


   @media ${devicesMax.md} {
    left: 10px;
  }
  @media ${devicesMax.sm} {
    left: 5px;
  }
`

const Img = styled(LazyLoadImage)`
  margin: 0 auto;
  ${(props) =>
    props.type === 'small' &&
    css`
      height: 3rem;
    `}
  ${(props) =>
    props.type === 'big' &&
    css`
      height: 15rem;
      @media ${devicesMax.md} {
        height: 10rem;
      }
    `}
`

function Logo({ type, img, position }) {
  return (
    <StyledLogo>
      <Img src={img} alt="Logo" type={type} postion={position} loading="lazy" />
    </StyledLogo>
  )
}

export default Logo
