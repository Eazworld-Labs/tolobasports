/* eslint react/prop-types :0*/
import styled, { css } from 'styled-components'

const StyledHeader = styled.header`
  height: 40rem;
  margin-bottom: 6rem;


  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;


  ${(props) =>
    props.images === 'contact' &&
    css`
      background-image: url('/images/pc110.jpeg');
    `}
  ${(props) =>
    props.images === 'about' &&
    css`
      background-image: url('/images/pc120.jpeg');
    `}
  ${(props) =>
    props.images === 'faq' &&
    css`
      background-image: url('/images/pc141.jpeg');
    `}
  ${(props) =>
    props.images === 'scout' &&
    css`
      background-image: url('/pc37.jpg');
    `}
  ${(props) =>
    props.images === 'mentor' &&
    css`
      background-image: url('/pc10.jpg');
    `}
  ${(props) =>
    props.images === 'part' &&
    css`
      background-image: url('/pc11.jpg');
    `}
  ${(props) =>
    props.images === 'test' &&
    css`
      background-image: url('/pc15.jpg');
    `}
`
function Header({ images, children }) {
  return <StyledHeader images={images}>{children}</StyledHeader>
}

export default Header
