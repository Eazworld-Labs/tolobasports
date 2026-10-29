/* eslint react/prop-types: 0*/
import styled, { css } from 'styled-components'
import { devicesMax } from '../styles/BreakPoint'

const StyledSection = styled.section`
margin-bottom: var(--space-11);


@media ${devicesMax.md}{
  margin-bottom: var(--space-8);
}
  ${(props) => props.type === 'welcome' && css``}

 ${(props) =>
   props.type === 'padd' &&
   css`
     padding: var(--space-11);
     @media ${devicesMax.md} {
       padding: var(--space-5);
     }
   `}
  ${(props) =>
    props.type === 'touch' &&
    css`
      padding: var(--space-5);
    `}
    ${(props) =>
      props.type === 'gallery' &&
      css`
        padding: var(--space-8);
      `}
      ${(props) =>
        props.type === 'part' &&
        css`
          padding: var(--space-8);
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
