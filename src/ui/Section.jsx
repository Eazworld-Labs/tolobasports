/* eslint react/prop-types: 0*/
import styled, { css } from 'styled-components'
import { devicesMax } from '../styles/BreakPoint'

const StyledSection = styled.section`
margin-bottom: 8rem;


@media ${devicesMax.md}{
  margin-bottom: 4rem;
}
  ${(props) => props.type === 'welcome' && css``}

 ${(props) =>
   props.type === 'padd' &&
   css`
     padding: 8rem;
     @media ${devicesMax.md} {
       padding: 2rem;
     }
   `}
  ${(props) =>
    props.type === 'touch' &&
    css`
      padding: 2rem;
    `}
    ${(props) =>
      props.type === 'gallery' &&
      css`
        padding: 4rem;
      `}
      ${(props) =>
        props.type === 'part' &&
        css`
          padding: 4rem;
          background-image: linear-gradient(
              rgba(0, 0, 0, 0.7),
              rgba(0, 0, 0, 0.7)
            ),
            url('/pc38.jpg');
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          background-attachment: fixed;
          position: relative;
        `}
        ${(props) =>
          props.type === 'parts' &&
          css`
            background-color: var(--color-white);
            margin: 0 4rem;
            display: flex;
          `}
`
function Section({ children, type }) {
  return <StyledSection type={type}>{children}</StyledSection>
}

export default Section
